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
        <div className="relative flex h-full w-full flex-col items-start gap-12 rounded-2xl border border-hover p-12">
            <div className="flex w-full flex-col items-start gap-7">
                <h1 className="text-xl font-semibold italic text-primary">{jobTitle}</h1>
                <div className="flex items-center gap-5">
                    <Link href={companyLink} target="_blank">
                        <h2 className="text-base font-normal text-primary underline hover:text-primary/80 transition-all duration-300 ease-in-out">{company}</h2>
                    </Link>
                    <div className="h-5 w-px flex-none bg-hover" />
                    <h3 className="text-base font-normal text-secondary">{location}</h3>
                    <div className="h-5 w-px flex-none bg-hover" />
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
            <div className="absolute -left-[56px] top-1/2 flex h-4 w-4 z-50 -translate-y-1/2 items-center justify-center rounded-full border border-[#212024] shadow-sm">
                <div className={cn("h-2 w-2 rounded-full border border-hover", pointClassName)} />
            </div>
        </div>
    );
};