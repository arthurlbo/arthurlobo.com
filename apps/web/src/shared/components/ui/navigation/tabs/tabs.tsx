"use client";

import { cn } from "@/shared/utils";

import { ILinkButtonProps, LinkButton } from "../link-button";

interface INavigationTabsProps {
    links: ILinkButtonProps[];
    className?: string;
}

/**
 * Container component for navigation tabs.
 * @param links - Array of navigation link properties.
 * @param className -  Additional Tailwind CSS classes.
 */
export const NavigationTabs = ({ className, links }: INavigationTabsProps) => {
    return (
        <section
            className={cn(
                "flex w-full max-w-full shrink-0 items-center justify-start gap-3 py-1",
                "scrollbar-thin overflow-x-auto",
                className,
            )}
        >
            {links.map((item) => (
                <LinkButton key={item.link} {...item} variant="tab" />
            ))}
        </section>
    );
};
