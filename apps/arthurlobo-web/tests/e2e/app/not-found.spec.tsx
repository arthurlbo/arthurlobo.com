import { expect, test } from "@playwright/test";

test.describe("Not Found Page (404)", () => {
    test("should display 404 page for a non-existent route", async ({ page }) => {
        await page.goto("/a-route-that-does-not-exist");

        const message = page.getByText("Page Not Found");
        await expect(message).toBeVisible();
    });

    test("should have a link to go back to the home page", async ({ page }) => {
        await page.goto("/another-bad-route");

        const homeLink = page.getByRole("link", { name: "Go back to home" });
        await expect(homeLink).toBeVisible();
        await expect(homeLink).toHaveAttribute("href", "/");

        await homeLink.click();
        await expect(page).toHaveURL("/");
    });
});
