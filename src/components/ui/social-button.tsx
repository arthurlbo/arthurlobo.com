import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";
import { IconType } from "@/lib/iconType";

export interface SocialButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof socialButtonVariants>,
        VariantProps<typeof iconVariants> {
    icon: IconType;
    href: string;
    section?: string;
}

/**
 * Style variants for the social button.
 */
const socialButtonVariants = cva(
    "flex items-center justify-center rounded-full border border-hover animate-shimmer hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:bg-[length:200%_100%] hover:border-slate-800 hover:shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-2 focus:ring-offset-hover/80",
    {
        variants: {
            size: {
                small: "h-11 w-11",
                big: "h-12 w-12",
            },
        },
        defaultVariants: {
            size: "small",
        },
    },
);

/**
 * Style variants for the social button icon.
 */
const iconVariants = cva("text-primary", {
    variants: {
        iconSize: {
            small: "h-5 w-5",
            big: "h-6 w-6",
        },
    },
    defaultVariants: {
        iconSize: "small",
    },
});

/**
 * Social button component used to display social media links.
 * @param icon - Icon of the social media.
 * @param href - Href of the social media.
 * @param size - Size of the social button.
 * @param iconSize - Size of the social button icon.
 */
export const SocialButton = ({ icon: Icon, href, size, iconSize, section }: SocialButtonProps) => {
    return (
        <Link
            data-testid={`social-button-${section}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn(socialButtonVariants({ size }))}
        >
            <Icon className={cn(iconVariants({ iconSize }))} />
        </Link>
    );
};
