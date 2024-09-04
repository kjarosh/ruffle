package {
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.events.ProgressEvent;
    import flash.display.Loader;
    import flash.net.URLLoader;
    import flash.net.URLRequest;
    import flash.system.Security;
    import flash.system.LoaderContext;
    import flash.system.ApplicationDomain;
    import flash.net.Socket;

    public class Test extends Sprite {
        public function Test() {
            var loader:Loader = new Loader();
            var ctx:LoaderContext = new LoaderContext(false, ApplicationDomain.currentDomain);
            try {
                loader.load(new URLRequest("localhost/loaded.swf"), ctx);
            } catch (e) {
                var message = "" + e;

                trace("Error: " + message.replace(/file:\/\/[^ ]*\/([^ \/]+)/g, "file://$1"));
            }
        }
    }
}
