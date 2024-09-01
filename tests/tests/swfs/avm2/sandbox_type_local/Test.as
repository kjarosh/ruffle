package {
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.events.ProgressEvent;
    import flash.net.URLLoader;
    import flash.net.URLRequest;
    import flash.system.Security;
    import flash.net.Socket;

    public class Test extends Sprite {
        public function Test() {
            trace("Current sandbox type: " + Security.sandboxType);
            try {
                local();
            } catch (e) {
                trace("Local access failed: " + e);
            }
            try {
                network();
            } catch (e) {
                trace("Network access failed: " + e);
            }
        }

        private function local():void {
            var loader:URLLoader = new URLLoader();
            loader.addEventListener(Event.COMPLETE, onLoaded);
            function onLoaded(e:Event):void {
                trace("Local access succeeded: " + e.target.data);
            }
            loader.load(new URLRequest("file://file.txt"));
        }

        private function network():void {
            var socket:Socket = new Socket();
            socket.addEventListener(Event.CONNECT, function(evt:Event):void {
                trace("Network access succeeded: connected");
                socket.writeBoolean(true);
                trace("Network access succeeded: data sent");
            });

            socket.addEventListener(ProgressEvent.SOCKET_DATA, function(evt:ProgressEvent):void {
                trace("Network access succeeded: data received");
                socket.close();
            });

            socket.connect("localhost", 8001);
        }
    }
}
