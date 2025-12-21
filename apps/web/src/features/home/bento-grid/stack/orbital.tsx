import { ElementType } from "react";

import { cn } from "@/shared/utils";
import { NestJS, NextJs, NodeJs, PostgreSQL, React, TypeScript } from "developer-icons";
import { DeveloperIconProps } from "developer-icons/dist/icon";

import { Icon } from "./icon";

type TIcon = {
    icon: ElementType<DeveloperIconProps>;
    angle: number;
    className?: string;
};

type TCircle = {
    r: number;
    delay: string;
    icons: TIcon[];
};

const circles: TCircle[] = [
    { r: 30, delay: "delay-0", icons: [] },
    { r: 50, delay: "delay-[50ms]", icons: [] },
    { r: 70, delay: "delay-[100ms]", icons: [] },
    {
        r: 90,
        delay: "delay-[150ms]",
        icons: [{ icon: React, angle: 270 }],
    },
    {
        r: 110,
        delay: "delay-[200ms]",
        icons: [
            { icon: TypeScript, angle: 220, className: "p-1.5" },
            { icon: NestJS, angle: 320 },
        ],
    },
    {
        r: 130,
        delay: "delay-[250ms]",
        icons: [
            { icon: NextJs, angle: 245 },
            { icon: NodeJs, angle: 295 },
        ],
    },
    {
        r: 150,
        delay: "delay-[300ms]",
        icons: [{ icon: PostgreSQL, angle: 270 }],
    },
];

/**
 * Displays an orbital arrangement of technology icons around a central point.
 */
export const Orbital = () => {
    const centerX = 120;
    const centerY = 180;
    const iconSize = 28;

    return (
        <svg
            viewBox="0 0 240 180"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 h-full w-full fill-none"
            preserveAspectRatio="xMidYMid meet"
        >
            {circles.map(({ r, delay, icons }, circleIndex) => (
                <g key={circleIndex}>
                    <circle
                        cy={centerY}
                        cx={centerX}
                        r={r}
                        className={cn(
                            "stroke stroke-surface-500 group-hover:stroke-accent-500 opacity-70 transition-all duration-500 ease-in-out group-hover:opacity-100",
                            delay,
                        )}
                    />
                    {icons.map(({ angle, className, icon: IconComponent }, iconIndex) => {
                        const angleRad = (angle * Math.PI) / 180;
                        const x = centerX + r * Math.cos(angleRad) - iconSize / 2;
                        const y = centerY + r * Math.sin(angleRad) - iconSize / 2;

                        return (
                            <foreignObject
                                key={`icon-${circleIndex}-${iconIndex}`}
                                x={Math.round(x * 100) / 100}
                                y={Math.round(y * 100) / 100}
                                width={iconSize}
                                height={iconSize}
                                className="overflow-visible"
                            >
                                <Icon icon={IconComponent} className={className} />
                            </foreignObject>
                        );
                    })}
                </g>
            ))}
        </svg>
    );
};
