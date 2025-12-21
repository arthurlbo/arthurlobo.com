"use client";
import { useState } from "react";

import Image from "next/image";

import IndicatorIcon from "@/assets/navigation/indicator.svg";
import { cn } from "@/shared/utils";

/**
 * Indicator component that animates on click.
 */
export const Indicator = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 5000);
    };

    return (
        <Image
            src={IndicatorIcon}
            alt="Indicator"
            priority
            quality={100}
            width={40}
            className={cn(
                "absolute top-0.5 right-28 h-auto cursor-pointer xl:-right-1.5",
                "focus:ring-0 focus:ring-offset-0 focus:outline-none",
                isAnimating ? "animate-move" : "",
            )}
            onClick={handleClick}
        />
    );
};
