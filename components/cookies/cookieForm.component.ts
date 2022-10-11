import { Page } from "@playwright/test";

export class CookieFormComponent {

    private cookieIframe = "#sp_message_iframe_364840";
    private page : Page;
    private cookiesEnabled : boolean;

    constructor(page: Page, cookiesEnabled: boolean) {
        this.page = page;
        this.cookiesEnabled = cookiesEnabled;
    }

    /**
     * Function will click acceept in cookie form component 
     * @returns {Promise<void>}
     */
    public async acceptCookies() : Promise<void> {

        if(this.cookiesEnabled) {
            const acceptCookiesButton = this.page.frameLocator(this.cookieIframe).getByText("I'm OK with that");
            await acceptCookiesButton.click({delay: 1000});
        }//if

        //printing for visibility
        else {
            console.log("Accept cookie action will not be called");
        }
    }
}