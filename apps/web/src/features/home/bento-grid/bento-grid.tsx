import { About } from "./about";
import { Projects } from "./projects";
import { Stack } from "./stack";

export const HomeBentoGrid = () => {
    return (
        <div className="bg-surface/50 mt-6 flex h-[440px] w-full flex-col gap-2 overflow-hidden rounded-3xl p-4">
            <div className="flex h-1/2 w-full items-center justify-between gap-2">
                <About />
                <Projects />
            </div>

            <div className="flex h-1/2 w-full items-center justify-between gap-2">
                <Stack />
                <div className="border-border h-full flex-1 rounded-2xl border" />
                <div className="border-border h-full w-[232px] rounded-2xl border" />
            </div>
        </div>
    );
};
