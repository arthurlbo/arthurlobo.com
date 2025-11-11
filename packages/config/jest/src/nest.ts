import type { Config } from "jest";

import { baseConfig } from "./base";

export const nestConfig = {
    ...baseConfig,
    testEnvironment: "node",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    testRegex: ".*\\.test\\.ts$",
    collectCoverageFrom: ["**/*.(t|j)s"],
} as const satisfies Config;
