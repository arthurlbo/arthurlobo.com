import pluginNext from "@next/eslint-plugin-next";
import type { Linter } from "eslint";

import { reactConfig } from "./react";

export const nextConfig: Linter.Config[] = [
    ...reactConfig,
    {
        plugins: {
            "@next/next": pluginNext as any,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
        },
    } as Linter.Config,
    {
        ignores: [".next/**", "out/**", "next-env.d.ts", "node_modules/**", "dist/**", "build/**", "coverage/**"],
    },
];
