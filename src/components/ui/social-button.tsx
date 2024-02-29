import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/cn";
import { IconType } from "@/lib/iconType";

export interface SocialButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof socialButtonVariants>,
        VariantProps<typeof iconVariants> {
    icon: IconType;
    href: string;
}

const socialButtonVariants = cva(
    "flex items-center justify-center rounded-full border border-hover animate-shimmer hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:bg-[length:200%_100%] hover:border-slate-800 hover:shadow-lg hover:shadow-accent/30",
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

export const SocialButton = ({ icon: Icon, href, size, iconSize }: SocialButtonProps) => {
    return (
        <Link href={href} target="_blank" className={cn(socialButtonVariants({ size }))}>
            <Icon className={cn(iconVariants({ iconSize }))} />
        </Link>
    );
};
