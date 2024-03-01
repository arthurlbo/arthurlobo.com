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
        <div className="relative flex w-full flex-col items-start gap-12 rounded-2xl border border-hover p-12">
            <span
                className={cn(
                    "absolute -top-px z-40 h-full w-full animate-beam rounded-full before:absolute before:h-px before:w-24 before:bg-gradient-to-r before:content-['']",
                    beamClassName,
                )}
            />
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col items-start gap-12">
                    <h1 className="text-3xl font-semibold text-primary">{title}</h1>
                    <div className="flex max-w-xl flex-col items-start gap-6">
                        {description.map((desc, index) => (
                            <p key={index} className="text-base font-normal text-secondary">
                                {desc}
                            </p>
                        ))}
                    </div>
                    <CtaButtons
                        primary={{ label: "View project on live", link }}
                        secondary={{ label: "Repository", link: repository }}
                    />
                </div>
                <Image src={image} alt={title} width={650} className="h-auto" loading="lazy" placeholder="blur" />
            </div>
            <TechnologiesWrapper technologies={technologies} />
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-2xl" />
        </div>
    );
};
