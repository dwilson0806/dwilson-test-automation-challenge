import { PlaywrightTestConfig } from "@playwright/test";
import { TestOptions } from "./test.options";

const config: PlaywrightTestConfig<TestOptions> = {
    timeout: 100000,
    retries: 0,
    workers: 3,
    use: {
        headless: false,
        viewport: { width: 700, height: 800 }
    },
    reporter: [
        ['list'],
        ['junit', { outputFile: 'test-results/test-summary.xml' }]
    ],
    projects: [
        {
            name: "businessinsider-prod-e2e",
            testDir: "tests",
            use: {
                baseURL: "https://www.businessinsider.com",
                cookiesEnabled: false,
            }
        }
    ],
};
export default config;
