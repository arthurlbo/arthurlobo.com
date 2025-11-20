"use server";

import { headers } from "next/headers";
import Link from "next/link";

import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

export interface INavLinkProps {
    label: string;
    icon: TablerIcon;
    link: string;
    disabled?: boolean;
    internalLink?: boolean;
}

export const NavLink = async ({ link, label, icon: Icon, internalLink = true, disabled = false }: INavLinkProps) => {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "";

    const isActive = link === pathname;

    return (
        <Link
            href={disabled ? "" : link}
            target={internalLink ? "_self" : "_blank"}
            rel={internalLink ? undefined : "noopener noreferrer"}
            tabIndex={disabled ? -1 : 0}
            className={cn(
                "flex h-9 w-full items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm",
                "focus-visible:ring-accent-primary focus-visible:ring-offset-background transition-all duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isActive
                    ? "bg-surface text-text-primary border-border font-semibold"
                    : "hover:text-text-primary text-text-tertiary bg-transparent font-medium",
                disabled && "hover:text-text-tertiary cursor-not-allowed opacity-50",
            )}
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </Link>
    );
};
