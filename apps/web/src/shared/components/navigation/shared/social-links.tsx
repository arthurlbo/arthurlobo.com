import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

import { INavLinkProps, NavLink } from "./nav-link";

export const SOCIAL_LINKS: INavLinkProps[] = [
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

export const SocialLinks = () => {
    return (
        <>
            <span className="text-text-tertiary px-4 font-mono text-xs font-semibold">Social</span>

            <div className="flex w-full flex-col items-start gap-1">
                {SOCIAL_LINKS.map((item) => (
                    <NavLink key={item.link} {...item} />
                ))}
            </div>
        </>
    );
};
