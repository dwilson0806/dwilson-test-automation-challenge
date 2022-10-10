import { test } from "@fixtures/latest/latest.fixture";
import { expect } from "@playwright/test";

test.describe("latest page tests @latest", () => {

    test.beforeEach(async ({ page, _cookieComponent }) => {
        await page.goto("/latest", { waitUntil: "load" });
        await _cookieComponent.acceptCookies();
    });

    test("Verify latest feed stories return 200 OK", async ({ _latestPage }) => {

        const latestStoriesLinks = await _latestPage.getFeedStoryLinks();

        const verifyFeedStoryLinks = await _latestPage.verifyFeedStoryLinks(latestStoriesLinks);

        //We only add to list if response status is not 200 Ok
        //Expect list to be empty as stories should return 200 OK
        expect(verifyFeedStoryLinks).toHaveLength(0);
    });
});
