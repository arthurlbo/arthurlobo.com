import { cn } from "@/shared/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/design-system/components";
import { eachDayOfInterval, endOfWeek, format, startOfWeek, subYears } from "date-fns";

type TContributionActivity = {
    date: Date;
    count: number;
    level: number;
};

const DATE_KEY_FORMAT = "yyyy-MM-dd";
const ACTIVITY_LEVEL_COLORS: Record<number, string> = {
    0: "bg-[#2d333b]",
    1: "bg-[#0e4429]",
    2: "bg-[#006d32]",
    3: "bg-[#26a641]",
    4: "bg-[#39d353]",
};

const getMonthLabels = (weeks: Date[][]) => {
    return weeks.reduce<string[]>((labels, [firstDay]) => {
        if (!firstDay) return labels;

        const label = format(firstDay, "MMM");
        if (labels.at(-1) !== label) labels.push(label);

        return labels;
    }, []);
};

const generateMockedData = () => {
    const MAX_COUNT = 20;
    const MAX_LEVEL = 4;

    const now = new Date();
    const startDate = subYears(now, 1);
    const endDate = now;

    const dataDays = eachDayOfInterval({ start: startDate, end: endDate });

    const contributionsMap = new Map<string, TContributionActivity>();

    dataDays.forEach((date) => {
        const randomValue = Math.round(Math.random() * MAX_COUNT - Math.random() * (0.8 * MAX_COUNT));
        const count = Math.max(0, randomValue);
        const level = Math.ceil((count / MAX_COUNT) * MAX_LEVEL);

        const activity: TContributionActivity = { date, count, level };
        const dateKey = format(date, DATE_KEY_FORMAT);

        contributionsMap.set(dateKey, activity);
    });

    const gridStart = startOfWeek(startDate, { weekStartsOn: 0 });
    const gridEnd = endOfWeek(endDate, { weekStartsOn: 0 });
    const gridDays = eachDayOfInterval({ start: gridStart, end: gridEnd });

    const weeks: Date[][] = [];
    for (let i = 0; i < gridDays.length; i += 7) {
        weeks.push(gridDays.slice(i, i + 7));
    }

    return { contributionsMap, weeks };
};

export const Graph = () => {
    const { contributionsMap, weeks } = generateMockedData();
    const monthLabels = getMonthLabels(weeks);

    return (
        <div className="border-surface-500 bg-surface-700/30 flex w-full flex-col gap-2 rounded-2xl border p-6">
            <div className="text-primary-300 flex w-full items-center justify-between gap-4 text-sm">
                {monthLabels.map((month, index) => (
                    <span key={index}>{month}</span>
                ))}
            </div>

            <div className="flex w-full justify-between gap-1">
                {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex w-full flex-col gap-1">
                        {week.map((day, dayIdx) => {
                            const dateKey = format(day, DATE_KEY_FORMAT);
                            const activity = contributionsMap.get(dateKey) || { count: 0, level: 0, date: day };

                            return (
                                <Tooltip key={dayIdx} delayDuration={100} disableHoverableContent>
                                    <TooltipTrigger asChild>
                                        <div
                                            className={cn(
                                                "ring-offset-surface-700 h-4 w-4 cursor-pointer rounded-[3px] ring-offset-2 transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-[#39d353]",
                                                ACTIVITY_LEVEL_COLORS[activity.level],
                                            )}
                                        />
                                    </TooltipTrigger>

                                    <TooltipContent
                                        side="right"
                                        sideOffset={-4}
                                        className="border-surface-500 bg-surface-700 text-primary-100 rounded-lg border p-2 text-xs"
                                        arrowClassName="fill-surface-700 bg-surface-700 border-b border-surface-500"
                                    >
                                        <span className="text-primary-100 font-medium">{activity.count} </span>

                                        <span className="text-primary-200">contributions on </span>

                                        <span className="text-primary-100 font-medium">
                                            {format(day, "MMM d, yyyy")}
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="text-primary-200 mt-2 flex w-full items-center justify-end gap-2 text-xs">
                <span>Less</span>

                <div className="flex gap-1">
                    {Object.values(ACTIVITY_LEVEL_COLORS).map((color, index) => (
                        <div key={`legend-${index}`} className={cn("h-3 w-3 rounded-[2px]", color)} />
                    ))}
                </div>

                <span>More</span>
            </div>
        </div>
    );
};
