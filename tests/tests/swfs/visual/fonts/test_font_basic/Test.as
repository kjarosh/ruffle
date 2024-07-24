package {
import flash.display.Sprite;
import flash.text.TextField;
import flash.text.TextFormat;

[SWF(width="600", height="250")]
public class Test extends Sprite {
    [Embed(source="TestFontBasic.ttf", fontName="TestFontBasic", embedAsCFF="false", unicodeRange="U+0061-U+0064")]
    private var testFontBasic:Class;

    [Embed(source="TestFontAboveAscent.ttf", fontName="TestFontAboveAscent", embedAsCFF="false", unicodeRange="U+0061-U+0064")]
    private var testFontAboveAscent:Class;

    [Embed(source="TestFontBelowDescent.ttf", fontName="TestFontBelowDescent", embedAsCFF="false", unicodeRange="U+0061-U+0064")]
    private var testFontBelowDescent:Class;

    private var nextX:int = 0;
    private var nextY:int = 0;

    public function Test() {
        addChild(newTextField(10));
        addChild(newTextField(15));
        addChild(newTextField(20));
        addChild(newTextField(25));
        addChild(newTextField(30));
        addChild(newTextField(40));

        nextX += 100;
        nextY = 0;

        var mixed:TextField = newTextField(10, false, "TestFontBasic", 30);
        mixed.text = "acacac";
        var tf = new TextFormat();
        tf.size = 15;
        mixed.setTextFormat(tf, 2, 4);
        tf.size = 20;
        mixed.setTextFormat(tf, 4, 6);
        addChild(mixed);

        addChild(newTextField(20, true));

        nextX += 100;
        nextY = 0;

        // Leading
        var leading1:TextField = newTextField(20, true);
        var tf = new TextFormat();
        tf.leading = 1;
        leading1.setTextFormat(tf, 0, leading1.text.length);
        addChild(leading1);

        var leading2:TextField = newTextField(20, true);
        var tf = new TextFormat();
        tf.leading = 4;
        leading2.setTextFormat(tf, 0, leading2.text.length);
        addChild(leading2);

        var leading3:TextField = newTextField(20, true);
        var tf = new TextFormat();
        tf.leading = -4;
        leading3.setTextFormat(tf, 0, leading3.text.length);
        addChild(leading3);

        nextX += 100;
        nextY = 0;

        // Letter spacing

        var letterSpacing1:TextField = newTextField(20);
        var tf = new TextFormat();
        tf.letterSpacing = 1;
        letterSpacing1.setTextFormat(tf, 0, letterSpacing1.text.length);
        addChild(letterSpacing1);

        var letterSpacing2:TextField = newTextField(20);
        var tf = new TextFormat();
        tf.letterSpacing = 2;
        letterSpacing2.setTextFormat(tf, 0, letterSpacing2.text.length);
        addChild(letterSpacing2);

        var letterSpacing3:TextField = newTextField(20);
        var tf = new TextFormat();
        tf.letterSpacing = -2;
        letterSpacing3.setTextFormat(tf, 0, letterSpacing3.text.length);
        addChild(letterSpacing3);

        nextX += 100;
        nextY = 0;

        // Above ascent

        addChild(newTextField(20, true, "TestFontAboveAscent", 100));

        var aboveAscent = newTextField(20, true, "TestFontAboveAscent", 130);
        aboveAscent.text = "cccc\naaaa\nbbbb\ncccc";
        addChild(aboveAscent);

        nextX += 100;
        nextY = 0;

        // Below descent

        addChild(newTextField(20, true, "TestFontBelowDescent", 100));

        var belowDescent:TextField = newTextField(20, true, "TestFontBelowDescent", 130);
        belowDescent.text = "cccc\naaaa\nbbbb\ncccc";
        addChild(belowDescent);
    }

    private function newTextField(size: int, multiline:Boolean = false, font:String = "TestFontBasic", height:int = -1): TextField {
        var text = new TextField();
        text.border = true;
        text.width = 98;
        text.x = nextX;
        text.embedFonts = true;
        var tf = new TextFormat();
        tf.font = font;
        tf.size = size;
        text.defaultTextFormat = tf;
        if (multiline) {
            text.y = nextY;
            text.height = height > 0 ? height : 3 * Math.floor(size * 1.3);
            text.multiline = true;
            text.wordWrap = true;
            text.text = "acbdabcd dbacdacb\ncdbadbac";
        } else {
            text.y = nextY;
            text.height = height > 0 ? height : Math.floor(size * 1.3);
            text.text = "acbdabcd";
        }
        nextY += text.height + 2;
        return text;
    }

}
}
