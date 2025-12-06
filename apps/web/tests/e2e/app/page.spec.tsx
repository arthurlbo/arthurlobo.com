import { expect, test } from "@playwright/test";

test.describe("Home Page E2E", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should display main heading", async ({ page }) => {
        const heading = page.locator("h1");
        await expect(heading).toBeVisible();
    });

    test("should display location information", async ({ page }) => {
        const location = page.getByText(/Curitiba/i);
        await expect(location).toBeVisible();
    });

    test("should display work mode information", async ({ page }) => {
        const workMode = page.getByText(/remotely/i);
        await expect(workMode).toBeVisible();
    });

    test("should display About card", async ({ page }) => {
        const aboutHeading = page.getByText("About").first();
        await expect(aboutHeading).toBeVisible();
    });

    test("should display Projects card", async ({ page }) => {
        const projectsHeading = page.getByText("Projects").first();
        await expect(projectsHeading).toBeVisible();
    });

    test("should display Stack card", async ({ page }) => {
        const stackHeading = page.getByText(/Languages/i);
        await expect(stackHeading).toBeVisible();
    });

    test("should display Dashboard card", async ({ page }) => {
        const dashboardHeading = page.getByText("Dashboard").first();
        await expect(dashboardHeading).toBeVisible();
    });

    test("should display Contact card", async ({ page }) => {
        const contactHeading = page.getByText("Contact").first();
        await expect(contactHeading).toBeVisible();
    });

    test("should have About card link", async ({ page }) => {
        const aboutCard = page.locator('a[href="/about"]').first();
        await expect(aboutCard).toBeVisible();
    });

    test("should have Projects card link", async ({ page }) => {
        const projectsCard = page.locator('a[href="/projects"]').first();
        await expect(projectsCard).toBeVisible();
    });

    test("should have Stack card link", async ({ page }) => {
        const stackCard = page.locator('a[href="/about/stack"]').first();
        await expect(stackCard).toBeVisible();
    });

    test("should have Dashboard card link", async ({ page }) => {
        const dashboardCard = page.locator('a[href="/dashboard"]').first();
        await expect(dashboardCard).toBeVisible();
    });

    test("should have Contact card link", async ({ page }) => {
        const contactCard = page.locator('a[href="/contact"]').first();
        await expect(contactCard).toBeVisible();
    });

    test("should render on mobile viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForLoadState("networkidle");
        const heading = page.locator("h1");
        await expect(heading).toBeVisible();
    });

    test("should render on desktop viewport", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.waitForTimeout(500);
        const aboutCard = page.locator('a[href="/about"]').first();
        await expect(aboutCard).toBeVisible();
    });
});
