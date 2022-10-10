import { test as base } from "@playwright/test";
import { RetailStoryPage } from "@pageObjects/retail/retail-story.page";
import { CookieFormComponent } from "@components/cookies/cookieForm.component";

type RetailNewsFixture = {
    _retailStoryPage: RetailStoryPage;
    _cookieComponent: CookieFormComponent;
}

export const test = base.extend<RetailNewsFixture>({

    _retailStoryPage: async ({ page }, use) => {

        const retailStoryPage = new RetailStoryPage(page);

        await use(retailStoryPage);
    },

    _cookieComponent: async ({ page }, use) => {

        const cookieComponent = new CookieFormComponent(page);

        await use(cookieComponent);
    }

});
export { expect } from "@playwright/test";