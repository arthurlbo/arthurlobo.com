import { About } from "./about";
import { Contact } from "./contact";
import { Dashboard } from "./dashboard";
import { Projects } from "./projects";
import { Stack } from "./stack";

export const HomeBentoGrid = () => {
    return (
        <div className="bg-surface/50 mt-6 flex h-auto w-full shrink-0 flex-col gap-2 overflow-hidden rounded-3xl p-4 lg:h-[440px]">
            <div className="flex h-auto w-full flex-col items-center justify-between gap-2 lg:h-1/2 lg:flex-row">
                <About />
                <Projects />
            </div>

            <div className="flex h-auto w-full flex-col items-center justify-between gap-2 lg:h-1/2 lg:flex-row">
                <Stack />
                <Dashboard />
                <Contact />
            </div>
        </div>
    );
};
