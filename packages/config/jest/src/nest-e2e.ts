import type { Config } from "jest";

import { nestConfig } from "./nest";

export const nestE2eConfig = {
    ...nestConfig,
    testRegex: ".*\\.spec\\.ts$",
} as const satisfies Config;
