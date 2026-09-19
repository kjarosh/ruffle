var lit = {};
var arr = new Array();

trace("--- __proto__ of class objects ---");
trace(Object.__proto__);
trace(Array.__proto__);
trace(String.__proto__);

trace("--- inherited through the chain ---");
trace(typeof Object.valueOf);
trace(typeof Array.valueOf);
trace(typeof Object.toString);
trace(Object.constructor);
trace(Array.constructor);

trace("--- conversions ---");
trace(Number(Object));
trace(Object + 0);
trace(undefined == Object);
trace(Object == undefined);
trace(undefined == Array);
trace(null == Object);
trace(0 == Object);
trace(Object == Array);

trace("--- plain objects are unaffected ---");
trace(lit.__proto__);
trace(typeof lit.valueOf);
trace(typeof arr.toString);
trace(Number(lit));
trace(undefined == lit);
trace(undefined == arr);

trace("--- clearing the version flags ---");
ASSetPropFlags(Object, null, 8, 129);
trace(Object.__proto__);
trace(typeof Object.valueOf);
trace(undefined == Object);
