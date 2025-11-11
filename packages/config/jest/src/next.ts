import type { Config } from "jest";

import { baseConfig } from "./base";

export const nextConfig = {
    ...baseConfig,
    testEnvironment: "jsdom",
    testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/**/*.stories.{js,jsx,ts,tsx}"],
} as const satisfies Config;
