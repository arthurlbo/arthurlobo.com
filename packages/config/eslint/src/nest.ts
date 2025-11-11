import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import type { Linter } from "eslint";
import globals from "globals";

import { baseConfig } from "./base";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const nestConfig: Linter.Config[] = [
    ...baseConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            sourceType: "commonjs",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            "@typescript-eslint/no-floating-promises": "warn",
            "@typescript-eslint/no-unsafe-argument": "warn",
        },
        ignores: ["dist/**", "node_modules/**", "jest*", "eslint.config.mjs"],
    },
];
