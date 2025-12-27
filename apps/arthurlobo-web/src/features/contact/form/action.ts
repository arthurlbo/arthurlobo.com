"use server";

import { webEnv } from "@repo/env";

import { TContactFormData } from "./schema";

/**
 * Contact form action to send the email.
 * @param _ - Previous state (not used).
 * @param formData - Contact form data.
 */
export const contactFormAction = async (_: IPrevState, formData: TContactFormData): Promise<IPrevState> => {
    const { name, email, message } = formData;

    try {
        const response = await fetch(`${webEnv.NEXT_PUBLIC_BASE_URL}/api/contact/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to send message, please try again later.");
        }

        return {
            success: true,
            error: null,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message,
            };
        }

        return {
            success: false,
            error: String(error),
        };
    }
};
