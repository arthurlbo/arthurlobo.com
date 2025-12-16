import { Accordion } from "@repo/design-system/components";

import { IMilestoneCardProps, MilestoneCard } from "./card";

interface IMilestonesProps {
    items: IMilestoneCardProps[];
}

export const Milestones = ({ items }: IMilestonesProps) => {
    return (
        <Accordion type="single" collapsible asChild>
            <section className="mt-4 grid h-full w-full grid-cols-1 items-start gap-6 lg:grid-cols-2">
                {items.map((item) => (
                    <MilestoneCard key={item.value} {...item} />
                ))}
            </section>
        </Accordion>
    );
};
