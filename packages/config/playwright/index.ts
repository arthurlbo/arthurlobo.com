import { PlaywrightTestConfig, devices } from "@playwright/test";

export const baseConfig: PlaywrightTestConfig = {
    testDir: "./tests/e2e",
    timeout: 30 * 1000,
    fullyParallel: true,
    reporter: "list",
    outputDir: "/dev/null",
    use: {
        baseURL: "http://localhost:3000",
        headless: true,
        viewport: { width: 1280, height: 720 },
        trace: "off",
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
    webServer: {
        command: "npm run dev",
        url: "http://localhost:3000",
    },
};
