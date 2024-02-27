import Image, { StaticImageData } from "next/image";

import { TechnologiesMap } from "@/utils/constants";
import { CtaButtons, TechnologiesWrapper } from "../ui";

export interface ProjectProps {
    title: string;
    description: string[];
    link: string;
    repository: string;
    image: StaticImageData;
    technologies: TechnologiesMap[];
}

export const Project = ({ description, image, link, repository, technologies, title }: ProjectProps) => {
    return (
        <div className="flex w-full flex-col items-start gap-24 border-b border-b-hover pb-24">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-full flex-col items-start gap-12">
                    <h1 className="text-3xl font-semibold text-primary">{title}</h1>
                    <div className="flex flex-col items-start gap-6 max-w-[519px]">
                        {description.map((desc, index) => (
                            <p key={index} className="text-base font-normal text-secondary">
                                {desc}
                            </p>
                        ))}
                    </div>
                    <CtaButtons
                        primary={{ label: "See on live", link }}
                        secondary={{ label: "Repository", link: repository }}
                    />
                </div>
                <Image src={image} alt={title} priority width={584} height={416} />
            </div>
            <TechnologiesWrapper technologies={technologies} />
        </div>
    );
};
