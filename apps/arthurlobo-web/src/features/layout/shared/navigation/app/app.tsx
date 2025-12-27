"use client";

import { LinkButton } from "@/shared/components/ui";
import { APP_NAVIGATION_LINKS } from "@/shared/constants";

/**
 * Main application navigation component.
 */
export const AppNavigation = () => {
    return (
        <div className="flex w-full flex-col items-start gap-1">
            {APP_NAVIGATION_LINKS.map((item) => (
                <LinkButton key={item.link} {...item} />
            ))}
        </div>
    );
};
