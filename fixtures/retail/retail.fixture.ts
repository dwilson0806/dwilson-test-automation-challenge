import { test as base } from "@playwright/test";
import { RetailStoryPage } from "@pageObjects/retail/retail-story.page";
import { CookieFormComponent } from "@components/cookies/cookieForm.component";
import { TestOptions } from "@root/test.options";

type RetailNewsFixture = {
    _retailStoryPage: RetailStoryPage;
    _cookieComponent: CookieFormComponent;
}

export const test = base.extend<RetailNewsFixture, TestOptions>({

    cookiesEnabled: ["default", { option: true }],

    _retailStoryPage: async ({ page }, use) => {

        const retailStoryPage = new RetailStoryPage(page);

        await use(retailStoryPage);
    },

    _cookieComponent: async ({ page, cookiesEnabled }, use) => {

        const cookieComponent = new CookieFormComponent(page, cookiesEnabled);

        await use(cookieComponent);
    }

});
export { expect } from "@playwright/test";