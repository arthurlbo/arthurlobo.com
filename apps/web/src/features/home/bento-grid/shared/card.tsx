import { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/shared/utils";
import { IconArrowUpRight } from "@tabler/icons-react";

interface IProps {
    link: string;
    children: ReactNode;
    className?: string;
}

// TODO - Wave animation like projects card
export const Card = ({ children, link, className }: IProps) => {
    return (
        <Link
            href={link}
            className={cn(
                "border-border group relative flex h-full w-full cursor-pointer items-start justify-between gap-4 overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out",
                className,
            )}
        >
            {children}

            <div className="absolute right-0 bottom-0 z-50 flex w-[300px] items-end justify-end p-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                <div className="to-accent-primary/20 absolute inset-0 bg-linear-to-br from-transparent blur-2xl" />

                <div className="border-border bg-background text-text-primary relative flex h-10 w-10 items-center justify-center rounded-full border">
                    <IconArrowUpRight className="h-5 w-5 rotate-90 transition-all duration-500 ease-in-out group-hover:rotate-0" />
                </div>
            </div>
        </Link>
    );
};
