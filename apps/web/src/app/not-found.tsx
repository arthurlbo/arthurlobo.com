import { Particles } from "@repo/design-system/components";

export const dynamic = "force-static";

export default function NotFound() {
    return (
        <div className="text-text-100 relative flex h-[calc(100vh-72px-32px)] w-full flex-col items-center justify-center gap-6 xl:h-[calc(100vh-32px)]">
            <Particles
                refresh
                ease={80}
                quantity={100}
                color="#A3A3A3"
                className="absolute inset-0 z-0 h-full w-full"
            />

            <span className="text-3xl">🧑‍💻</span>

            <h1 className="text-text-100 text-3xl font-bold">Almost There...</h1>

            <div className="text-text-200 flex flex-col gap-0.5 text-center text-lg font-normal">
                <span>This section is still being built.</span>
                <span>Check back soon to see what's cooking!</span>
            </div>
        </div>
    );
}
