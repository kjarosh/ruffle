function G() {}
G.prototype.marker = "marker";

function fresh(flag) {
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

trace("--- fresh object per flag ---");
fresh(0);
fresh(128);
fresh(256);
fresh(512);
fresh(1024);
fresh(2048);
fresh(4096);
fresh(8192);
fresh(16384);
fresh(1280);
