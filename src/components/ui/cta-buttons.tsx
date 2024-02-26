import Link from "next/link";

import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

export interface ButtonProps {
    label: string;
    link: string;
}

export interface CtaButtonProps {
    primary: ButtonProps;
    secondary: ButtonProps;
}

export const CtaButton = ({ primary, secondary }: CtaButtonProps) => {
    return (
        <div className="flex w-full flex-col items-center gap-5 md:w-auto md:flex-row">
            <Link href={primary.link} target="_blank">
                <button className="group flex md:w-auto w-full items-center justify-between gap-8 rounded-full border border-hover py-3 pl-9 pr-3 text-primary animate-shimmer hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:bg-[length:200%_100%]">
                    <span className="text-sm font-semibold">{primary.label}</span>
                    <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-hover transition-all duration-500 ease-in-out group-hover:rotate-[320deg] group-hover:scale-110">
                        <IconArrowRight className="h-4 w-4" />
                    </div>
                </button>
            </Link>
            <Link href={secondary.link} target="_blank">
                <button className="flex items-center w-full md:w-auto justify-center gap-2 text-secondary transition-all duration-300 ease-in-out hover:text-primary">
                    <span className="text-sm font-semibold">{secondary.label}</span>
                    <IconBrandGithub className="h-4 w-4" />
                </button>
            </Link>
        </div>
    );
};
