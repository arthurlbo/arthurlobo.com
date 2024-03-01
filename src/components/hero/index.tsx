import Link from "next/link";
import Image from "next/image";

import { IconChevronDown } from "@tabler/icons-react";

import { SplineCard } from "./spline-card";

import FigmaBorder from "@/assets/figma-border.svg";
import FigmaIndicator from "@/assets/figma-indicator.svg";

export const Hero = () => {
    return (
        <section className="mt-[70px] flex h-auto min-h-[calc(100vh-70px)] w-full max-w-[100vw] flex-col items-center justify-between overflow-hidden px-5 py-5 lg:h-[calc(100vh-90px)] lg:flex-row lg:justify-between lg:py-0 xl:mt-[90px] xl:min-h-0 xl:px-28">
            <div className="flex h-full w-full flex-none flex-col items-center justify-center gap-16 md:max-w-2xl lg:items-start  xl:gap-20 2xl:max-w-[700px] massive:max-w-4xl">
                <div className="flex flex-col items-center gap-5 lg:items-start">
                    <span className="text-base font-normal text-secondary">Hello there! I'm Arthur👋</span>
                    <h1 className="text-center text-[2.2rem] font-semibold leading-normal text-primary md:text-[2.7rem] md:leading-snug lg:text-start  2xl:text-[3rem] massive:text-[3.75rem]">
                        A Frontend Developer{" "}
                        <span className="group relative p-2">
                            obsessed
                            <Image
                                tabIndex={0}
                                src={FigmaIndicator}
                                alt="Figma Indicator"
                                className="absolute -right-[20%] -top-[6%] w-[40px] group-hover:animate-move focus:animate-move focus:outline-none focus:ring-0 focus:ring-offset-0 md:w-[45px] massive:w-[50px]"
                            />
                            <Image
                                src={FigmaBorder}
                                alt="Figma Border"
                                className="absolute bottom-0.5 right-0 w-[245px] md:bottom-px massive:w-[300px]"
                            />
                        </span>{" "}
                        with delivering exceptional web experiences
                    </h1>
                </div>
                <Link
                    href="#about"
                    className="
                        hidden
                        items-center
                        gap-1
                        rounded-lg
                        text-secondary
                        transition-all
                        duration-300
                        ease-in-out
                        hover:-translate-y-0.5
                        hover:text-secondary/80
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent/70
                        focus:ring-offset-4
                        focus:ring-offset-background
                        focus:duration-0
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
