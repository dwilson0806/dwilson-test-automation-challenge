import { Page } from "@playwright/test";

export class CookieFormComponent {

    private cookieIframe = "#sp_message_iframe_364840";
    private page : Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Function will click acceept in cookie form component 
     * @returns {Promise<void>}
     */
    public async acceptCookies() : Promise<void> {
        const acceptCookiesButton = this.page.frameLocator(this.cookieIframe).getByText("I'm OK with that");
        await acceptCookiesButton.click();
    }
}