"use server";

import { webEnv } from "@repo/env";

/**
 * Fetches the time statistics from the API.
 */
export const getTimeStats = async () => {
    const response = await fetch(`${webEnv.NEXT_PUBLIC_BASE_URL}/api/dashboard/time-stats`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error(response.status === 429 ? "RATE_LIMIT_REACHED" : "FAILED_TO_FETCH");

    return (await response.json()) as TTimeStats;
};
