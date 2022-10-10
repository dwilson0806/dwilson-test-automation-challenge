import { test as base } from "@playwright/test";
import { RetailStoryPage } from "@pageObjects/retail/retail-story.page";

type RetailNewsFixture = {
    _retailStoryPage: RetailStoryPage;
}

export const test = base.extend<RetailNewsFixture>({

    _retailStoryPage: [async ({ page }, use) => {

        const retailStoryPage = new RetailStoryPage(page);

        await use(retailStoryPage);
    }, { scope: 'test' }]

});
export { expect } from "@playwright/test";