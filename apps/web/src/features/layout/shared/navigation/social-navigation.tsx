"use client";

import { NavigationLink } from "@/shared/components/ui";
import { SOCIAL_NAVIGATION_LINKS } from "@/shared/constants";

/**
 * Social navigation component.
 */
export const SocialNavigation = () => {
    return (
        <>
            <span className="text-primary-300 px-4 font-mono text-xs font-semibold">Social</span>

            <div className="flex w-full flex-col items-start gap-1">
                {SOCIAL_NAVIGATION_LINKS.map((item) => (
                    <NavigationLink key={item.link} {...item} />
                ))}
            </div>
        </>
    );
};
