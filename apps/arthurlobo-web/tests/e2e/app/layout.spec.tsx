import { expect, test } from "@playwright/test";

test.describe("Root Layout & Responsiveness", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test.describe("Global Configuration", () => {
        test("should have correct html attributes and fonts", async ({ page }) => {
            const html = page.locator("html");
            await expect(html).toHaveAttribute("lang", "en");

            const body = page.locator("body");
            await expect(body).toHaveClass(/font-sans/);

            await expect(html).toHaveClass(/dark/);
        });

        test("should have correct metadata title", async ({ page }) => {
            const title = await page.title();
            expect(title).toContain("Arthur Lobo");
        });
    });

    test.describe("Desktop Viewport (xl breakpoint)", () => {
        test.use({ viewport: { width: 1440, height: 900 } });

        test("should display desktop layout structure", async ({ page }) => {
            const main = page.locator("main");

            await expect(main).toHaveCSS("flex-direction", "row");

            const contentContainer = main.locator("> div");
            await expect(contentContainer).toHaveCSS("margin-top", "0px");

            const desktopComponent = page.getByTestId("desktop-sidebar");
            if ((await desktopComponent.count()) > 0) {
                await expect(desktopComponent).toBeVisible();
            }
        });
    });

    test.describe("Mobile Viewport", () => {
        test.use({ viewport: { width: 390, height: 844 } });

        test("should display mobile layout structure", async ({ page }) => {
            const main = page.locator("main");

            await expect(main).toHaveCSS("flex-direction", "column");

            const contentContainer = main.locator("> div");
            await expect(contentContainer).toHaveCSS("margin-top", "72px");

            const mobileComponent = page.getByTestId("mobile-header");
            if ((await mobileComponent.count()) > 0) {
                await expect(mobileComponent).toBeVisible();
            }
        });
    });
});
