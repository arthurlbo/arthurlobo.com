"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/shared/utils/";

interface IMeteorsProps {
    number?: number;
    minDelay?: number;
    maxDelay?: number;
    minDuration?: number;
    maxDuration?: number;
    angle?: number;
    className?: string;
}

export const Meteors = ({
    number = 20,
    minDelay = 0.2,
    maxDelay = 1.2,
    minDuration = 2,
    maxDuration = 10,
    angle = 215,
    className,
}: IMeteorsProps) => {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

    useEffect(() => {
        const styles = [...new Array(number)].map(() => ({
            "--angle": -angle + "deg",
            top: "-5%",
            left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
            animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
            animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
        }));
        setMeteorStyles(styles);
    }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

    return (
        <>
            {[...meteorStyles].map((style, idx) => (
                <span
                    key={idx}
                    style={{ ...style }}
                    className={cn(
                        "animate-meteor bg-primary-300 pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full shadow-[0_0_0_1px_#ffffff10]",
                        className,
                    )}
                >
                    <div className="from-primary-300 pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-linear-to-r to-transparent" />
                </span>
            ))}
        </>
    );
};
