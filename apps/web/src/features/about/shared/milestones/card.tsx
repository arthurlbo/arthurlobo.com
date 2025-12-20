import { Fragment } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { cn } from "@/shared/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@repo/design-system/components";

type TOrganization = {
    name: string;
    link: string;
    logo: StaticImageData;
};

export interface IMilestoneCardProps {
    value: string;
    title: string;
    organization: TOrganization;
    tags: string[];
    period: string;
    totalTime?: string;
    location: string;
    impacts?: string[];
}

const Bullet = ({ className }: { className?: string }) => <span className={className}>•</span>;

export const MilestoneCard = ({
    title,
    value,
    location,
    tags,
    period,
    organization,
    totalTime,
    impacts = [],
}: IMilestoneCardProps) => {
    const { name, logo, link } = organization;

    const hasImpacts = impacts.length > 0;

    return (
        <AccordionItem
            value={value}
            className={cn(
                "border-surface-500 group bg-surface-700/30 flex w-full flex-col items-start justify-start gap-4 rounded-2xl border p-4 last:border-b",
                "transition-all duration-300 ease-in-out",
                hasImpacts && "hover:border-accent-500",
            )}
        >
            <AccordionTrigger
                showIcon={hasImpacts}
                className="flex w-full cursor-pointer flex-col items-start justify-start gap-4 p-0 md:flex-row"
            >
                <div className="bg-primary-100 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg p-1">
                    <Image
                        src={logo}
                        alt={name}
                        placeholder="blur"
                        quality={100}
                        className="h-full w-full rounded-sm object-contain"
                    />
                </div>

                <div className="text-primary-200 flex w-full flex-col items-start justify-start gap-2 text-sm font-normal">
                    <span className="text-primary-100 text-lg font-bold">{title}</span>

                    <div className="flex flex-wrap items-start justify-start gap-2 md:flex-row md:items-center">
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-300 transition-all duration-300 ease-in-out group-hover:underline"
                        >
                            {name}
                        </Link>

                        <Bullet />

                        {tags.map((tag) => (
                            <Fragment key={tag}>
                                <span>{tag}</span>
                                <Bullet className="last:hidden" />
                            </Fragment>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-start justify-start gap-2 md:flex-row md:items-center">
                        <span>{period}</span>

                        <Bullet />

                        {totalTime && (
                            <>
                                <span>{totalTime}</span>
                                <Bullet />
                            </>
                        )}

                        <span>{location}</span>
                    </div>
                </div>
            </AccordionTrigger>

            {hasImpacts && (
                <AccordionContent className="flex h-full w-full flex-col gap-4">
                    <div className="bg-surface-500 h-px w-full shrink-0" />

                    {impacts.map((impact, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <Bullet />
                            <span className="text-primary-200 text-sm font-normal">{impact}</span>
                        </div>
                    ))}
                </AccordionContent>
            )}
        </AccordionItem>
    );
};
