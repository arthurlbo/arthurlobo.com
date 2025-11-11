import { type Options } from "tsup";

export const baseConfig: Options = {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    outDir: "dist",
    splitting: true,
    sourcemap: false,
    minify: false,
    outExtension({ format }) {
        return {
            js: format === "esm" ? ".mjs" : ".cjs",
        };
    },
};
