import { About, Career, Contact, Hero, MovingTechs, Projects } from "@/components";

export default function Home() {
    return (
        <>
            <Hero />
            <MovingTechs />
            <div className="flex w-full max-w-[100vw] flex-col items-start gap-12 overflow-hidden px-5 pb-12 pt-12 lg:gap-28 lg:pt-28 xl:px-28">
                <About />
                <Career />
                <Projects />
                <Contact />
            </div>
        </>
    );
}
