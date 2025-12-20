"use server";

import { webEnv } from "@repo/env";

import { TContactFormData } from "./schema";

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
            throw new Error(errorData.error || "Failed to send message");
        }

        return {
            success: true,
            error: null,
        };
    } catch (error: unknown) {
        console.error(error);

        return {
            success: false,
            error: "Failed to send message. Please try again later.",
        };
    }
};
