import { expect, test } from "@playwright/test";

test.describe("Theme Toggling", () => {
    test("should toggle between dark and light mode", async ({ page }) => {
        await page.goto("/");

        const html = page.locator("html");
        const lightThemeButton = page.getByTestId("theme-button-light");
        const darkThemeButton = page.getByTestId("theme-button-dark");

        await expect(html).toHaveClass(/dark/);

        await lightThemeButton.click();
        await expect(html).toHaveClass(/light/);
        await expect(html).not.toHaveClass(/dark/);

        await darkThemeButton.click();
        await expect(html).toHaveClass(/dark/);
        await expect(html).not.toHaveClass(/light/);
    });
});
