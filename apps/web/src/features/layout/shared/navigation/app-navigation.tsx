"use client";

import { NavigationLink } from "@/shared/components/ui";
import { APP_NAVIGATION_LINKS } from "@/shared/constants";

export const AppNavigation = () => {
    return (
        <div className="flex w-full flex-col items-start gap-1">
            {APP_NAVIGATION_LINKS.map((item) => (
                <NavigationLink key={item.link} {...item} />
            ))}
        </div>
    );
};
