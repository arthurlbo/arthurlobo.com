import { z } from "zod";

export const globalSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "staging", "test"]),
});

export const databaseSchema = z.object({
    DB_HOST: z
        .string({
            error: "You forgot to set the DB_HOST variable",
        })
        .describe("Database host address"),
    DB_PORT: z.coerce
        .number({
            error: "You forgot to set the DB_PORT variable",
        })
        .describe("Database port"),
    DB_DATABASE: z
        .string({
            error: "You forgot to set the DB_DATABASE variable",
        })
        .describe("Database name"),
    DB_USERNAME: z
        .string({
            error: "You forgot to set the DB_USERNAME variable",
        })
        .describe("Database user"),
    DB_PASSWORD: z
        .string({
            error: "You forgot to set the DB_PASSWORD variable",
        })
        .describe("Database password"),
});

export const apiSchema = z.object({
    API_PORT: z.coerce
        .number({
            error: "You forgot to set the API_PORT variable",
        })
        .describe("Port for the API application"),
});

export const webSchema = z.object({
    WEB_PORT: z.coerce
        .number({
            error: "You forgot to set the WEB_PORT variable",
        })
        .describe("Port for the web application"),
    RESEND_API_KEY: z
        .string({
            error: "You forgot to set the RESEND_API_KEY variable",
        })
        .describe("API key for Resend email service"),
    CONTACT_FROM_EMAIL: z
        .email({
            message: "CONTACT_FROM_EMAIL must be a valid email address",
        })
        .describe("The from email address for contact form emails"),
    CONTACT_TO_EMAIL: z
        .email({
            message: "CONTACT_TO_EMAIL must be a valid email address",
        })
        .describe("The to email address for contact form emails"),
    NEXT_PUBLIC_BASE_URL: z
        .string({
            error: "You forgot to set the NEXT_PUBLIC_BASE_URL variable",
        })
        .describe("Base URL for the web application"),
    NEXT_PUBLIC_API_URL: z
        .string({
            error: "You forgot to set the NEXT_PUBLIC_API_URL variable",
        })
        .describe("URL for the API application"),
});
