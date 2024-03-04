"use client";

import { ElementType, ReactNode } from "react";
import { Target, TargetAndTransition, motion } from "framer-motion";

import { cn } from "@/utils";

interface FadeInProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    initial?: Target;
    animate?: TargetAndTransition;
    className?: string;
    component?: ElementType;
}

/**
 * FadeIn transition component for animating elements in the page.
 * @param children - The elements to animate.
 * @param duration - The duration of the animation.
 * @param delay - The delay before the animation starts.
 * @param initial - The initial state of the element.
 * @param animate - The state of the element when the animation starts.
 * @param component - The component to use for the animation.
 */
export const FadeIn = ({
    children,
    duration = 0.8,
    delay = 0,
    initial = {},
    animate = {},
    component = "div",
}: FadeInProps) => {
    const MotionComponent = motion(component);

    return (
        <MotionComponent
            initial={{ opacity: 0, ...initial }}
            animate={{ opacity: 1, ...animate }}
            transition={{ duration, delay }}
        >
            {children}
        </MotionComponent>
    );
};

export const FadeInWhileInView = ({
    children,
    duration = 0.8,
    delay = 0,
    initial = {},
    animate = {},
    component = "div",
    className,
}: FadeInProps) => {
    const MotionComponent = motion(component);

    return (
        <MotionComponent
            initial={{ opacity: 0, ...initial }}
            whileInView={{ opacity: 1, ...animate }}
            transition={{ duration, delay }}
            viewport={{ once: true }}
            className={cn("z-50", className)}
        >
            {children}
        </MotionComponent>
    );
};
