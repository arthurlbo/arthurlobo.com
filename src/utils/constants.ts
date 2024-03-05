import { SocialButtonProps } from "@/components";
import { NavLinkProps } from "@/components/header/nav-link";

import { IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

/**
 * List technologies that I use.
 */
export type TechnologiesMap =
    | "chrakraui"
    | "cypress"
    | "expo"
    | "express"
    | "fastify"
    | "figma"
    | "git"
    | "githubActions"
    | "i18next"
    | "jest"
    | "jwt"
    | "mailtrap"
    | "next"
    | "node"
    | "prisma"
    | "pwa"
    | "radix"
    | "reactHookForm"
    | "reactNative"
    | "reactQuery"
    | "react"
    | "redux"
    | "sentry"
    | "shadcn"
    | "sqlite"
    | "storybook"
    | "tailwind"
    | "typescript"
    | "vite"
    | "zod";

/**
 * My social links.
 */
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

/**
 * Nav links for the header.
 */
export const navLinks: NavLinkProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Career", href: "/#career" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];
