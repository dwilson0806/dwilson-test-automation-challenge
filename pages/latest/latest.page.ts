import { Page } from "@playwright/test";

export class LatestPage {

    private cookieIframe = "#sp_message_iframe_364840";
    private latestStories = ".tout-image-link";

    private page : Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Function will get all stories from latest feed 
     * @returns {Promise<string[]>}
     */
    public async getFeedStoryLinks() : Promise<string[]> {

        const latestStories = this.page.locator(this.latestStories);
        const latestStoriesCount = await latestStories.count();
        let testList = [];

        for (let i = 0; i < latestStoriesCount; ++i) {
            //console.log(await rows.nth(i).getAttribute("href"));
            let itemRef = await latestStories.nth(i).getAttribute("href")
            testList.push(itemRef);
        }//for

        return testList;
    }

    /**
     * Function will check status for latestFeedStories
     * Pages that don't match 200 ok will be added to failure list
     * @param {string[]} latestFeedStories
     * @returns {Promise<string[]>}
     */
     public async verifyFeedStoryLinks(latestFeedStories: string[]) : Promise<string[]> {   

        let failList = [];

        for(let story in latestFeedStories) {
            let response = await this.page.goto(latestFeedStories[0]);
            if(response.status() != 200) {
                failList.push(`${latestFeedStories[story]}:StatusCode=${response.status()}`)
            }//if
        }//for

        if(failList.length > 0) {
            console.log("Latest stories from feed did not return status code: 200");
            for(let story in failList) {
                console.log(failList[story]);
            }//for
        }//if

        return failList;
    }

    public async acceptCookies() : Promise<void> {
        const acceptCookiesButton = this.page.frameLocator(this.cookieIframe).getByText("I'm OK with that");
        await acceptCookiesButton.click();
    }
}