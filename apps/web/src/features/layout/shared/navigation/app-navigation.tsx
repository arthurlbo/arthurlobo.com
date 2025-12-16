"use client";

import { INavigationLinkProps, NavigationLink } from "@/shared/components/ui";
import {
    IconAddressBook,
    IconChartLine,
    IconHome2,
    IconMessageCircle,
    IconPalette,
    IconUser,
} from "@tabler/icons-react";

export const APP_NAVIGATION_LINKS: INavigationLinkProps[] = [
    {
        label: "Home",
        icon: IconHome2,
        link: "/",
    },
    {
        label: "About",
        icon: IconUser,
        link: "/about",
        hasNestedRoutes: true,
    },
    {
        label: "Projects",
        icon: IconPalette,
        link: "/projects",
    },
    {
        label: "Dashboard",
        icon: IconChartLine,
        link: "/dashboard",
    },
    {
        label: "Contact",
        icon: IconMessageCircle,
        link: "/contact",
    },
    {
        label: "Guestbook",
        icon: IconAddressBook,
        link: "/guestbook",
    },
];

export const AppNavigation = () => {
    return (
        <div className="flex w-full flex-col items-start gap-1">
            {APP_NAVIGATION_LINKS.map((item) => (
                <NavigationLink key={item.link} {...item} />
            ))}
        </div>
    );
};
