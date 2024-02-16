import { SocialButtonProps } from "@/components/ui";
import { NavLinkProps } from "@/components/header/nav-link";

import { IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export const socialLinks: SocialButtonProps[] = [
    {
        icon: IconBrandInstagram,
        href: "https://www.instagram.com/arthur.lbo",
    },
    {
        icon: IconBrandGithub,
        href: "https://github.com/arthurlbo",
    },
    {
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/in/arthurlbo/",
    },
    {
        icon: IconBrandGmail,
        href: "mailto:arthurlbo16@gmail.com",
    },
];

export const navLinks: NavLinkProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
