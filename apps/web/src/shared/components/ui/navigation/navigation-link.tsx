"use client";

import Link from "next/link";

import { useIsActiveRoute } from "@/shared/hooks";
import { TablerIcon } from "@tabler/icons-react";
import { VariantProps, cva } from "class-variance-authority";

type TNavigationLinkVariantsProps = VariantProps<typeof navigationLinkVariants>;

export interface INavigationLinkProps extends TNavigationLinkVariantsProps {
    label: string;
    icon: TablerIcon;
    link: string;
    disabled?: boolean;
    splitPosition?: number;
    internalLink?: boolean;
    hasNestedRoutes?: boolean;
}

const navigationLinkVariants = cva(
    `
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-primary-300
        transition-all
        duration-300
        ease-in-out
        hover:text-primary-100
        data-[state=active]:font-semibold
        data-[state=active]:bg-accent-500
        data-[state=active]:text-accent-text
    `,
    {
        variants: {
            variant: {
                button: `
                    h-9
                    w-full
                    px-3
                    py-2
                    rounded-lg
                    bg-transparent
                `,
                tab: "h-auto w-auto px-4 py-2 rounded-full",
            },
            disabled: {
                true: "cursor-not-allowed opacity-80 hover:bg-transparent hover:text-primary-300",
                false: "",
            },
        },
        defaultVariants: {
            variant: "button",
            disabled: false,
        },
    },
);

export const NavigationLink = ({
    link,
    label,
    variant,
    icon: Icon,
    splitPosition,
    hasNestedRoutes,
    disabled = false,
    internalLink = true,
}: INavigationLinkProps) => {
    const isActiveRoute = useIsActiveRoute({ route: link, splitPosition, hasNestedRoutes });

    return (
        <Link
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            href={disabled ? "" : link}
            target={internalLink ? "_self" : "_blank"}
            rel={internalLink ? undefined : "noopener noreferrer"}
            data-state={isActiveRoute && internalLink ? "active" : "inactive"}
            className={navigationLinkVariants({ variant, disabled })}
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </Link>
    );
};
