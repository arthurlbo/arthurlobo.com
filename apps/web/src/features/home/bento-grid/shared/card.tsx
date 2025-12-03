import { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/shared/utils";
import { IconArrowUpRight } from "@tabler/icons-react";

interface IProps {
    link: string;
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, link, className }: IProps) => {
    return (
        <Link
            href={link}
            className={cn(
                "border-border group relative flex h-[200px] w-full cursor-pointer items-start justify-between gap-4 overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out lg:h-full",
                className,
            )}
        >
            {children}

            <div className="border-border bg-background text-text-primary absolute right-4 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                <IconArrowUpRight className="h-5 w-5 rotate-90 transition-all duration-500 ease-in-out group-hover:rotate-0" />
            </div>
        </Link>
    );
};
