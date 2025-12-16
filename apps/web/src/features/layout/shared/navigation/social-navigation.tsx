"use client";

import { INavigationLinkProps, NavigationLink } from "@/shared/components/ui";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export const SOCIAL_NAVIGATION_LINKS: INavigationLinkProps[] = [
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
