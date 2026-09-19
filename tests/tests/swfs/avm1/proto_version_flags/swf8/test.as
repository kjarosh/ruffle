function G() {}
G.prototype.marker = "marker";

// Each case starts from a fresh object, so that cases can't influence each other.
function freshProto(flag) {
    var x = new G();
    ASSetPropFlags(x, "__proto__", flag, 0);
    trace(
        flag
            + " read:" + typeof x.__proto__
            + " readIsG:" + typeof x.__proto__.marker
            + " onehop:" + x.marker
            + " twohop:" + typeof x.toString
    );
}

function freshPlain(flag) {
    var y = {};
    y.p = "value";
    ASSetPropFlags(y, "p", flag, 0);
    trace(flag + " plain:" + typeof y.p);
}

function restored(flag) {
    var x = new G();
    ASSetPropFlags(x, "__proto__", flag, 0);
    ASSetPropFlags(x, "__proto__", 0, 65528);
    trace(flag + " restored:" + typeof x.__proto__ + " onehop:" + x.marker);
}

function partialClear(setBits, clearBits) {
    var x = new G();
    ASSetPropFlags(x, "__proto__", setBits, 0);
    ASSetPropFlags(x, "__proto__", 0, clearBits);
    trace(setBits + " minus " + clearBits + " read:" + typeof x.__proto__);
}

trace("--- baseline ---");
var g = new G();
trace(g.__proto__);
trace(g.marker);
trace(typeof g.toString);

trace("--- single bits on __proto__ ---");
freshProto(0);
freshProto(8);
freshProto(16);
freshProto(32);
freshProto(64);
freshProto(128);
freshProto(256);
freshProto(512);
freshProto(1024);
freshProto(2048);
freshProto(4096);
freshProto(8192);
freshProto(16384);

trace("--- the same bits on an ordinary property ---");
freshPlain(8);
freshPlain(16);
freshPlain(32);
freshPlain(64);
freshPlain(128);
freshPlain(256);
freshPlain(512);
freshPlain(1024);
freshPlain(2048);
freshPlain(4096);
freshPlain(8192);
freshPlain(16384);

trace("--- bit combinations on __proto__ ---");
freshProto(1280);
freshProto(5376);
freshProto(32640);
freshProto(1152);
freshProto(640);

trace("--- clearing the flags again ---");
restored(128);
restored(1024);
restored(4096);

trace("--- clearing a different bit than was set ---");
partialClear(4096, 128);
partialClear(4096, 4096);
partialClear(1024, 128);
partialClear(1024, 1024);

trace("--- flag on the intermediate link ---");
var h = new G();
ASSetPropFlags(G.prototype, "__proto__", 128, 0);
trace(typeof h.__proto__);
trace(h.marker);
trace(typeof h.toString);
ASSetPropFlags(G.prototype, "__proto__", 0, 65528);
trace(typeof h.toString);
