import { baseConfig } from "@repo/tsup";
import { type Options, defineConfig } from "tsup";

const config: Options = {
    ...baseConfig,
    bundle: true,
    entry: ["src/index.ts"],
    noExternal: ["find-up"],
};

export default defineConfig(config);
