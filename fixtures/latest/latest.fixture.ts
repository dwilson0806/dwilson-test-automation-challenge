import { test as base } from "@playwright/test";
import { LatestPage } from "@pageObjects/latest/latest.page";
import { CookieFormComponent } from "@components/cookies/cookieForm.component";
import { TestOptions } from "@root/test.options";

type RetailNewsFixture = {
    _latestPage: LatestPage;
    _cookieComponent: CookieFormComponent;
}

export const test = base.extend<RetailNewsFixture, TestOptions>({

    cookiesEnabled: ["default", { option: true, scope: 'worker'}],

    _latestPage: async ({ page }, use) => {

        await page.goto("/latest", { waitUntil: "load" });

        const latestPage = new LatestPage(page);

        await use(latestPage);
    },

    _cookieComponent: async ({ page, cookiesEnabled }, use) => {

        const cookieComponent = new CookieFormComponent(page, cookiesEnabled);

        await use(cookieComponent);
    }
});
export { expect } from "@playwright/test";