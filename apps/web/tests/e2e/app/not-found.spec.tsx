import { expect, test } from "@playwright/test";

test.describe("Not Found Page E2E", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/non-existent-route");
    });

    test("should display the emoji icon", async ({ page }) => {
        const emoji = page.getByText("🧑‍💻");
        await expect(emoji).toBeVisible();
    });

    test("should display the main heading", async ({ page }) => {
        const heading = page.getByRole("heading", { name: /almost there/i });
        await expect(heading).toBeVisible();
    });

    test("should display first description line", async ({ page }) => {
        const description = page.getByText(/this section is still being built/i);
        await expect(description).toBeVisible();
    });

    test("should display second description line", async ({ page }) => {
        const description = page.getByText(/check back soon to see what's cooking/i);
        await expect(description).toBeVisible();
    });

    test("should render on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const heading = page.getByRole("heading", { name: /almost there/i });
        await expect(heading).toBeVisible();
    });

    test("should render on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        const heading = page.getByRole("heading", { name: /almost there/i });
        await expect(heading).toBeVisible();
    });
});
