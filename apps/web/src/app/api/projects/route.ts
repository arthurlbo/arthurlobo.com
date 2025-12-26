import * as fs from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

import { rateLimiter } from "@/shared/utils";
import { webEnv } from "@repo/env";

interface IGithubResponse {
    id: number;
    name: TProjectsName;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    fork: boolean;
    topics: string[];
    homepage: string | null;
    created_at: string;
    updated_at: string;
}

const PROJECTS_TO_SHOW: TProjectsName[] = [
    "fullstack-monorepo-template",
    "user-management-api",
    "exp-bio",
    "time-capsule",
    "habits",
    "feedget",
    "yazitv",
];

export async function GET(request: Request) {
    try {
        const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

        const rateLimit = rateLimiter({ ip, context: "projects", maxRequests: 60 });

        if (!rateLimit.success) {
            return Response.json(
                {
                    error: "Too many requests. Please try again later.",
                },
                { status: 429 },
            );
        }

        const response = await fetch(
            `https://api.github.com/user/repos?sort=name&visibility=public&affiliation=owner`,
            {
                headers: {
                    Authorization: `Bearer ${webEnv.GITHUB_TOKEN}`,
                },
            },
        );

        if (!response.ok) return NextResponse.json({ error: "Failed to fetch projects" }, { status: response.status });

        const data = (await response.json()) as IGithubResponse[];

        const filteredData = data.filter((repo) => PROJECTS_TO_SHOW.includes(repo.name));

        const formattedData: TProject[] = filteredData.map((repo) => {
            const imageFilename = `/projects/${repo.name}.webp`;

            const filePath = path.join(process.cwd(), "public", imageFilename);
            const hasImage = fs.existsSync(filePath);

            return {
                title: repo.name,
                description: repo.description || "No description provided.",
                image: hasImage ? imageFilename : "/projects/fallback.webp",
                link: repo.html_url,
                technologies: repo.topics,
            };
        });

        return Response.json(formattedData);
    } catch (_) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
