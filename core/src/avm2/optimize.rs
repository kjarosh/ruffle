use crate::avm2::activation::Activation;
use crate::avm2::class::Class;
use crate::avm2::method::{BytecodeMethod, ResolvedParamConfig};
use crate::avm2::multiname::Multiname;
use crate::avm2::object::{ClassObject, TObject};
use crate::avm2::op::Op;
use crate::avm2::property::Property;
use crate::avm2::verify::JumpSources;
use crate::avm2::vtable::VTable;

use gc_arena::Gc;
use std::collections::HashMap;

#[allow(clippy::enum_variant_names)]
#[derive(Clone, Copy, Debug)]
enum NullState {
    NotNull,
    MaybeNull,
    IsNull,
}

#[derive(Clone, Copy)]
struct OptValue<'gc> {
    // This corresponds to the compile-time assumptions about the type:
    // - primitive types can't be undefined or null,
    // - Object (and any other non-primitive type) is non-undefined, but can be null
    // - None (the * type) can be any value,
    // - a value typed as int can be stored as a Number (and vice versa),
    //   BUT an int-typed value should always pass `is int`
    //   (say, a Value::Number above hardcoded int-range that's still representable as i32).
    // Note that `null is Object` is still `false`. So think of this type more in terms of
    // "could this value be a possible value of `var t: T`"
    pub class: Option<Class<'gc>>,

    pub vtable: Option<VTable<'gc>>,

    // true if the value is guaranteed to be Value::Integer
    // should only be set if class is numeric.
    pub contains_valid_integer: bool,
    // true if the value is guaranteed to be Value::Integer AND is >=0
    // should only be set if class is numeric.
    pub contains_valid_unsigned: bool,

    // TODO: FP actually has a separate `null` type just for this, this can be observed in VerifyErrors
    // (a separate type would also prevent accidental "null int" values)
    pub null_state: NullState,
}
impl<'gc> OptValue<'gc> {
    pub fn any() -> Self {
        Self {
            class: None,
            vtable: None,
            contains_valid_integer: false,
            contains_valid_unsigned: false,
            null_state: NullState::MaybeNull,
        }
    }

    pub fn null() -> Self {
        Self {
            class: None,
            vtable: None,
            null_state: NullState::IsNull,
            ..Self::any()
        }
    }

    pub fn of_type(class: Class<'gc>) -> Self {
        Self {
            class: Some(class),
            vtable: Some(class.instance_vtable()),
            ..Self::any()
        }
    }

    pub fn vtable(self) -> Option<VTable<'gc>> {
        if let Some(class) = self.class {
            if class.is_interface() {
                return None;
            }
        }

        self.vtable
    }

    pub fn is_null(self) -> bool {
        matches!(self.null_state, NullState::IsNull)
    }

    pub fn not_null(self, activation: &mut Activation<'_, 'gc>) -> bool {
        if matches!(self.null_state, NullState::NotNull) {
            return true;
        }

        let classes = activation.avm2().classes();

        // Primitives are always not-null
        self.class == Some(classes.int.inner_class_definition())
            || self.class == Some(classes.uint.inner_class_definition())
            || self.class == Some(classes.number.inner_class_definition())
            || self.class == Some(classes.boolean.inner_class_definition())
            || self.class == Some(classes.void.inner_class_definition())
    }
}

impl<'gc> std::fmt::Debug for OptValue<'gc> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> Result<(), std::fmt::Error> {
        f.debug_struct("OptValue")
            .field("class", &self.class)
            .field("contains_valid_integer", &self.contains_valid_integer)
            .field("contains_valid_unsigned", &self.contains_valid_unsigned)
            .field("null_state", &self.null_state)
            .finish()
    }
}

#[derive(Clone, Debug)]
struct Locals<'gc>(Vec<OptValue<'gc>>);

impl<'gc> Locals<'gc> {
    fn new(size: usize) -> Self {
        Self(vec![OptValue::any(); size])
    }

    fn set_any(&mut self, index: usize) {
        self.0[index] = OptValue::any();
    }

    fn set(&mut self, index: usize, value: OptValue<'gc>) {
        self.0[index] = value;
    }

    fn at(&self, index: usize) -> OptValue<'gc> {
        self.0[index]
    }

    fn len(&self) -> usize {
        self.0.len()
    }
}

#[derive(Clone, Debug)]
struct Stack<'gc>(Vec<OptValue<'gc>>);

impl<'gc> Stack<'gc> {
    fn new() -> Self {
        Self(Vec::new())
    }

    fn push_class_object(&mut self, class: ClassObject<'gc>) {
        self.0
            .push(OptValue::of_type(class.inner_class_definition()));
    }

    fn push_class(&mut self, class: Class<'gc>) {
        self.0.push(OptValue::of_type(class));
    }

    fn push_class_not_null(&mut self, class: Class<'gc>) {
        let mut value = OptValue::of_type(class);
        value.null_state = NullState::NotNull;

        self.0.push(value);
    }

    fn push_any(&mut self) {
        self.0.push(OptValue::any());
    }

    fn push(&mut self, value: OptValue<'gc>) {
        self.0.push(value);
    }

    fn pop(&mut self) -> Option<OptValue<'gc>> {
        // the Option will not needed once we get cross-block stack verification
        self.0.pop()
    }

    fn pop_or_any(&mut self) -> OptValue<'gc> {
        // the unwrap will not needed once we get cross-block stack verification
        self.0.pop().unwrap_or(OptValue::any())
    }

    pub fn pop_for_multiname(&mut self, multiname: Gc<'gc, Multiname<'gc>>) {
        if multiname.has_lazy_name() {
            self.0.pop();
        }
        if multiname.has_lazy_ns() {
            self.0.pop();
        }
    }

    fn popn(&mut self, count: u32) {
        for _ in 0..count {
            self.pop();
        }
    }

    fn clear(&mut self) {
        self.0.clear();
    }
}

pub fn optimize<'gc>(
    activation: &mut Activation<'_, 'gc>,
    method: &BytecodeMethod<'gc>,
    code: &mut Vec<Op<'gc>>,
    resolved_parameters: &[ResolvedParamConfig<'gc>],
    return_type: Option<Class<'gc>>,
    jump_targets: HashMap<i32, JumpSources>,
) {
    // These make the code less readable
    #![allow(clippy::collapsible_if)]
    #![allow(clippy::manual_filter)]
    #![allow(clippy::single_match)]

    // this is unfortunate, but way more convenient than grabbing types from Activation
    struct Types<'gc> {
        pub object: Class<'gc>,
        pub int: Class<'gc>,
        pub uint: Class<'gc>,
        pub number: Class<'gc>,
        pub boolean: Class<'gc>,
        pub class: Class<'gc>,
        pub string: Class<'gc>,
        pub array: Class<'gc>,
        pub function: Class<'gc>,
        pub void: Class<'gc>,
        pub namespace: Class<'gc>,
    }
    let types = Types {
        object: activation.avm2().classes().object.inner_class_definition(),
        int: activation.avm2().classes().int.inner_class_definition(),
        uint: activation.avm2().classes().uint.inner_class_definition(),
        number: activation.avm2().classes().number.inner_class_definition(),
        boolean: activation.avm2().classes().boolean.inner_class_definition(),
        class: activation.avm2().classes().class.inner_class_definition(),
        string: activation.avm2().classes().string.inner_class_definition(),
        array: activation.avm2().classes().array.inner_class_definition(),
        function: activation
            .avm2()
            .classes()
            .function
            .inner_class_definition(),
        void: activation.avm2().classes().void.inner_class_definition(),
        namespace: activation
            .avm2()
            .classes()
            .namespace
            .inner_class_definition(),
    };

    let method_body = method
        .body()
        .expect("Cannot verify non-native method without body!");

    // This can probably be done better by recording the receiver in `Activation`,
    // but this works since it's guaranteed to be set in `Activation::from_method`.
    let this_value = activation.local_register(0);

    let (this_class, this_vtable) = if let Some(this_class) = activation.subclass_object() {
        if this_value.is_of_type(activation, this_class.inner_class_definition()) {
            (
                Some(this_class),
                Some(this_class.inner_class_definition().instance_vtable()),
            )
        } else if this_value
            .as_object()
            .and_then(|o| o.as_class_object())
            .map(|c| c.inner_class_definition() == this_class.inner_class_definition())
            .unwrap_or(false)
        {
            // Static method
            (
                Some(activation.avm2().classes().class),
                Some(this_class.class_vtable()),
            )
        } else {
            (None, None)
        }
    } else {
        (None, None)
    };

    let this_value = OptValue {
        class: this_class.map(|c| c.inner_class_definition()),
        vtable: this_vtable,
        contains_valid_integer: false,
        contains_valid_unsigned: false,
        null_state: NullState::NotNull,
    };

    let argument_types = resolved_parameters
        .iter()
        .map(|arg| arg.param_type)
        .collect::<Vec<_>>();

    // Initial set of local types
    let mut initial_local_types = Locals::new(method_body.num_locals as usize);
    initial_local_types.set(0, this_value);

    for (i, argument_type) in argument_types.iter().enumerate() {
        if let Some(argument_type) = argument_type {
            initial_local_types.set(i + 1, OptValue::of_type(*argument_type));
            // `i + 1` because the receiver takes up local #0
        }
    }

    // Logic to only allow for type-based optimizations on types that
    // we're absolutely sure about- invalidate the local register's
    // known type if any other register-modifying opcodes mention them
    // anywhere else in the function.
    for op in &*code {
        match op {
            Op::SetLocal { index }
            | Op::Kill { index }
            | Op::IncLocal { index }
            | Op::IncLocalI { index }
            | Op::DecLocal { index }
            | Op::DecLocalI { index } => {
                initial_local_types.set_any(*index as usize);
            }
            Op::HasNext2 {
                object_register,
                index_register,
            } => {
                initial_local_types.set_any(*object_register as usize);
                initial_local_types.set_any(*index_register as usize);
            }
            _ => {}
        }
    }

    let mut has_simple_scoping = false;
    if !jump_targets.contains_key(&0) && !jump_targets.contains_key(&1) {
        if matches!(code.get(0), Some(Op::GetLocal { index: 0 }))
            && matches!(code.get(1), Some(Op::PushScope))
        {
            has_simple_scoping = true;
            for op in code.iter().skip(2) {
                match op {
                    Op::PushScope | Op::PushWith | Op::PopScope => {
                        has_simple_scoping = false;
                    }
                    _ => {}
                }
            }
        }
    }

    if !method_body.exceptions.is_empty() {
        has_simple_scoping = false;
    }

    // TODO: Fill out all ops, then add scope stack and stack merging, too
    let mut state_map: HashMap<i32, Locals<'gc>> = HashMap::new();

    let mut stack = Stack::new();
    let mut scope_stack = Stack::new();
    let mut local_types = initial_local_types.clone();
    let mut last_op_was_block_terminating = false;

    for (i, op) in code.iter_mut().enumerate() {
        if let Some(jump_sources) = jump_targets.get(&(i as i32)) {
            if let JumpSources::Known(sources) = jump_sources {
                // Avoid handling multiple sources for now
                if sources.len() == 1 {
                    // We can merge the locals easily, now
                    let source_i = sources[0];

                    if let Some(source_local_types) = state_map.get(&source_i) {
                        let mut merged_types = initial_local_types.clone();
                        assert_eq!(source_local_types.len(), local_types.len());

                        if last_op_was_block_terminating {
                            // If the last op was a block-terminating op, the
                            // only possible way this is reachable is from
                            // the jump. Just set the types to the types
                            // at the jump.
                            merged_types = source_local_types.clone();
                        } else {
                            for (i, target_local) in local_types.0.iter().enumerate() {
                                let source_local = source_local_types.at(i);
                                // TODO: Check superclasses, too
                                if let (Some(source_local_class), Some(target_local_class)) =
                                    (source_local.class, target_local.class)
                                {
                                    if source_local_class == target_local_class {
                                        merged_types.set(i, OptValue::of_type(source_local_class));
                                    }
                                }
                            }
                        }

                        local_types = merged_types;
                    } else {
                        local_types = initial_local_types.clone();
                    }
                } else {
                    local_types = initial_local_types.clone();
                }
            } else {
                local_types = initial_local_types.clone();
            }

            stack.clear();
            scope_stack.clear();
        }

        last_op_was_block_terminating = false;

        match op {
            Op::CoerceA => {
                // This does actually inhibit optimizations in FP
                stack.pop();
                stack.push_any();
            }
            Op::CoerceB => {
                let stack_value = stack.pop_or_any();
                if stack_value.class == Some(types.boolean) {
                    *op = Op::Nop;
                }
                stack.push_class(types.boolean);
            }
            Op::CoerceD => {
                let stack_value = stack.pop_or_any();
                if stack_value.class == Some(types.number)
                    || stack_value.class == Some(types.int)
                    || stack_value.class == Some(types.uint)
                {
                    *op = Op::Nop;
                }
                stack.push_class(types.number);
            }
            Op::CoerceI => {
                let stack_value = stack.pop_or_any();
                if stack_value.class == Some(types.int) || stack_value.contains_valid_integer {
                    *op = Op::Nop;
                }
                stack.push_class(types.int);
            }
            Op::CoerceO => {
                stack.pop();

                stack.push_class(types.object);
            }
            Op::ConvertO => {
                // This has no stack effect that code can notice:
                // either it will push the value back on the stack
                // (no difference) or it will throw an error (which
                // will clear the stack).
            }
            Op::CoerceS => {
                let stack_value = stack.pop_or_any();
                if stack_value.is_null() {
                    *op = Op::Nop;
                }
                stack.push_class(types.string);
            }
            Op::ConvertS => {
                stack.pop();
                stack.push_class_not_null(types.string);
            }
            Op::CoerceU => {
                let stack_value = stack.pop_or_any();
                if stack_value.class == Some(types.uint) || stack_value.contains_valid_unsigned {
                    *op = Op::Nop;
                }
                stack.push_class(types.uint);
            }
            Op::Equals
            | Op::StrictEquals
            | Op::LessEquals
            | Op::LessThan
            | Op::GreaterThan
            | Op::GreaterEquals => {
                stack.pop();
                stack.pop();
                stack.push_class(types.boolean);
            }
            Op::Not => {
                stack.pop();
                stack.push_class(types.boolean);
            }
            Op::PushTrue | Op::PushFalse => {
                stack.push_class(types.boolean);
            }
            Op::PushNull => {
                // TODO: we should push null type here
                stack.push(OptValue::null());
            }
            Op::PushUndefined => {
                stack.push_class(types.void);
            }
            Op::PushNaN => {
                stack.push_class(types.number);
            }
            Op::PushByte { value } => {
                let mut new_value = OptValue::of_type(types.int);
                new_value.contains_valid_integer = true;
                if *value >= 0 {
                    new_value.contains_valid_unsigned = true;
                }
                stack.push(new_value);
            }
            Op::PushShort { value } => {
                let mut new_value = OptValue::of_type(types.int);
                new_value.contains_valid_integer = true;
                if *value >= 0 {
                    new_value.contains_valid_unsigned = true;
                }
                stack.push(new_value);
            }
            Op::PushInt { value } => {
                let mut new_value = OptValue::of_type(types.int);
                if *value < -(1 << 28) || *value >= (1 << 28) {
                    // will be coerced to Number
                } else {
                    new_value.contains_valid_integer = true;
                    if *value >= 0 {
                        new_value.contains_valid_unsigned = true;
                    }
                }
                stack.push(new_value);
            }
            Op::PushUint { value } => {
                let mut new_value = OptValue::of_type(types.uint);
                if *value < (1 << 28) {
                    new_value.contains_valid_integer = true;
                    new_value.contains_valid_unsigned = true;
                }
                stack.push(new_value);
            }
            Op::DecrementI => {
                stack.pop();
                stack.push_class(types.int);
            }
            Op::IncrementI => {
                stack.pop();
                stack.push_class(types.int);
            }
            Op::DecLocalI { index } => {
                local_types.set(*index as usize, OptValue::of_type(types.int));
            }
            Op::DecLocal { index } => {
                local_types.set(*index as usize, OptValue::of_type(types.number));
            }
            Op::IncLocalI { index } => {
                local_types.set(*index as usize, OptValue::of_type(types.int));
            }
            Op::IncLocal { index } => {
                local_types.set(*index as usize, OptValue::of_type(types.number));
            }
            Op::Increment => {
                stack.pop();
                stack.push_class(types.number);
            }
            Op::Decrement => {
                stack.pop();
                stack.push_class(types.number);
            }
            Op::Negate => {
                stack.pop();
                stack.push_class(types.number);
            }
            Op::AddI => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::SubtractI => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::MultiplyI => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::NegateI => {
                stack.pop();
                stack.push_class(types.int);
            }
            Op::Add => {
                let value2 = stack.pop_or_any();
                let value1 = stack.pop_or_any();
                if (value1.class == Some(types.int)
                    || value1.class == Some(types.uint)
                    || value1.class == Some(types.number))
                    && (value2.class == Some(types.int)
                        || value2.class == Some(types.uint)
                        || value2.class == Some(types.number))
                {
                    stack.push_class(types.number);
                } else if (value1.class == Some(types.string) && value1.not_null(activation))
                    || (value2.class == Some(types.string) && value2.not_null(activation))
                {
                    stack.push_class_not_null(types.string);
                } else {
                    stack.push_any();
                }
            }
            Op::Subtract => {
                stack.pop();
                stack.pop();
                stack.push_class(types.number);
            }
            Op::Multiply => {
                stack.pop();
                stack.pop();
                stack.push_class(types.number);
            }
            Op::Divide => {
                stack.pop();
                stack.pop();
                stack.push_class(types.number);
            }
            Op::Modulo => {
                stack.pop();
                stack.pop();
                stack.push_class(types.number);
            }
            Op::BitNot => {
                stack.pop();
                stack.push_class(types.int);
            }
            Op::BitAnd => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::BitOr => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::BitXor => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::LShift => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::RShift => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::URShift => {
                stack.pop();
                stack.pop();
                stack.push_class(types.int);
            }
            Op::PushDouble { .. } => {
                stack.push_class(types.number);
            }
            Op::PushNamespace { .. } => {
                stack.push_class_not_null(types.namespace);
            }
            Op::PushString { .. } => {
                stack.push_class_not_null(types.string);
            }
            Op::NewArray { num_args } => {
                stack.popn(*num_args);

                stack.push_class_not_null(types.array);
            }
            Op::NewObject { num_args } => {
                stack.popn(*num_args * 2);

                stack.push_class_not_null(types.object);
            }
            Op::NewFunction { .. } => {
                stack.push_class_not_null(types.function);
            }
            Op::NewClass { .. } => {
                stack.pop();
                stack.push_class_not_null(types.class);
            }
            Op::NewCatch { .. } => {
                // Avoid handling for now
                stack.push_any();
            }
            Op::IsType { .. } => {
                stack.pop();
                stack.push_class(types.boolean);
            }
            Op::IsTypeLate => {
                stack.pop();
                stack.pop();
                stack.push_class(types.boolean);
            }
            Op::InstanceOf => {
                stack.pop();
                stack.pop();
                stack.push_class(types.boolean);
            }
            Op::TypeOf => {
                stack.pop();
                stack.push_class_not_null(types.string);
            }
            Op::ApplyType { num_types } => {
                stack.popn(*num_types);

                stack.pop();

                stack.push_any();
            }
            Op::CheckFilter => {
                stack.pop();
                stack.push_any();
            }
            Op::Dxns { .. } => {
                // Dxns doesn't change stack or locals
            }
            Op::DxnsLate => {
                stack.pop();
            }
            Op::EscXAttr | Op::EscXElem => {
                stack.pop();
                stack.push_class_not_null(types.string);
            }
            Op::GetDescendants { multiname } => {
                stack.pop_for_multiname(*multiname);

                stack.pop();

                stack.push_any();
            }
            Op::AsTypeLate => {
                stack.pop();
                stack.pop();
                stack.push_any();
            }
            Op::AsType { class } => {
                let stack_value = stack.pop_or_any();

                let class_is_primitive = *class == types.int
                    || *class == types.uint
                    || *class == types.number
                    || *class == types.boolean
                    || *class == types.void;

                let mut new_value = OptValue::any();
                if !class_is_primitive {
                    // if T is non-nullable, we can assume the result is typed T
                    new_value = OptValue::of_type(*class);
                }
                if let Some(stack_class) = stack_value.class {
                    if *class == stack_class {
                        // If type check is guaranteed, preserve original type
                        // TODO: there are more cases when this can succeed,
                        // like inheritance and numbers (`x: Number = 1; x as int;`)
                        new_value = stack_value;
                    }
                }
                if stack_value.is_null() {
                    // null always turns into null
                    *op = Op::Nop;
                    new_value.null_state = NullState::IsNull;
                }
                stack.push(new_value);
            }
            Op::Coerce { class } => {
                let stack_value = stack.pop_or_any();
                let mut new_value = OptValue::of_type(*class);

                if stack_value.is_null() {
                    // Coercing null to a non-primitive or void is a noop.
                    if *class != types.int
                        && *class != types.uint
                        && *class != types.number
                        && *class != types.boolean
                        && *class != types.void
                    {
                        *op = Op::Nop;
                        new_value.null_state = NullState::IsNull;
                    }
                } else if let Some(stack_class) = stack_value.class {
                    // TODO: this could check for inheritance
                    if *class == stack_class {
                        *op = Op::Nop;
                        new_value.null_state = stack_value.null_state;
                    }
                }

                stack.push(new_value);
            }
            Op::PushScope => {
                let stack_value = stack.pop();
                if let Some(value) = stack_value {
                    scope_stack.push(value);
                }
            }
            Op::PushWith => {
                // TODO: Some way to mark scopes as with-scope vs normal-scope?
                let stack_value = stack.pop();
                if let Some(value) = stack_value {
                    scope_stack.push(value);
                }
            }
            Op::PopScope => {
                scope_stack.pop();
            }
            Op::GetScopeObject { .. } => {
                // Avoid handling for now
                stack.push_any();
            }
            Op::GetOuterScope { .. } => {
                // Avoid handling for now
                stack.push_any();
            }
            Op::Pop => {
                stack.pop();
            }
            Op::Dup => {
                let stack_value = stack.pop_or_any();
                stack.push(stack_value);
                stack.push(stack_value);
            }
            Op::Swap => {
                let first = stack.pop_or_any();
                let second = stack.pop_or_any();
                stack.push(first);
                stack.push(second);
            }
            Op::Kill { index } => {
                local_types.set_any(*index as usize);
            }
            Op::SetLocal { index } => {
                let stack_value = stack.pop_or_any();
                local_types.set(*index as usize, stack_value);
            }
            Op::GetLocal { index } => {
                let local_type = local_types.at(*index as usize);
                stack.push(local_type);
            }
            Op::FindPropStrict { multiname } | Op::FindProperty { multiname } => {
                let multiname = *multiname;
                let mut stack_push_done = false;
                stack.pop_for_multiname(multiname);

                if !multiname.has_lazy_component() && has_simple_scoping {
                    let outer_scope = activation.outer();
                    if !outer_scope.is_empty() {
                        if let Some(this_vtable) = this_vtable {
                            if this_vtable.has_trait(&multiname) {
                                *op = Op::GetScopeObject { index: 0 };

                                stack_push_done = true;
                                stack.push(this_value);
                            }
                        } else {
                            stack_push_done = true;
                            stack.push_any();
                        }
                    }

                    if !stack_push_done {
                        if let Some(info) = outer_scope.get_entry_for_multiname(&multiname) {
                            if let Some((class, index)) = info {
                                *op = Op::GetOuterScope { index };

                                stack_push_done = true;
                                if let Some(class) = class {
                                    stack.push_class_object(class);
                                } else {
                                    stack.push_any();
                                }
                            } else {
                                // If `get_entry_for_multiname` returned `Some(None)`, there was
                                // a `with` scope in the outer ScopeChain- abort optimization.
                                stack_push_done = true;
                                stack.push_any();
                            }
                        }
                    }

                    if !stack_push_done {
                        if let Ok(Some((_, script))) =
                            outer_scope.domain().get_defining_script(&multiname)
                        {
                            // NOTE: avmplus rewrites this into a FindDef, and it caches
                            // the results of that FindDef at runtime, rather than caching
                            // the lookup here, in the verifier. However, this discrepancy
                            // is unlikely to cause any real problems with SWFs.
                            *op = Op::GetScriptGlobals { script };

                            if script.traits_loaded() {
                                stack_push_done = true;
                                stack.push_class_not_null(script.global_class());
                            }
                        }
                    }

                    // Ignore global scope for now
                }

                if !stack_push_done {
                    stack.push_any();
                }
            }
            Op::FindDef { .. } => {
                // Avoid handling for now
                stack.push_any();
            }
            Op::In => {
                stack.pop();
                stack.pop();
                stack.push_class(types.boolean);
            }
            Op::NextName => {
                stack.pop();
                stack.pop();
                stack.push_any();
            }
            Op::NextValue => {
                stack.pop();
                stack.pop();
                stack.push_any();
            }
            Op::HasNext => {
                stack.pop();
                stack.pop();
                stack.push_any();
            }
            Op::HasNext2 {
                index_register,
                object_register,
            } => {
                stack.push_class(types.boolean);
                local_types.set_any(*index_register as usize);
                local_types.set_any(*object_register as usize);
            }
            Op::GetSlot { index: slot_id } => {
                let mut stack_push_done = false;
                let stack_value = stack.pop_or_any();

                if let Some(vtable) = stack_value.vtable() {
                    let slot_classes = vtable.slot_classes();
                    let value_class = slot_classes.get(*slot_id as usize).copied();
                    if let Some(mut value_class) = value_class {
                        let resolved_value_class = value_class.get_class(activation);
                        if let Ok(class) = resolved_value_class {
                            stack_push_done = true;

                            if let Some(class) = class {
                                stack.push_class(class);
                            } else {
                                stack.push_any();
                            }
                        }

                        drop(slot_classes);
                        vtable.set_slot_class(
                            activation.context.gc_context,
                            *slot_id as usize,
                            value_class,
                        );
                    }
                }

                if !stack_push_done {
                    stack.push_any();
                }
            }
            Op::SetSlot { .. } => {
                stack.pop();
                stack.pop();
            }
            Op::GetProperty { multiname } => {
                let mut stack_push_done = false;
                stack.pop_for_multiname(*multiname);
                let stack_value = stack.pop_or_any();

                if !multiname.has_lazy_component() {
                    if let Some(vtable) = stack_value.vtable() {
                        match vtable.get_trait(multiname) {
                            Some(Property::Slot { slot_id })
                            | Some(Property::ConstSlot { slot_id }) => {
                                *op = Op::GetSlot { index: slot_id };

                                let mut value_class = vtable.slot_classes()[slot_id as usize];
                                let resolved_value_class = value_class.get_class(activation);
                                if let Ok(class) = resolved_value_class {
                                    stack_push_done = true;

                                    if let Some(class) = class {
                                        stack.push_class(class);
                                    } else {
                                        stack.push_any();
                                    }
                                }

                                vtable.set_slot_class(
                                    activation.context.gc_context,
                                    slot_id as usize,
                                    value_class,
                                );
                            }
                            Some(Property::Virtual {
                                get: Some(disp_id), ..
                            }) => {
                                *op = Op::CallMethod {
                                    num_args: 0,
                                    index: disp_id,
                                    push_return_value: true,
                                };
                            }
                            _ => {}
                        }
                    }
                }
                // `stack_pop_multiname` handled lazy

                if !stack_push_done {
                    stack.push_any();
                }
            }
            Op::InitProperty { multiname } => {
                let set_value = stack.pop_or_any();

                stack.pop_for_multiname(*multiname);
                let stack_value = stack.pop_or_any();
                if !multiname.has_lazy_component() {
                    if let Some(vtable) = stack_value.vtable() {
                        match vtable.get_trait(multiname) {
                            Some(Property::Slot { slot_id })
                            | Some(Property::ConstSlot { slot_id }) => {
                                *op = Op::SetSlot { index: slot_id };

                                // If the set value's type is the same as the type of the slot,
                                // a SetSlotNoCoerce can be emitted.
                                let mut value_class = vtable.slot_classes()[slot_id as usize];
                                let resolved_value_class = value_class.get_class(activation);

                                if let Ok(slot_class) = resolved_value_class {
                                    if let Some(slot_class) = slot_class {
                                        if let Some(set_value_class) = set_value.class {
                                            if set_value_class == slot_class {
                                                *op = Op::SetSlotNoCoerce { index: slot_id };
                                            }
                                        }
                                    } else {
                                        // Slot type was Any, no coercion will be done anyways
                                        *op = Op::SetSlotNoCoerce { index: slot_id };
                                    }
                                }
                            }
                            Some(Property::Virtual {
                                set: Some(disp_id), ..
                            }) => {
                                *op = Op::CallMethod {
                                    num_args: 1,
                                    index: disp_id,
                                    push_return_value: false,
                                };
                            }
                            _ => {}
                        }
                    }
                }
                // `stack_pop_multiname` handled lazy
            }
            Op::SetProperty { multiname } => {
                let set_value = stack.pop_or_any();

                stack.pop_for_multiname(*multiname);
                let stack_value = stack.pop_or_any();
                if !multiname.has_lazy_component() {
                    if let Some(vtable) = stack_value.vtable() {
                        match vtable.get_trait(multiname) {
                            Some(Property::Slot { slot_id }) => {
                                *op = Op::SetSlot { index: slot_id };

                                // If the set value's type is the same as the type of the slot,
                                // a SetSlotNoCoerce can be emitted.
                                let mut value_class = vtable.slot_classes()[slot_id as usize];
                                let resolved_value_class = value_class.get_class(activation);

                                if let Ok(slot_class) = resolved_value_class {
                                    if let Some(slot_class) = slot_class {
                                        if let Some(set_value_class) = set_value.class {
                                            if set_value_class == slot_class {
                                                *op = Op::SetSlotNoCoerce { index: slot_id };
                                            }
                                        }
                                    } else {
                                        // Slot type was Any, no coercion will be done anyways
                                        *op = Op::SetSlotNoCoerce { index: slot_id };
                                    }
                                }
                            }
                            Some(Property::Virtual {
                                set: Some(disp_id), ..
                            }) => {
                                *op = Op::CallMethod {
                                    num_args: 1,
                                    index: disp_id,
                                    push_return_value: false,
                                };
                            }
                            _ => {}
                        }
                    }
                }
                // `stack_pop_multiname` handled lazy
            }
            Op::DeleteProperty { multiname } => {
                stack.pop_for_multiname(*multiname);

                stack.pop();

                stack.push_class(types.boolean);
            }
            Op::Construct { num_args } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop();

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::ConstructSuper { num_args } => {
                // Arguments
                stack.popn(*num_args);

                // Then receiver.
                stack.pop();
            }
            Op::ConstructProp {
                multiname,
                num_args,
            } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop_for_multiname(*multiname);

                // Then receiver.
                stack.pop();

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::Call { num_args } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop();

                stack.pop();

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::CallPropLex {
                multiname,
                num_args,
            } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop_for_multiname(*multiname);

                // Then receiver.
                stack.pop();

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::CallStatic { num_args, .. } => {
                // Arguments
                stack.popn(*num_args);

                // Then receiver.
                stack.pop();

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::CallProperty {
                multiname,
                num_args,
            } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop_for_multiname(*multiname);

                // Then receiver.
                let stack_value = stack.pop_or_any();

                if !multiname.has_lazy_component() {
                    if let Some(vtable) = stack_value.vtable() {
                        match vtable.get_trait(multiname) {
                            Some(Property::Method { disp_id }) => {
                                *op = Op::CallMethod {
                                    num_args: *num_args,
                                    index: disp_id,
                                    push_return_value: true,
                                };
                            }
                            _ => {}
                        }
                    }
                }
                // `stack_pop_multiname` handled lazy

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::CallPropVoid {
                multiname,
                num_args,
            } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop_for_multiname(*multiname);

                // Then receiver.
                let stack_value = stack.pop_or_any();

                if !multiname.has_lazy_component() {
                    if let Some(vtable) = stack_value.vtable() {
                        match vtable.get_trait(multiname) {
                            Some(Property::Method { disp_id }) => {
                                *op = Op::CallMethod {
                                    num_args: *num_args,
                                    index: disp_id,
                                    push_return_value: false,
                                };
                            }
                            _ => {}
                        }
                    }
                }
                // `stack_pop_multiname` handled lazy
            }
            Op::GetSuper { multiname } => {
                stack.pop_for_multiname(*multiname);

                // Receiver
                stack.pop();
            }
            Op::SetSuper { multiname } => {
                stack.pop();

                stack.pop_for_multiname(*multiname);

                // Receiver
                stack.pop();
            }
            Op::CallSuper {
                multiname,
                num_args,
            } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop_for_multiname(*multiname);

                // Then receiver.
                stack.pop();

                // Avoid checking return value for now
                stack.push_any();
            }
            Op::CallSuperVoid {
                multiname,
                num_args,
            } => {
                // Arguments
                stack.popn(*num_args);

                stack.pop_for_multiname(*multiname);

                // Then receiver.
                stack.pop();
            }
            Op::GetGlobalScope => {
                let mut stack_push_done = false;

                let outer_scope = activation.outer();
                if !outer_scope.is_empty() {
                    let global_scope = outer_scope.get_unchecked(0);

                    stack_push_done = true;
                    if let Some(class) = global_scope.values().instance_of() {
                        stack.push_class_object(class);
                    } else {
                        stack.push_any();
                    }
                }

                if !stack_push_done {
                    stack.push_any();
                }
            }
            Op::GetGlobalSlot { index: slot_id } => {
                let mut stack_push_done = false;

                let outer_scope = activation.outer();
                if !outer_scope.is_empty() {
                    let global_scope = outer_scope.get_unchecked(0);

                    if let Some(class) = global_scope.values().instance_of() {
                        let mut value_class =
                            class.instance_vtable().slot_classes()[*slot_id as usize];
                        let resolved_value_class = value_class.get_class(activation);
                        if let Ok(class) = resolved_value_class {
                            stack_push_done = true;

                            if let Some(class) = class {
                                stack.push_class(class);
                            } else {
                                stack.push_any();
                            }
                        }

                        class.instance_vtable().set_slot_class(
                            activation.context.gc_context,
                            *slot_id as usize,
                            value_class,
                        );
                    }
                }

                if !stack_push_done {
                    stack.push_any();
                }
            }
            Op::SetGlobalSlot { .. } => {
                // Avoid handling for now
                stack.pop();
            }
            Op::NewActivation => {
                // Avoid handling for now
                stack.push_any();
            }
            Op::Nop => {}
            Op::DebugFile { .. }
            | Op::DebugLine { .. }
            | Op::Debug { .. }
            | Op::Bkpt
            | Op::BkptLine { .. }
            | Op::Timestamp => {}
            Op::IfTrue { .. } | Op::IfFalse { .. } => {
                stack.pop();
                state_map.insert(i as i32, local_types.clone());
            }
            Op::IfStrictEq { .. }
            | Op::IfStrictNe { .. }
            | Op::IfEq { .. }
            | Op::IfNe { .. }
            | Op::IfGe { .. }
            | Op::IfGt { .. }
            | Op::IfLe { .. }
            | Op::IfLt { .. }
            | Op::IfNge { .. }
            | Op::IfNgt { .. }
            | Op::IfNle { .. }
            | Op::IfNlt { .. } => {
                stack.pop();
                stack.pop();
                state_map.insert(i as i32, local_types.clone());
            }
            Op::Si8 | Op::Si16 | Op::Si32 => {
                stack.pop();
                stack.pop();
            }
            Op::Li8 | Op::Li16 => {
                stack.pop();
                let mut value = OptValue::of_type(types.int);
                value.contains_valid_integer = true;
                stack.push(value);
            }
            Op::Li32 => {
                stack.pop();
                stack.push_class(types.int);
            }
            Op::Sxi1 | Op::Sxi8 | Op::Sxi16 => {
                stack.pop();
                let mut value = OptValue::of_type(types.int);
                value.contains_valid_integer = true;
                stack.push(value);
            }
            Op::Sf32 | Op::Sf64 => {
                stack.pop();
                stack.pop();
            }
            Op::Lf32 | Op::Lf64 => {
                stack.pop();
                stack.push_class(types.number);
            }
            Op::ReturnVoid | Op::Throw | Op::LookupSwitch(_) => {
                // End of block
                stack.clear();
                scope_stack.clear();
                local_types = initial_local_types.clone();
                last_op_was_block_terminating = true;
            }
            Op::ReturnValue => {
                let stack_value = stack.pop_or_any();

                if let Some(return_type) = return_type {
                    let return_type_is_primitive = return_type == types.int
                        || return_type == types.uint
                        || return_type == types.number
                        || return_type == types.boolean
                        || return_type == types.void;

                    if let Some(stack_value_class) = stack_value.class {
                        if stack_value_class == return_type {
                            *op = Op::ReturnValueNoCoerce;
                        }
                    }

                    if !return_type_is_primitive {
                        if stack_value.is_null() {
                            *op = Op::ReturnValueNoCoerce;
                        }
                    }
                } else {
                    // Return type was Any, no coercion will be done anyways
                    *op = Op::ReturnValueNoCoerce;
                }

                // End of block
                stack.clear();
                scope_stack.clear();
                local_types = initial_local_types.clone();
                last_op_was_block_terminating = true;
            }
            Op::Jump { .. } => {
                state_map.insert(i as i32, local_types.clone());

                // End of block
                stack.clear();
                scope_stack.clear();
                local_types = initial_local_types.clone();
                last_op_was_block_terminating = true;
            }
            other => unreachable!(
                "Optimizer hit op {:?}, which cannot appear after the verifier step",
                other
            ),
        }
    }
}
