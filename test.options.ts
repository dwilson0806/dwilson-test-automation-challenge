import { test as base } from "@playwright/test";

export type TestOptions = {
    baseURL: string;
    cookiesEnabled: boolean;
};

export const test = base.extend<TestOptions>({
    baseURL: ["default", { option: true }],
    cookiesEnabled: ["default", { option: true }],
});
