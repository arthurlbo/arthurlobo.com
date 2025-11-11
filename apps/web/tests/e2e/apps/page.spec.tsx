import { expect, test } from "@playwright/test";

test.describe("Home Page E2E", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should display the main heading", async ({ page }) => {
        const heading = page.getByRole("heading", { name: /hello dev/i });
        await expect(heading).toBeVisible();
        await expect(heading).toHaveText("Hello Dev 🥳");
    });

    test("should display the description text", async ({ page }) => {
        const description = page.getByText(/modern full-stack monorepo template/i);
        await expect(description).toBeVisible();
    });

    test("should display GitHub documentation link with correct href", async ({ page }) => {
        const githubLink = page.getByRole("link", { name: /explore documentation/i });
        await expect(githubLink).toBeVisible();
        await expect(githubLink).toHaveAttribute("href", "https://github.com/arthurlbo/fullstack-monorepo-template");
        await expect(githubLink).toHaveAttribute("target", "_blank");
    });

    test("should display LinkedIn profile link with correct href", async ({ page }) => {
        const linkedinLink = page.getByRole("link", { name: /who am i/i });
        await expect(linkedinLink).toBeVisible();
        await expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/arthurlbo/");
        await expect(linkedinLink).toHaveAttribute("target", "_blank");
    });

    test("should render both social media icons", async ({ page }) => {
        const links = page.locator("a[aria-label]");
        await expect(links).toHaveCount(2);
    });

    test("should have proper layout structure", async ({ page }) => {
        const main = page.locator("main");
        await expect(main).toBeVisible();

        const buttonsContainer = main.locator("div.flex.items-center.gap-2");
        await expect(buttonsContainer).toBeVisible();
    });

    test("GitHub link should have correct styling classes", async ({ page }) => {
        const githubLink = page.getByRole("link", { name: /explore documentation/i });
        const classes = await githubLink.getAttribute("class");
        expect(classes).toContain("border");
        expect(classes).toContain("bg-transparent");
    });

    test("LinkedIn link should have correct styling classes", async ({ page }) => {
        const linkedinLink = page.getByRole("link", { name: /who am i/i });
        const classes = await linkedinLink.getAttribute("class");
        expect(classes).toContain("bg-emerald-500");
    });
});
