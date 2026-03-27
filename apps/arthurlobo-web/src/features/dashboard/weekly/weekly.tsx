import { Bullet } from "@/shared/components/ui";
import { IconBolt, IconCalendarMonth, IconClock, IconClockHour3 } from "@tabler/icons-react";

import { Card } from "@/features/dashboard/weekly/card";

export const DashboardWeekly = () => {
    return (
        <section className="bg-surface-700/30 border-surface-500 flex w-full flex-col items-start justify-start gap-8 rounded-2xl border p-6">
            <div className="flex w-full items-start justify-between gap-2">
                <div className="flex flex-1 flex-col items-start gap-2">
                    <span className="text-primary-100 text-3xl font-bold">19 hrs 41 mins</span>

                    <div className="text-primary-300 flex items-center gap-2 text-sm font-medium">
                        <span>spent code this week</span>
                        <Bullet />
                        <span>Dec 22 - Dec 29, 2025</span>
                    </div>
                </div>

                <span className="text-primary-300 text-sm font-normal">Updated 7 hours ago</span>

                <IconClockHour3 size={22} className="text-primary-300" />
            </div>

            <div className="flex w-full flex-col gap-4">
                <Card label="Daily Average" value="3 hrs 56 mins" period="last 7 days" icon={IconClock} />

                <div className="flex items-center justify-between gap-4">
                    <Card label="Best Day" value="8 hrs 30 mins" icon={IconBolt} />
                    <Card label="All Time" value="4,250 hrs 55 mins" icon={IconCalendarMonth} />
                </div>
            </div>
        </section>
    );
};
