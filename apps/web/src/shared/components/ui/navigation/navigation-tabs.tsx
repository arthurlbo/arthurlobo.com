"use client";

import { cn } from "@/shared/utils";

import { INavigationLinkProps, NavigationLink } from "./navigation-link";

interface INavigationTabsProps {
    links: INavigationLinkProps[];
    className?: string;
}

export const NavigationTabs = ({ className, links }: INavigationTabsProps) => {
    return (
        <section
            className={cn(
                "flex w-full max-w-full shrink-0 items-center justify-start gap-3",
                "scrollbar-thin overflow-x-auto overflow-y-hidden",
                className,
            )}
        >
            {links.map((item) => (
                <NavigationLink key={item.link} {...item} variant="tab" />
            ))}
        </section>
    );
};
