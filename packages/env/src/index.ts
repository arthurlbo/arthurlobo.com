import path from "node:path";

import * as dotenv from "dotenv";
import { findUpSync } from "find-up";
import z from "zod";

import { apiSchema, databaseSchema, globalSchema, webSchema } from "./env.schema";

const getEnvFilePath = (): string => {
    const environment = process.env.NODE_ENV || "development";

    const workspaceRoot = findUpSync("pnpm-workspace.yaml", {
        cwd: process.cwd(),
        type: "file",
    });

    const rootDir = workspaceRoot ? path.dirname(workspaceRoot) : path.resolve(__dirname, "../..");

    return path.join(rootDir, `.env.${environment}`);
};

const envPath = getEnvFilePath();
dotenv.config({ path: envPath });

const validateEnv = <T extends z.ZodType<any>>(schema: T, schemaName: string): z.infer<T> => {
    const validationResult = schema.safeParse(process.env);

    if (validationResult.success === false) {
        console.error(
            `❌ Invalid environment variables for [${schemaName}]:`,
            JSON.stringify(z.treeifyError(validationResult.error), null, 2),
        );
        throw new Error(`Invalid environment variables for ${schemaName}`);
    }

    return validationResult.data;
};

export const globalEnv = validateEnv(globalSchema, "global");
export const databaseEnv = validateEnv(databaseSchema, "database");
export const apiEnv = validateEnv(apiSchema, "api");
export const webEnv = validateEnv(webSchema, "web");
