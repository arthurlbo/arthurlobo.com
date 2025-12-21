import Image from "next/image";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { TProject as IProps } from "./constants";

/**
 * Card to display my projects.
 * @param title - Project title.
 * @param link - Project link.
 * @param image - Project image.
 * @param description - Project description.
 * @param technologies - Technologies used in the project.
 */
export const Card = ({ description, image, title, link, technologies }: IProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background group-hover:border-accent-500 z-10 flex h-full w-full flex-col items-start justify-start gap-6 overflow-hidden rounded-xl border border-transparent p-4 transition-all duration-500 ease-in-out"
        >
            <div className="border-surface-500 bg-surface-700 relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                <Image src={image} alt={title} quality={100} placeholder="blur" width={20} height={20} />
            </div>

            <div className="relative z-10 flex w-full flex-col items-start gap-2">
                <h1 className="text-primary-100 text-xl font-bold">{title}</h1>
                <span className="text-primary-200 text-sm font-normal">{description}</span>
            </div>

            <div className="relative z-10 flex w-full flex-wrap items-start justify-start gap-2">
                {technologies.map((tech) => (
                    <div
                        key={tech}
                        className="border-surface-500 bg-surface-700 flex items-center justify-center rounded-full border px-2 py-0.5"
                    >
                        <span className="text-primary-300 text-xs font-medium">{tech}</span>
                    </div>
                ))}
            </div>

            <div className="text-primary-100 relative z-10 flex items-center gap-1">
                <span className="text-sm font-semibold">Learn more</span>
                <IconArrowRight className="size-4 transition-all duration-500 ease-in-out group-hover:translate-x-0.5" />
            </div>
        </Link>
    );
};
