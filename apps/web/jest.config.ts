import nextJest from "next/jest.js";

import { nextConfig } from "@repo/jest/next";

const createJestConfig = nextJest({
    dir: "./",
});

export default createJestConfig(nextConfig);
