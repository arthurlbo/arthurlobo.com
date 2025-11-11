import { baseConfig } from "@repo/tsup";
import { defineConfig } from "tsup";

export default defineConfig({
    ...baseConfig,
    entry: ["src/base.ts", "src/next.ts", "src/nest.ts", "src/nest-e2e.ts"],
    bundle: true,
    external: ["jest"],
});
