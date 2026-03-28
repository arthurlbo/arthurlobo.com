import { cn } from "@/shared/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/design-system/components";

interface IProps {
    weeks: TContribution["weeks"];
    months: TContribution["months"];
}

const ACTIVITY_LEVEL_COLORS: Record<number, string> = {
    0: "bg-[#2d333b]",
    1: "bg-[#0e4429]",
    2: "bg-[#006d32]",
    3: "bg-[#26a641]",
    4: "bg-[#39d353]",
};

export const Graph = ({ months, weeks }: IProps) => {
    return (
        <div className="border-surface-500 bg-surface-700/30 flex w-full flex-col gap-2 rounded-2xl border p-6">
            <div className="text-primary-300 flex w-full items-start justify-between gap-4 overflow-x-auto text-sm md:gap-0">
                {months.map((month, index) => (
                    <span key={index} style={{ flex: month.totalWeeks }} className="text-center">
                        {month.name}
                    </span>
                ))}
            </div>

            <div className="flex w-full justify-between gap-2 overflow-x-auto lg:gap-0">
                {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex w-4 flex-col gap-1">
                        {week.map((day, dayIdx) => (
                            <Tooltip key={dayIdx} delayDuration={100} disableHoverableContent>
                                <TooltipTrigger asChild>
                                    <div
                                        className={cn(
                                            "ring-offset-surface-700 h-4 w-4 cursor-pointer rounded-[5px] ring-offset-2 transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-[#39d353]",
                                            ACTIVITY_LEVEL_COLORS[day.level],
                                        )}
                                    />
                                </TooltipTrigger>

                                <TooltipContent
                                    side="right"
                                    sideOffset={-4}
                                    className="border-surface-500 bg-surface-700 text-primary-100 rounded-lg border p-2 text-xs"
                                    arrowClassName="fill-surface-700 bg-surface-700 border-b border-surface-500"
                                >
                                    <span className="text-primary-100 font-medium">{day.count}</span>
                                    <span className="text-primary-200">contributions on </span>
                                    <span className="text-primary-100 font-medium">{day.date}</span>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                ))}
            </div>

            <div className="text-primary-200 mt-2 flex w-full items-center justify-end gap-2 text-xs">
                <span>Less</span>

                <div className="flex gap-1">
                    {Object.values(ACTIVITY_LEVEL_COLORS).map((color, index) => (
                        <div key={index} className={cn("h-3 w-3 rounded-[4px]", color)} />
                    ))}
                </div>

                <span>More</span>
            </div>
        </div>
    );
};
