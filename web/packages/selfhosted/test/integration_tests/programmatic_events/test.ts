/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    getTraceOutput,
    injectRuffleAndWait,
    openTest,
    playAndMonitor,
} from "../../utils.js";
import { expect, use } from "chai";
import chaiHtml from "chai-html";

use(chaiHtml);

// The idea of the test is to verify whether the site
// can programmatically send events to Ruffle.
// This is used by websites e.g. for implementing custom
// input overlays for mobile.
describe("Programmatic Events", () => {
    it("load the test", async () => {
        await openTest(browser, "integration_tests/programmatic_events");
        await injectRuffleAndWait(browser);
        const player = await browser.$("<ruffle-object>");
        await playAndMonitor(
            browser,
            player,
            "Loaded!\n",
        );
    });

    // See https://github.com/ruffle-rs/ruffle/discussions/17729#discussioncomment-10518943
    it("scenario: pointerdown on the container", async () => {
        const player = await browser.$("<ruffle-object>");
        const object = await browser.$("#objectElement");

        await browser.execute((input) => {
            input.focus();
        }, await browser.$("#inputElement"));

        await browser.keys("should be ignored");

        await browser.execute((el) => {
            el.dispatchEvent(new PointerEvent("pointerdown"));
        }, await player.shadow$("#container"));

        await browser.execute((el) => {
            el.dispatchEvent(new KeyboardEvent("keydown", {
                key: "ArrowRight", code: "ArrowRight", keyCode: 39, bubbles: true,
            }));
        }, object);

        expect(await getTraceOutput(browser, player)).to.equal("onKeyDown(0,39)\n");

        await browser.keys("X");

        expect(await getTraceOutput(browser, player)).to.equal("onKeyDown(88,88)\nonKeyUp(88,88)\n");
    });

    // That has been possible since https://github.com/ruffle-rs/ruffle/pull/17158,
    // so ideally we want to preserve this behavior.
    it("scenario: programmatic focus on the container", async () => {
        const player = await browser.$("<ruffle-object>");
        const object = await browser.$("#objectElement");

        await browser.execute((input) => {
            input.focus();
        }, await browser.$("#inputElement"));

        await browser.keys("should be ignored");

        await browser.execute((el) => {
            el.focus();
        }, await player.shadow$("#container"));

        await browser.execute((el) => {
            el.dispatchEvent(new KeyboardEvent('keydown', {
                key: "ArrowRight", code: "ArrowRight", keyCode: 39, bubbles: true,
            }));
        }, object);

        expect(await getTraceOutput(browser, player)).to.equal("onKeyDown(0,39)\n");

        await browser.keys("X");

        expect(await getTraceOutput(browser, player)).to.equal("onKeyDown(88,88)\nonKeyUp(88,88)\n");
    });

    it("scenario: programmatic focus on the player", async () => {
        const player = await browser.$("<ruffle-object>");
        const object = await browser.$("#objectElement");

        await browser.execute((input) => {
            input.focus();
        }, await browser.$("#inputElement"));

        await browser.keys("should be ignored");

        await browser.execute((el) => {
            el.focus();
        }, object);

        await browser.execute((el) => {
            el.dispatchEvent(new KeyboardEvent('keydown', {
                key: "ArrowRight", code: "ArrowRight", keyCode: 39, bubbles: true,
            }));
        }, object);

        expect(await getTraceOutput(browser, player)).to.equal("onKeyDown(0,39)\n");

        await browser.keys("X");

        expect(await getTraceOutput(browser, player)).to.equal("onKeyDown(88,88)\nonKeyUp(88,88)\n");
    });
});
