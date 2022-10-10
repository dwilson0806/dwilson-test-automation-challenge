import { test as base } from "@playwright/test";
import { LatestPage } from "@pageObjects/latest/latest.page";
import { CookieFormComponent } from "@components/cookies/cookieForm.component";

type RetailNewsFixture = {
    _latestPage: LatestPage;
    _cookieComponent: CookieFormComponent;
}

export const test = base.extend<RetailNewsFixture>({

    _latestPage: async ({ page }, use) => {

        await page.goto("/latest", { waitUntil: "load" });

        const latestPage = new LatestPage(page);

        await use(latestPage);
    },

    _cookieComponent: async ({ page }, use) => {

        const cookieComponent = new CookieFormComponent(page);

        await use(cookieComponent);
    }
});
export { expect } from "@playwright/test";