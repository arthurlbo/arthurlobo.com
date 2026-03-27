import { Graph } from "./graph";
import { IInsightProps, Insight } from "./insight";

const insightsMock: IInsightProps[] = [
    {
        label: "Total",
        value: 5197,
    },
    {
        label: "This week",
        value: 41,
    },
    {
        label: "Best day",
        value: 76,
    },
    {
        label: "Average",
        value: 14,
        suffix: "/ day",
    },
];

export const DashboardContributions = () => {
    return (
        <section className="my-4 flex w-full flex-col items-start justify-start gap-4">
            <div className="flex w-full items-center justify-between">
                <span className="text-primary-100 text-3xl font-semibold">Contributions</span>
                <span className="text-primary-300 text-sm font-normal">
                    A year of commits, PRs, and debugging sessions
                </span>
            </div>

            <div className="mt-2 grid w-full grid-cols-4 gap-4">
                {insightsMock.map((insight) => (
                    <Insight key={insight.label} {...insight} />
                ))}
            </div>

            <Graph />
        </section>
    );
};
