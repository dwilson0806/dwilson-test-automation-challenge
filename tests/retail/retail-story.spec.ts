import { test } from "@fixtures/retail/retail.fixture";
import { expect } from "@playwright/test";

test.describe("retail story/article tests @retail", () => {

    test.beforeEach(async ({ page, _cookieComponent }) => {
        await page.goto("/ikea-nyc-store-planning-studio-tour-2019-4", { waitUntil: "load" });
        await _cookieComponent.acceptCookies();
    });

    test("Verify share dropdown contains correct items", async ({ _retailStoryPage }) => {

        const socialShareDropdownExpanded = await _retailStoryPage.clickSocialShareDropdown();
        const twitterSocialShare = await _retailStoryPage.getSocialShareItem("Twitter");
        const linkedInSocialShare = await _retailStoryPage.getSocialShareItem("LinkedIn");
        const flipboardSocialShare = await _retailStoryPage.getSocialShareItem("Flipboard");
        const copyLinkSocialShare = await _retailStoryPage.getSocialShareItem("Copy Link");

        expect(socialShareDropdownExpanded).toBe(true);
        expect(twitterSocialShare).toBe(1);
        expect(linkedInSocialShare).toBe(1);
        expect(flipboardSocialShare).toBe(1);
        expect(copyLinkSocialShare).toBe(1);
    });

    test("Verify clicking Twitter in share dropdown successfully redirects to Twitter", async ({ _retailStoryPage }) => {

        const socialShareDropdownExpanded = await _retailStoryPage.clickSocialShareDropdown();
        const socialUrl = await _retailStoryPage.clickSocialShareItem("Twitter");

        expect(socialShareDropdownExpanded).toBe(true);
        expect(socialUrl).toContain("twitter.com");
        expect(socialUrl).toContain("businessinsider");
        expect(socialUrl).toContain("ikea");
        expect(socialUrl).toContain("2019");

    });

    test("Verify clicking LinkedIn in share dropdown successfully redirects to LinkedIn", async ({ _retailStoryPage }) => {

        const socialShareDropdownExpanded = await _retailStoryPage.clickSocialShareDropdown();
        const socialUrl = await _retailStoryPage.clickSocialShareItem("LinkedIn");

        expect(socialShareDropdownExpanded).toBe(true);
        expect(socialUrl).toContain("linkedin.com");
        expect(socialUrl).toContain("businessinsider");
        expect(socialUrl).toContain("ikea");
        expect(socialUrl).toContain("2019");

    });

    test("Verify clicking Flipboard in share dropdown successfully redirects to Flipboard", async ({ _retailStoryPage }) => {

        const socialShareDropdownExpanded = await _retailStoryPage.clickSocialShareDropdown();
        const socialUrl = await _retailStoryPage.clickSocialShareItem("Flipboard");

        expect(socialShareDropdownExpanded).toBe(true);
        expect(socialUrl).toContain("flipboard.com");
        expect(socialUrl).toContain("businessinsider");
        expect(socialUrl).toContain("ikea");
        expect(socialUrl).toContain("2019");

    });
});
