import { About, Career, Footer, Hero, MovingTechs, Projects } from "@/components";

export default function Home() {
    return (
        <>
            <Hero />
            <MovingTechs />
            <div className="flex w-full flex-col items-start gap-5 px-5 pb-5 pt-5 xl:gap-28 xl:px-28 xl:pb-12 xl:pt-28">
                <About />
                <Career />
                <Projects />
                <Footer />
            </div>
        </>
    );
}
