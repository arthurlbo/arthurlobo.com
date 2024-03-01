import Link from "next/link";

import { IconTargetArrow } from "@tabler/icons-react";

import { cn } from "@/utils/cn";
import { TechnologiesMap } from "@/utils/constants";

import { TechnologiesWrapper } from "@/components/ui";

export interface ExperienceCardProps {
    jobTitle: string;
    company: string;
    companyLink: string;
    location: string;
    duration: string;
    achievements?: string[];
    technologies?: TechnologiesMap[];
    pointClassName?: string;
}

export const ExperienceCard = ({
    jobTitle,
    company,
    companyLink,
    location,
    duration,
    achievements,
    technologies,
    pointClassName,
}: ExperienceCardProps) => {
    return (
        <div className="relative flex h-full w-full flex-col items-start gap-12 rounded-2xl border border-hover p-5 md:p-10 md:pt-7">
            <div className="flex w-full flex-col items-start gap-7">
                <h1 className="text-xl font-semibold italic text-primary">{jobTitle}</h1>
                <div className="flex w-full flex-col items-start gap-5 md:flex-row md:items-center">
                    <Link
                        href={companyLink}
                        target="_blank"
                        className="rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-4 focus:ring-offset-background"
                    >
                        <h2 className="text-base font-normal text-primary underline transition-all duration-300 ease-in-out hover:text-primary/80">
                            {company}
                        </h2>
                    </Link>
                    <div className="h-px w-full flex-none bg-hover md:h-5 md:w-px" />
                    <h3 className="text-base font-normal text-secondary">{location}</h3>
                    <div className="h-px w-full flex-none bg-hover md:h-5 md:w-px" />
                    <h4 className="text-base font-normal text-secondary">{duration}</h4>
                </div>
            </div>
            {achievements && (
                <div className="flex w-full flex-col items-start gap-7">
                    <div className="flex w-full items-center gap-2">
                        <IconTargetArrow className="h-5 w-5 text-primary" />
                        <h1 className="text-lg font-medium text-primary">Achievements</h1>
                    </div>

                    <ul className="flex flex-col items-start gap-5">
                        {achievements?.map((achievement, index) => (
                            <li key={index} className="text-base font-normal text-secondary">
                                • {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {technologies && <TechnologiesWrapper technologies={technologies} />}
            <div className="absolute -left-[30px] top-1/2 z-50 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#212024] shadow-sm md:-left-[58px]">
                <div className={cn("h-[10px] w-[10px] rounded-full border border-hover", pointClassName)} />
            </div>
        </div>
    );
};
