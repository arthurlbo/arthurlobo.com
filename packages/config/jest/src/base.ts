import type { Config } from "jest";

export const baseConfig = {
    coverageProvider: "v8",
    coverageDirectory: "coverage",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
} as const satisfies Config;
