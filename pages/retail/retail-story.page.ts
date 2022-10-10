import { Page } from "@playwright/test";

export class RetailStoryPage {

    private socialShareDropdown = "div.share-icon-dropdown-container";
    private socialShareDropdownExpanded = ".share-icon.share-icon-active";
    private socialShareItem = "span.dropdown-text";

    private page : Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Function will expand socialShareDropdown
     * @returns {Promise<boolean>}
     */
    public async clickSocialShareDropdown() : Promise<boolean> {    
        await this.page.click(this.socialShareDropdown, {force: true});
        const socialDropdownExpanded = await this.page.isVisible(this.socialShareDropdownExpanded);

        return socialDropdownExpanded;
    }

    /**
     * Function will find socialshare item from dropdown
     * @param {string} socialShareValue
     * @returns {Promise<number>}
     */
    public async getSocialShareItem(socialShareValue: string) : Promise<number> {    
        
        const socialShareItem = await this.page.locator(`${this.socialShareItem}:has-text("${socialShareValue}")`).count();

        return socialShareItem
        
    }

    /**
     * Function will click socialshare item from dropdown
     * @param {string} socialShareValue
     * @returns {Promise<string>}
     */
     public async clickSocialShareItem(socialShareValue: string) : Promise<string> {    

        const [popup] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('popup'),
            // Opens popup.
            this.page.locator(`${this.socialShareItem}:has-text("${socialShareValue}")`).click(),
        ]);

        await popup.waitForLoadState();
        const popupUrl = popup.url();

        return popupUrl;
    }
}