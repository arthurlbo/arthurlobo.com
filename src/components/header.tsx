import Link from "next/link";
import Image from "next/image";

import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandGmail } from "@tabler/icons-react";

import { NavLink, NavLinkProps, SocialButton, SocialButtonProps } from "./ui";

import LogoArthur from "@/assets/logo.svg";

const navLinks: NavLinkProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const socialLinks: SocialButtonProps[] = [
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

export const Header = () => {
    return (
        <div className="max-w-screen flex h-[90px] w-full items-center justify-between bg-transparent px-28">
            <Link href="/">
                <Image src={LogoArthur} alt="Logo Arthur Lobo" priority width={170} />
            </Link>

            <nav className="flex flex-1 items-center justify-center gap-8">
                {navLinks.map((link, key) => (
                    <NavLink key={key} {...link} />
                ))}
            </nav>

            <div className="flex items-center gap-3">
                {socialLinks.map((link, key) => (
                    <SocialButton key={key} {...link} />
                ))}
            </div>
        </div>
    );
};
