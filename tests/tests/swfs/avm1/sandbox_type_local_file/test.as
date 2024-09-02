trace("Current sandbox type: " + System.security.sandboxType);

function testLocal() {
    var vars:LoadVars = new LoadVars();
    vars.onLoad = function(success:Boolean) {
        if (success) {
            trace("Local access succeeded: " + this.loaded);
        } else {
            trace("Local access failed");
        }
    };
    vars.load("params.txt");
}

function testNetwork() {
    var socket = new XMLSocket();
    socket.onConnect = function() {
        trace("Network access succeeded: connected");
        socket.send("x");
        trace("Network access succeeded: data sent");
    };

    socket.onXML = function() {
        trace("Network access succeeded: data received");
        socket.close();
    };

    socket.connect("localhost", 8001);
}

try {
    testLocal();
} catch (e) {
    trace("Local access failed: " + e);
}
try {
    testNetwork();
} catch (e) {
    trace("Network access failed: " + e);
}
