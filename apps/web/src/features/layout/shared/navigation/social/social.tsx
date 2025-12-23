"use client";

import { LinkButton } from "@/shared/components/ui";
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
                    <LinkButton key={item.link} {...item} />
                ))}
            </div>
        </>
    );
};
