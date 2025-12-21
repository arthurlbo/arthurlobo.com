import { Accordion } from "@repo/design-system/components";

import { IMilestoneCardProps, MilestoneCard } from "./card";

interface IMilestonesProps {
    items: IMilestoneCardProps[];
}

/**
 * Container component that renders a collection of milestone cards in a responsive grid.
 *
 * @param items - Array of milestone data to be rendered as individual MilestoneCard components.
 */
export const Milestones = ({ items }: IMilestonesProps) => {
    return (
        <Accordion type="single" collapsible asChild>
            <section className="mt-4 grid h-full w-full grid-cols-1 items-start gap-6 xl:grid-cols-2">
                {items.map((item) => (
                    <MilestoneCard key={item.value} {...item} />
                ))}
            </section>
        </Accordion>
    );
};
