import Image, { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";
import { TechnologiesMap } from "@/utils/constants";

import { CtaButtons, TechnologiesWrapper } from "@/components/ui";

export interface ProjectProps {
    title: string;
    description: string[];
    link: string;
    repository: string;
    image: StaticImageData;
    technologies: TechnologiesMap[];
    beamClassName: string;
}

export const Project = ({ description, image, link, repository, technologies, title, beamClassName }: ProjectProps) => {
    return (
        <div className="relative flex w-full cursor-grab flex-col items-start gap-12 rounded-2xl border border-hover p-5 pt-2 md:p-12 md:pt-9 xl:gap-8 2xl:gap-0">
            <span
                className={cn(
                    "absolute -top-px z-40 h-full w-full animate-beam rounded-full before:absolute before:h-px before:w-24 before:bg-gradient-to-r before:content-['']",
                    beamClassName,
                )}
            />
            <div className="flex w-full flex-col-reverse items-center justify-between gap-6 xl:flex-row xl:items-start xl:gap-0">
                <div className="flex w-full flex-col items-start gap-14">
                    <div className="flex w-full flex-col items-start gap-10">
                        <h1 className="text-3xl font-semibold leading-none text-primary">{title}</h1>
                        <div className="flex flex-col items-start gap-5 xl:max-w-[600px]">
                            {description.map((desc, index) => (
                                <p key={index} className="text-base font-normal text-secondary">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                    <CtaButtons
                        primary={{ label: "View project on live", link }}
                        secondary={{ label: "Repository", link: repository }}
                    />
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={650}
                    className="h-auto w-[600px] 2xl:w-[650px]"
                    loading="lazy"
                    placeholder="blur"
                />
            </div>
            <TechnologiesWrapper technologies={technologies} />
            <span className="static bottom-5 right-5 self-end text-xs font-semibold text-secondary md:absolute lg:hidden">
                Swipe to the next ...
            </span>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-2xl" />
        </div>
    );
};
