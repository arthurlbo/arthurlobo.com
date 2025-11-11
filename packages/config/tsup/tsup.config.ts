import { type Options, defineConfig } from "tsup";

import { baseConfig } from "./index";

const config: Options = {
    ...baseConfig,
    bundle: true,
    entry: ["index.ts"],
    external: ["tsup"],
};

export default defineConfig(config);
