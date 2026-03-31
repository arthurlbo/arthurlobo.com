import { NextResponse } from "next/server";

import { rateLimiter } from "@/shared/utils";
import { webEnv } from "@repo/env";
import { format, parseISO } from "date-fns";

interface IGithubGraphQLResponse {
    data: {
        viewer: {
            contributionsCollection: {
                contributionCalendar: {
                    colors: string[];
                    totalContributions: number;
                    months: {
                        firstDay: string;
                        name: string;
                        totalWeeks: number;
                    }[];
                    weeks: {
                        contributionDays: {
                            color: string;
                            contributionCount: number;
                            date: string;
                        }[];
                        firstDay: string;
                    }[];
                };
            };
        };
    };
    errors?: { message: string }[];
}

type TContributionCalendar =
    IGithubGraphQLResponse["data"]["viewer"]["contributionsCollection"]["contributionCalendar"];

const QUERY = `
    query {
        viewer {
            contributionsCollection {
                contributionCalendar {
                    colors
                    totalContributions
                    months {
                        firstDay
                        name
                        totalWeeks
                    }
                    weeks {
                        firstDay
                        contributionDays {
                            color
                            contributionCount
                            date
                        }
                    }
                }
            }
        }
    }
`;

const getFormattedWeeks = (calendarData: TContributionCalendar): TContribution["weeks"] => {
    return calendarData.weeks.map((week) =>
        week.contributionDays.map((day) => {
            let level = 0;

            if (day.contributionCount > 0) {
                const colorIndex = calendarData.colors.indexOf(day.color);
                level = colorIndex !== -1 ? colorIndex + 1 : 1;
            }

            return {
                key: day.date,
                date: format(parseISO(day.date), "MMM d, yyyy"),
                count: day.contributionCount,
                level,
            };
        }),
    );
};

const getInsights = (calendarData: TContributionCalendar): TContribution["insights"] => {
    const allDays = calendarData.weeks.flatMap((week) => week.contributionDays);

    const bestDayCount = allDays.length > 0 ? Math.max(...allDays.map((day) => day.contributionCount)) : 0;

    const last7Days = allDays.slice(-7);
    const thisWeekTotal = last7Days.reduce((sum, day) => sum + day.contributionCount, 0);

    const totalDays = allDays.length;
    const averagePerDay = totalDays > 0 ? Math.round(calendarData.totalContributions / totalDays) : 0;

    return [
        {
            label: "Total",
            value: calendarData.totalContributions,
        },
        {
            label: "This week",
            value: thisWeekTotal,
        },
        {
            label: "Best day",
            value: bestDayCount,
        },
        {
            label: "Average",
            value: averagePerDay,
            suffix: "/ day",
        },
    ];
};

export async function GET(request: Request) {
    try {
        const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

        const rateLimit = rateLimiter({ ip, context: "contributions", maxRequests: 60 });

        if (!rateLimit.success) {
            return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
        }

        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${webEnv.GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: QUERY,
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch GitHub contributions" }, { status: response.status });
        }

        const json = (await response.json()) as IGithubGraphQLResponse;

        if (json.errors) {
            return NextResponse.json({ error: "Error parsing GraphQL data" }, { status: 502 });
        }

        const calendarData = json.data.viewer.contributionsCollection.contributionCalendar;

        const months: TContribution["months"] = calendarData.months.map((month) => ({
            name: month.name,
            totalWeeks: month.totalWeeks,
        }));

        const weeks = getFormattedWeeks(calendarData);
        const insights = getInsights(calendarData);

        const contributionData = {
            months,
            weeks,
            insights,
        };

        return Response.json(contributionData);
    } catch (_) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
