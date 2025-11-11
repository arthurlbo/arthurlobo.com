import { baseConfig } from "@repo/tsup";
import fs from "fs/promises";
import { defineConfig } from "tsup";

export default defineConfig({
    ...baseConfig,
    external: ["react"],
    entry: ["src/components/index.ts", "src/shared/utils/index.ts"],
    banner: {
        js: '"use client";',
    },
    onSuccess: async () => {
        console.log("Build bem-sucedido. Copiando arquivos estáticos...");
        await fs.copyFile("globals.css", "dist/globals.css");
        await fs.copyFile("postcss.config.mjs", "dist/postcss.config.mjs");
        console.log("Arquivos estáticos copiados.");
    },
});
