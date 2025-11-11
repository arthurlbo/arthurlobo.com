import { baseConfig } from "@repo/tsup";
import { defineConfig } from "tsup";

export default defineConfig({
    ...baseConfig,
    entry: ["src/index.ts"],
    bundle: true,
    external: ["typeorm"],
});
