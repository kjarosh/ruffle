use crate::avm2::class::Class;
use crate::avm2::multiname::Multiname;
use crate::avm2::script::Script;
use crate::string::AvmAtom;

use gc_arena::{Collect, Gc};
use swf::avm2::types::{Class as AbcClass, Exception, Index, LookupSwitch, Method, Namespace};

#[derive(Clone, Collect, Debug)]
#[collect(no_drop)]
pub enum Op<'gc> {
    Add,
    AddI,
    ApplyType {
        num_types: u32,
    },
    AsType {
        class: Class<'gc>,
    },
    AsTypeLate,
    BitAnd,
    BitNot,
    BitOr,
    BitXor,
    Bkpt,
    BkptLine {
        line_num: u32,
    },
    Call {
        num_args: u32,
    },
    CallMethod {
        index: u32,
        num_args: u32,
        push_return_value: bool,
    },
    CallProperty {
        multiname: Gc<'gc, Multiname<'gc>>,

        num_args: u32,
    },
    CallPropLex {
        multiname: Gc<'gc, Multiname<'gc>>,

        num_args: u32,
    },
    CallPropVoid {
        multiname: Gc<'gc, Multiname<'gc>>,

        num_args: u32,
    },
    CallStatic {
        #[collect(require_static)]
        index: Index<Method>,

        num_args: u32,
    },
    CallSuper {
        multiname: Gc<'gc, Multiname<'gc>>,

        num_args: u32,
    },
    CallSuperVoid {
        multiname: Gc<'gc, Multiname<'gc>>,

        num_args: u32,
    },
    CheckFilter,
    Coerce {
        class: Class<'gc>,
    },
    CoerceA,
    CoerceB,
    CoerceD,
    CoerceI,
    CoerceO,
    CoerceS,
    CoerceU,
    Construct {
        num_args: u32,
    },
    ConstructProp {
        multiname: Gc<'gc, Multiname<'gc>>,
        num_args: u32,
    },
    ConstructSuper {
        num_args: u32,
    },
    ConvertO,
    ConvertS,
    Debug {
        is_local_register: bool,
        register_name: AvmAtom<'gc>,
        register: u8,
    },
    DebugFile {
        file_name: AvmAtom<'gc>,
    },
    DebugLine {
        line_num: u32,
    },
    DecLocal {
        index: u32,
    },
    DecLocalI {
        index: u32,
    },
    Decrement,
    DecrementI,
    DeleteProperty {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    Divide,
    Dup,
    Dxns {
        string: AvmAtom<'gc>,
    },
    DxnsLate,
    Equals,
    EscXAttr,
    EscXElem,
    FindDef {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    FindProperty {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    FindPropStrict {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    GetDescendants {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    GetGlobalScope,
    GetGlobalSlot {
        index: u32,
    },
    GetLocal {
        index: u32,
    },
    GetOuterScope {
        index: u32,
    },
    GetProperty {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    GetScopeObject {
        index: u8,
    },
    GetScriptGlobals {
        script: Script<'gc>,
    },
    GetSlot {
        index: u32,
    },
    GetSuper {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    GreaterEquals,
    GreaterThan,
    HasNext,
    HasNext2 {
        object_register: u32,
        index_register: u32,
    },
    IfEq {
        offset: i32,
    },
    IfFalse {
        offset: i32,
    },
    IfGe {
        offset: i32,
    },
    IfGt {
        offset: i32,
    },
    IfLe {
        offset: i32,
    },
    IfLt {
        offset: i32,
    },
    IfNe {
        offset: i32,
    },
    IfNge {
        offset: i32,
    },
    IfNgt {
        offset: i32,
    },
    IfNle {
        offset: i32,
    },
    IfNlt {
        offset: i32,
    },
    IfStrictEq {
        offset: i32,
    },
    IfStrictNe {
        offset: i32,
    },
    IfTrue {
        offset: i32,
    },
    In,
    IncLocal {
        index: u32,
    },
    IncLocalI {
        index: u32,
    },
    Increment,
    IncrementI,
    InitProperty {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    InstanceOf,
    IsType {
        class: Class<'gc>,
    },
    IsTypeLate,
    Jump {
        offset: i32,
    },
    Kill {
        index: u32,
    },
    LessEquals,
    LessThan,
    Lf32,
    Lf64,
    Li16,
    Li32,
    Li8,
    LookupSwitch(#[collect(require_static)] Box<LookupSwitch>),
    LShift,
    Modulo,
    Multiply,
    MultiplyI,
    Negate,
    NegateI,
    NewActivation,
    NewArray {
        num_args: u32,
    },
    NewCatch {
        #[collect(require_static)]
        index: Index<Exception>,
    },
    NewClass {
        #[collect(require_static)]
        index: Index<AbcClass>,
    },
    NewFunction {
        #[collect(require_static)]
        index: Index<Method>,
    },
    NewObject {
        num_args: u32,
    },
    NextName,
    NextValue,
    Nop,
    Not,
    Pop,
    PopScope,
    PushByte {
        value: i8,
    },
    PushDouble {
        value: f64,
    },
    PushFalse,
    PushInt {
        value: i32,
    },
    PushNamespace {
        #[collect(require_static)]
        value: Index<Namespace>,
    },
    PushNaN,
    PushNull,
    PushScope,
    PushShort {
        value: i16,
    },
    PushString {
        string: AvmAtom<'gc>,
    },
    PushTrue,
    PushUint {
        value: u32,
    },
    PushUndefined,
    PushWith,
    ReturnValue,
    ReturnValueNoCoerce,
    ReturnVoid,
    RShift,
    SetGlobalSlot {
        index: u32,
    },
    SetLocal {
        index: u32,
    },
    SetProperty {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    SetSlot {
        index: u32,
    },
    SetSlotNoCoerce {
        index: u32,
    },
    SetSuper {
        multiname: Gc<'gc, Multiname<'gc>>,
    },
    Sf32,
    Sf64,
    Si16,
    Si32,
    Si8,
    StrictEquals,
    Subtract,
    SubtractI,
    Swap,
    Sxi1,
    Sxi16,
    Sxi8,
    Throw,
    TypeOf,
    Timestamp,
    URShift,
}

#[cfg(target_pointer_width = "64")]
const _: () = assert!(std::mem::size_of::<Op>() == 16);
