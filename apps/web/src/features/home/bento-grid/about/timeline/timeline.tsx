import { DotPattern } from "@repo/design-system/components";

import { Event, IEventProps } from "./event";

const events: IEventProps[] = [
    {
        title: "Sooro Renner",
        date: "Jul 2025 - Present",
        position: 10,
        side: "left",
    },
    {
        title: "Wedding",
        date: "Dec 01, 2024",
        position: 30,
        side: "right",
    },
    {
        title: "Analítica S/A",
        date: "Dec 2023 - Jul 2025",
        position: 50,
        side: "left",
    },
    {
        title: "Adam Robo",
        date: "Dec 2022 - Jan 2024",
        position: 70,
        side: "right",
    },
    {
        title: "College",
        date: "Jul 2022 - Jul 2026",
        position: 90,
        side: "left",
    },
];

export const Timeline = () => {
    return (
        <div className="absolute top-0 right-4 h-full">
            <DotPattern className="text-border/70 h-[300px] w-[300px]" />

            <div className="border-border bg-surface/50 absolute top-0 left-1/2 z-20 h-full w-2 -translate-x-1/2 border-x" />

            {events.map((event, index) => (
                <Event key={index} {...event} />
            ))}
        </div>
    );
};
