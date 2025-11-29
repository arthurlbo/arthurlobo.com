import { cn } from "@/shared/utils";

export const Orbital = () => {
    const circles = [
        {
            r: "30",
            delay: "delay-0",
        },
        {
            r: "50",
            delay: "delay-[50ms]",
        },
        {
            r: "70",
            delay: "delay-[100ms]",
        },
        {
            r: "90",
            delay: "delay-[150ms]",
        },
        {
            r: "110",
            delay: "delay-[200ms]",
        },
        {
            r: "130",
            delay: "delay-[250ms]",
        },
        {
            r: "150",
            delay: "delay-[300ms]",
        },
    ];

    return (
        <svg
            viewBox="0 0 232 374"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 fill-none opacity-70"
        >
            {circles.map(({ r, delay }, index) => (
                <circle
                    key={index}
                    cy={187}
                    cx={116}
                    r={r}
                    className={cn(
                        "stroke stroke-border group-hover:stroke-accent-primary/80 transition-all duration-500 ease-in-out",
                        delay,
                    )}
                />
            ))}
        </svg>
    );
};
