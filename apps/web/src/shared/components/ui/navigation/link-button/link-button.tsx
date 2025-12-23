"use client";

import { Activity } from "react";

import Link from "next/link";

import { useIsActiveRoute } from "@/shared/hooks";
import { TablerIcon } from "@tabler/icons-react";
import { VariantProps, cva } from "class-variance-authority";

type TLinkButtonVariantsProps = VariantProps<typeof linkButtonVariants>;

export interface ILinkButtonProps extends TLinkButtonVariantsProps {
    label: string;
    icon: TablerIcon;
    link: string;
    disabled?: boolean;
    splitPosition?: number;
    internalLink?: boolean;
    hasNestedRoutes?: boolean;
}

const linkButtonVariants = cva(
    `
        flex
        items-center
        gap-2
        text-sm
        font-medium
        transition-all
        duration-300
        ease-in-out
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
                    text-primary-300
                    hover:text-primary-100
                `,
                tab: "h-auto w-auto px-4 py-2 rounded-full text-primary-300 hover:text-primary-100",
                icon: "text-primary-100 hover:border-accent-500 h-10 w-10 border border-surface-500 rounded-lg justify-center",
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

/**
 * Link button component for navigation inside the application or external links.
 * @param link - URL to navigate to.
 * @param label - Label for the link.
 * @param variant - Style variant.
 * @param Icon - Icon component to display.
 * @param splitPosition - Position to split the route for active state checking.
 * @param hasNestedRoutes - Whether the route has nested routes.
 * @param disabled - Whether the link is disabled.
 * @param internalLink - Whether the link is internal or external.
 */
export const LinkButton = ({
    link,
    label,
    variant,
    icon: Icon,
    splitPosition,
    hasNestedRoutes,
    disabled = false,
    internalLink = true,
}: ILinkButtonProps) => {
    const isActiveRoute = useIsActiveRoute({ route: link, splitPosition, hasNestedRoutes });

    return (
        <Link
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            href={disabled ? "" : link}
            target={internalLink ? "_self" : "_blank"}
            rel={internalLink ? undefined : "noopener noreferrer"}
            data-state={isActiveRoute && internalLink ? "active" : "inactive"}
            className={linkButtonVariants({ variant, disabled })}
        >
            <Icon className="size-5" />

            <Activity mode={variant !== "icon" ? "visible" : "hidden"}>
                <span>{label}</span>
            </Activity>
        </Link>
    );
};
