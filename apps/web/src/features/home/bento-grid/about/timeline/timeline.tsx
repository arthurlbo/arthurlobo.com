import { Event, IEventProps } from "./event";

const events: IEventProps[] = [
    {
        title: "Sooro Renner",
        date: "Jul 2025 - Present",
        className: "top-4 delay-0 ease-out after:ease-out after:delay-0",
        side: "left",
    },
    {
        title: "Wedding",
        date: "Dec 01, 2024",
        className: "top-14 delay-[50ms] ease-in-out after:delay-[50ms] after:ease-in-out",
        side: "right",
    },
    {
        title: "Analítica S/A",
        date: "Dec 2023 - Jul 2025",
        className: "top-24 delay-[100ms] ease-in after:delay-[100ms] after:ease-in",
        side: "left",
    },
    {
        title: "Adam Robo",
        date: "Dec 2022 - Jan 2024",
        className: "top-[136px] delay-[150ms] ease-out after:delay-[150ms] after:ease-out",
        side: "right",
    },
    {
        title: "College",
        date: "Jul 2022 - Jul 2026",
        className: "top-44 delay-[200ms] ease-in-out after:delay-[200ms] after:ease-in-out",
        side: "left",
    },
];

export const Timeline = () => {
    return (
        <div className="absolute top-0 right-4 h-full w-0 sm:w-[300px] lg:w-[180px] xl:w-[300px]">
            <div className="border-border-400 bg-surface-400/50 absolute top-0 left-1/2 z-20 h-full w-2 -translate-x-1/2 border-x" />

            {events.map((event, index) => (
                <Event key={index} {...event} />
            ))}
        </div>
    );
};
