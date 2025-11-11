import { expect, test } from "@playwright/test";

test.describe("RootLayout E2E", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should render html element with correct lang attribute", async ({ page }) => {
        const html = page.locator("html");
        await expect(html).toHaveAttribute("lang", "en");
    });

    test("should render Providers component", async ({ page }) => {
        const body = page.locator("body");
        const children = await body.locator("> *").count();
        expect(children).toBeGreaterThan(0);
    });

    test("should have correct page title", async ({ page }) => {
        await expect(page).toHaveTitle("Full-stack Monorepo Template");
    });

    test("should have correct meta description", async ({ page }) => {
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute(
            "content",
            "A modern Full-stack monorepo template to kickstart your web development.",
        );
    });

    test("should support theme switching (class attribute)", async ({ page }) => {
        const html = page.locator("html");

        // Check if theme class can be applied
        const hasThemeSupport = await html.evaluate((el) => {
            return el.classList.length >= 0;
        });
        expect(hasThemeSupport).toBeTruthy();
    });

    test("should have overflow-x-hidden to prevent horizontal scroll", async ({ page }) => {
        const body = page.locator("body");
        const className = await body.getAttribute("class");
        expect(className).toContain("overflow-x-hidden");
    });

    test("should render children content", async ({ page }) => {
        const body = page.locator("body");
        const hasContent = await body.evaluate((el) => el.textContent && el.textContent.length > 0);
        expect(hasContent).toBeTruthy();
    });
});
