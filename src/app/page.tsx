import { About, Career, Hero, MovingTechs, Projects, Divider } from "@/components";

export default function Home() {
    return (
        <>
            <Hero />
            <MovingTechs />
            <div className="flex w-full flex-col items-start gap-5 p-5 xl:gap-28 xl:p-28">
                <About />
                <Divider />
                <Career />
                <Divider />
                <Projects />
            </div>
        </>
    );
}
