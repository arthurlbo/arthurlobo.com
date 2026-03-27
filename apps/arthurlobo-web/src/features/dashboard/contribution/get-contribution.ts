"use server";

import { webEnv } from "@repo/env";

/**
 * Fetches the contribution data from the API.
 */
export const getContribution = async () => {
    const response = await fetch(`${webEnv.NEXT_PUBLIC_BASE_URL}/api/dashboard/contribution`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error(response.status === 429 ? "RATE_LIMIT_REACHED" : "FAILED_TO_FETCH");

    return (await response.json()) as TContribution;
};
