"use server";

import { webEnv } from "@repo/env";

export const getProjects = async () => {
    const response = await fetch(`${webEnv.NEXT_PUBLIC_BASE_URL}/api/projects`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) throw new Error(response.status === 429 ? "RATE_LIMIT_REACHED" : "FAILED_TO_FETCH");

    return (await response.json()) as TProject[];
};
