import Link from "next/link";
import Image from "next/image";

import { IconChevronDown } from "@tabler/icons-react";

import { SplineCard } from "./ui";

import FigmaBorder from "@/assets/figma-border.svg";
import FigmaIndicator from "@/assets/figma-indicator.svg";

export const Hero = () => {
    return (
        <section className="flex h-auto w-full max-w-[100vw] flex-col items-center justify-start overflow-hidden px-5 py-5 lg:h-[calc(100vh-90px)] lg:flex-row lg:justify-between lg:py-0 xl:px-28">
            <div className="flex h-full w-full md:max-w-xl flex-none flex-col items-center justify-center gap-16 lg:items-start xl:gap-20 xl:max-w-2xl 2xl:max-w-[700px] massive:max-w-4xl">
                <div className="flex flex-col items-center gap-5 lg:items-start">
                    <span className="text-base font-normal text-secondary">Hello there! I'm Arthur👋</span>
                    <h1 className="text-center text-[2.2rem] md:text-[2.5rem] font-semibold leading-normal md:leading-snug text-primary lg:text-start xl:text-[2.7rem] 2xl:text-[3rem] massive:text-[3.75rem]">
                        A Frontend Developer{" "}
                        <span className="group relative p-2">
                            obsessed
                            <Image
                                src={FigmaIndicator}
                                alt="Figma Indicator"
                                className="absolute -right-[20%] -top-[6%] w-[40px] md:w-[45px] group-hover:animate-move massive:w-[50px]"
                            />
                            <Image
                                src={FigmaBorder}
                                alt="Figma Border"
                                className="absolute bottom-0.5 md:bottom-px right-0 w-[245px] massive:w-[300px]"
                            />
                        </span>{" "}
                        with delivering{" "}
                        <span className="relative after:content-[''] after:absolute after:md:-bottom-9 after:-bottom-5 after:left-0 after:w-full after:h-[18px] after:md:h-7 after:bg-[url(../assets/doodle.svg)] after:bg-cover">exceptional</span>{" "}
                        web experiences
                    </h1>
                </div>
                <Link
                    href="#about"
                    className="
                        hidden
                        items-center
                        gap-1
                        text-secondary
                        transition-all
                        duration-300
                        ease-in-out
                        hover:-translate-y-0.5
                        hover:text-secondary/80
                        lg:flex
                    "
                >
                    <span className="text-base font-normal">Know more about me</span>
                    <IconChevronDown className="mt-[3px] h-4 w-4" />
                </Link>
            </div>
            <SplineCard />
        </section>
    );
};
