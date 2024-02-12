import { defineConfig } from "cypress";

export default defineConfig({
    screenshotOnRunFailure: false,
    video: false,
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
        },
        specPattern: ["**/*.spec.{js,jsx,ts,tsx}"],
    },
    e2e: {
        baseUrl: "http://localhost:3000",
        specPattern: ["**/*.spec.{js,jsx,ts,tsx}"],
        viewportHeight: 1080,
        viewportWidth: 1920,
    },
});
