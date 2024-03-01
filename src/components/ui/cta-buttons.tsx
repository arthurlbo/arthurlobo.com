import Link from "next/link";

import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

export interface ButtonProps {
    label: string;
    link: string;
}

export interface CtaButtonsProps {
    primary: ButtonProps;
    secondary: ButtonProps;
}

export const CtaButtons = ({ primary, secondary }: CtaButtonsProps) => {
    return (
        <div className="z-50 flex w-full flex-col items-center gap-5 md:w-auto md:flex-row">
            <Link href={primary.link} target="_blank" tabIndex={-1} className="w-full">
                <button
                    className="
                        group
                        flex
                        w-full
                        animate-shimmer
                        items-center
                        justify-center
                        gap-8
                        rounded-full
                        border
                        border-hover
                        py-3
                        pl-9
                        pr-3
                        text-primary
                        hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
                        hover:bg-[length:200%_100%]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent/70
                        focus:ring-offset-2
                        focus:ring-offset-background
                        md:w-auto
                        md:justify-between
                    "
                >
                    <span className="text-sm font-semibold">{primary.label}</span>
                    <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-hover transition-all duration-500 ease-in-out group-hover:rotate-[320deg] group-hover:scale-110">
                        <IconArrowRight className="h-4 w-4" />
                    </div>
                </button>
            </Link>
            <Link href={secondary.link} target="_blank" tabIndex={-1}>
                <button
                    className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        text-secondary
                        transition-all
                        duration-300
                        ease-in-out
                        hover:text-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent/70
                        focus:ring-offset-4
                        focus:ring-offset-background
                        focus:duration-0
                        md:w-auto
                    "
                >
                    <span className="text-sm font-semibold">{secondary.label}</span>
                    <IconBrandGithub className="h-4 w-4" />
                </button>
            </Link>
        </div>
    );
};
