"use client";

import { ILinkButtonProps } from "@/shared/components/ui";
import { IconBook2, IconBriefcase2, IconClipboardText, IconSchool, IconStack2 } from "@tabler/icons-react";

// Navigation links for the About section.
export const ABOUT_NAVIGATION_LINKS: ILinkButtonProps[] = [
    {
        label: "Intro",
        icon: IconBook2,
        link: "/about",
    },
    {
        label: "Career",
        icon: IconBriefcase2,
        link: "/about/career",
        splitPosition: 2,
    },
    {
        label: "Stack",
        icon: IconStack2,
        link: "/about/stack",
        splitPosition: 2,
    },
    {
        label: "Education",
        icon: IconSchool,
        link: "/about/education",
        splitPosition: 2,
    },
    {
        label: "Resume",
        icon: IconClipboardText,
        link: "https://docs.google.com/document/d/1gdMNLA2DkTZf6NAV7RQcHhNT5uTDuEEQuHdKjag4SMs/edit?usp=sharing",
        internalLink: false,
    },
];
