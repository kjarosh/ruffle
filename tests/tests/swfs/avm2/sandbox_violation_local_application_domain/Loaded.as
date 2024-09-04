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
    import flash.system.SecurityDomain;
    import flash.net.Socket;

    public class Loaded extends Sprite {
        public function Test() {
            trace("Loaded:");
            trace("  " + Security.sandboxType);
            trace("  " + ApplicationDomain.currentDomain);
            trace("  " + SecurityDomain.currentDomain);
        }
    }
}
