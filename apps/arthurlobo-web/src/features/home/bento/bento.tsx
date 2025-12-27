"use client";

import { About } from "./about";
import { Contact } from "./contact";
import { Dashboard } from "./dashboard";
import { Projects } from "./projects";
import { Stack } from "./stack";

/**
 * Home page bento grid layout component.
 */
export const HomeBento = () => {
    return (
        <div className="bg-surface-700/30 mt-6 flex h-auto w-full shrink-0 flex-col gap-4 overflow-hidden rounded-3xl p-4 lg:h-[440px] lg:gap-2">
            <div className="flex h-auto w-full flex-col items-center justify-between gap-4 lg:h-1/2 lg:flex-row lg:gap-2">
                <About />
                <Projects />
            </div>

            <div className="flex h-auto w-full flex-col items-center justify-between gap-4 lg:h-1/2 lg:flex-row lg:gap-2">
                <Stack />
                <Dashboard />
                <Contact />
            </div>
        </div>
    );
};
