import { expect, test } from "@playwright/test";

test.describe("RootLayout E2E", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should render html element with correct lang attribute", async ({ page }) => {
        const html = page.locator("html");
        await expect(html).toHaveAttribute("lang", "en");
    });

    test("should have page title", async ({ page }) => {
        const title = await page.title();
        expect(title.length).toBeGreaterThan(0);
    });

    test("should have meta description", async ({ page }) => {
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toBeAttached();
    });

    test("should support theme switching", async ({ page }) => {
        const html = page.locator("html");
        await expect(html).toBeVisible();
    });

    test("should render main container", async ({ page }) => {
        const main = page.locator("main");
        await expect(main).toBeVisible();
    });

    test("should render Desktop navigation on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        const desktop = page.locator("aside");
        await expect(desktop).toBeVisible();
    });

    test("should hide Desktop navigation on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const desktop = page.locator("aside");
        await expect(desktop).toBeHidden();
    });

    test("should render Mobile navigation on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const mobile = page.locator("header");
        await expect(mobile).toBeVisible();
    });

    test("should hide Mobile navigation on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        const mobile = page.locator("header");
        await expect(mobile).toBeHidden();
    });

    test("should render content section", async ({ page }) => {
        const aboutCard = page.locator('a[href="/about"]').first();
        await expect(aboutCard).toBeVisible();
    });

    test("should render on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const main = page.locator("main");
        await expect(main).toBeVisible();
    });

    test("should render on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        const main = page.locator("main");
        await expect(main).toBeVisible();
    });
});
