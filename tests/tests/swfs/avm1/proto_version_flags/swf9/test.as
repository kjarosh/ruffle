
function testFlagPlain(flag) {
    trace(flag + " plain");

    var y = {};
    y.p = "value";
    ASSetPropFlags(y, "p", flag, 0);
    trace("  " + y + "," + typeof y.p);
}

function testFlagProto(flag, mode) {
    trace(flag + " proto " + mode);

    function G() {}
    G.prototype.marker = "marker";

    var x = new G();
    if (mode == 0) {
        ASSetPropFlags(x, "__proto__", flag, 0);
    } else if (mode == 1) {
        ASSetPropFlags(x.__proto__, "__proto__", flag, 0);
    } else if (mode == 3) {
        ASSetPropFlags(x, "__proto__", 0, 65535);
        ASSetPropFlags(x, "__proto__", flag, 0);
    }
    trace("  x.__proto__:" + typeof x.__proto__);
    trace("  x.__Proto__:" + typeof x.__Proto__);
    trace("  x.__proto__.marker:" + typeof x.__proto__.marker);
    trace("  x.__Proto__.marker:" + typeof x.__Proto__.marker);
    trace("  x.marker:" + x.marker);
    trace("  x.toString:" + typeof x.toString);
}

function testFlag(flag) {
    testFlagPlain(flag);
    testFlagProto(flag, 1);
    testFlagProto(flag, 2);
    testFlagProto(flag, 3);
}

trace("--- baseline ---");
function B() {}
B.prototype.marker = "marker";
var g = new B();
trace(g.__proto__);
trace(g.marker);
trace(typeof g.toString);


testFlag(128);
testFlag(1280);
testFlag(4096);
testFlag(8192);
testFlag(16384);

testFlag(0);
testFlag(8);
testFlag(16);
testFlag(32);
testFlag(64);
testFlag(256);
testFlag(512);
testFlag(1024);
testFlag(2048);
testFlag(32768);
testFlag(65535);

testFlag(640);
testFlag(1152);
testFlag(5376);
testFlag(32640);

function testFlagProtoCustom() {
    trace("custom proto");

    var x = {};

    trace("  x.__proto__:" + typeof x.__proto__);
    trace("  x.__Proto__:" + typeof x.__Proto__);
    trace("  x.toString:" + typeof x.toString);

    x.__proto__ = undefined;

    trace("  x.__proto__:" + typeof x.__proto__);
    trace("  x.__Proto__:" + typeof x.__Proto__);
    trace("  x.toString:" + typeof x.toString);

    x.addProperty("__proto__", function() {
        trace("getting proto");
        return undefined;
    }, function() {
        trace("setting proto");
        return undefined;
    });

    trace("  x.__proto__:" + typeof x.__proto__);
    trace("  x.__Proto__:" + typeof x.__Proto__);
    trace("  x.toString:" + typeof x.toString);
}
testFlagProtoCustom();
