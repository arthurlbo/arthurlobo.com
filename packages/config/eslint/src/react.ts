import type { Linter } from "eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import { baseConfig } from "./base";

export const reactConfig: Linter.Config[] = [
    ...baseConfig,
    {
        ...pluginReact.configs.flat.recommended,
        languageOptions: {
            ...pluginReact.configs.flat.recommended?.languageOptions,
            globals: {
                ...globals.serviceworker,
            },
        },
    },
    {
        plugins: {
            "react-hooks": pluginReactHooks as any,
        },
        settings: { react: { version: "detect" } },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
        },
    },
    {
        ignores: ["next-env.d.ts", "node_modules/**", "dist/**", "build/**", "coverage/**"],
    },
];
