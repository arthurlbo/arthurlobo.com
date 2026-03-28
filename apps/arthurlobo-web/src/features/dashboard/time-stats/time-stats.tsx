import { Bullet } from "@/shared/components/ui";
import { IconBolt, IconCalendarMonth, IconClock, IconClockHour3 } from "@tabler/icons-react";

import { getTimeStats } from "@/features/dashboard";

import { Card } from "./card";

export const DashboardTimeStats = async () => {
    const { allTime, totalTime, endDate, startDate, updatedAt, bestDay, dailyAverage } = await getTimeStats();

    return (
        <section className="bg-surface-700/30 border-surface-500 flex w-full flex-col items-start justify-start gap-4 rounded-2xl border p-6 sm:gap-8">
            <div className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row">
                <div className="flex flex-col items-start gap-2">
                    <span className="text-primary-100 text-3xl font-bold">{totalTime}</span>

                    <div className="text-primary-300 flex items-center gap-2 text-sm font-medium">
                        <span>spent code this week</span>
                        <Bullet />
                        <span>{`${startDate} - ${endDate}`}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-primary-300 text-sm font-normal">{updatedAt}</span>
                    <IconClockHour3 size={22} className="text-primary-300" />
                </div>
            </div>

            <div className="flex w-full flex-col gap-4">
                <Card label="Daily Average" value={dailyAverage} period="last 7 days" icon={IconClock} />

                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <Card label="Best Day" value={bestDay} icon={IconBolt} />
                    <Card label="All Time" value={allTime} icon={IconCalendarMonth} />
                </div>
            </div>
        </section>
    );
};
