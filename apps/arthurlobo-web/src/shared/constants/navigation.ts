"use client";

import { ILinkButtonProps } from "@/shared/components/ui";
import {
    IconAddressBook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconChartLine,
    IconHome,
    IconMessageCircle,
    IconPalette,
    IconUser,
} from "@tabler/icons-react";

export const APP_NAVIGATION_LINKS: ILinkButtonProps[] = [
    {
        label: "Home",
        icon: IconHome,
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

export const SOCIAL_NAVIGATION_LINKS: ILinkButtonProps[] = [
    {
        label: "LinkedIn",
        icon: IconBrandLinkedin,
        link: "https://www.linkedin.com/in/arthurlbo",
        internalLink: false,
    },
    {
        label: "Github",
        icon: IconBrandGithub,
        link: "https://www.github.com/arthurlbo",
        internalLink: false,
    },
    {
        label: "Instagram",
        icon: IconBrandInstagram,
        link: "https://www.instagram.com/arthur.lbo",
        internalLink: false,
    },
];
