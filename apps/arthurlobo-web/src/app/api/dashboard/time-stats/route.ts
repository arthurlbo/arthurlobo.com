import { NextResponse } from "next/server";

import { rateLimiter } from "@/shared/utils";
import { webEnv } from "@repo/env";
import { format, formatDistanceToNowStrict } from "date-fns";

interface IWakaTimeStatsResponse {
    data: {
        human_readable_total: string;
        human_readable_daily_average: string;
        best_day: {
            text: string;
        };
        start: string;
        end: string;
        modified_at: string;
    };
}

interface IWakaTimeAllTimeResponse {
    data: {
        text: string;
    };
}

export async function GET(request: Request) {
    try {
        const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

        const rateLimit = rateLimiter({ ip, context: "wakatime", maxRequests: 60 });

        if (!rateLimit.success) {
            return Response.json(
                {
                    error: "Too many requests. Please try again later.",
                },
                { status: 429 },
            );
        }

        const wakaTimeAuthHeader = `Basic ${Buffer.from(webEnv.WAKATIME_API_KEY).toString("base64")}`;

        const [allTimeResponse, weeklyStatsResponse] = await Promise.all([
            fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
                headers: { Authorization: wakaTimeAuthHeader },
            }),
            fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
                headers: { Authorization: wakaTimeAuthHeader },
            }),
        ]);

        if (!allTimeResponse.ok || !weeklyStatsResponse.ok) {
            return NextResponse.json({ error: "Failed to fetch time stats data" }, { status: 502 });
        }

        const allTimeData = (await allTimeResponse.json()) as IWakaTimeAllTimeResponse;
        const weeklyStatsData = (await weeklyStatsResponse.json()) as IWakaTimeStatsResponse;

        const { data: allTime } = allTimeData;
        const { data: weeklyStats } = weeklyStatsData;

        const startDate = new Date(weeklyStats.start);
        const endDate = new Date(weeklyStats.end);
        const distanceToNow = formatDistanceToNowStrict(new Date(weeklyStats.modified_at));

        const timeStats: TTimeStats = {
            totalTime: weeklyStats.human_readable_total,
            bestDay: weeklyStats.best_day.text,
            dailyAverage: weeklyStats.human_readable_daily_average,
            allTime: allTime.text,
            startDate: format(startDate, "MMM d"),
            endDate: format(endDate, "MMM d, yyyy"),
            updatedAt: `Updated ${distanceToNow} ago`,
        };

        return Response.json(timeStats);
    } catch (_) {
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
