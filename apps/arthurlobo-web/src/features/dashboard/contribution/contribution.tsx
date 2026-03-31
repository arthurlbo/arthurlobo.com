import { getContribution } from "./get-contribution";
import { Graph } from "./graph";

export const DashboardContribution = async () => {
    const { weeks, insights, months } = await getContribution();

    return (
        <section className="my-4 flex w-full flex-col items-start justify-start gap-4">
            <div className="flex w-full flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                <span className="text-primary-100 text-3xl font-semibold">Contributions</span>
                <span className="text-primary-300 text-sm font-normal">
                    A year of commits, PRs, and debugging sessions
                </span>
            </div>

            <div className="mt-2 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
                {insights.map((insight) => (
                    <div
                        key={insight.label}
                        className="border-surface-500 bg-surface-700/30 relative flex w-full flex-col rounded-xl border p-4"
                    >
                        <div className="flex items-end gap-1">
                            <span className="text-3xl font-extrabold text-[#216e39] dark:text-[#39d353]">
                                {insight.value.toFixed(0)}
                            </span>
                            {insight.suffix && <span className="text-primary-300 pb-1 text-xs">{insight.suffix}</span>}
                        </div>

                        <span className="text-primary-300 text-sm">{insight.label}</span>
                    </div>
                ))}
            </div>

            <Graph weeks={weeks} months={months} />
        </section>
    );
};
