import { test as base } from "@playwright/test";
import { LatestPage } from "@pageObjects/latest/latest.page";

type RetailNewsFixture = {
    _latestPage: LatestPage;
}

export const test = base.extend<RetailNewsFixture>({

    _latestPage: [async ({ page }, use) => {

        const latestPage = new LatestPage(page);

        await use(latestPage);
    }, { scope: 'test' }]

});
export { expect } from "@playwright/test";