import * as React from "react";

import { cn } from "@/shared/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { Spinner } from "@/components/spiner";

interface IProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

const buttonVariants = cva(
    `
        flex
        h-10
        items-center
        justify-center
        rounded-lg
        text-sm
        font-semibold
        whitespace-nowrap
        cursor-pointer
        transition-all
        duration-300
        ease-in-out
        disabled:opacity-80
        disabled:cursor-not-allowed
        [&_svg]:pointer-events-none
        [&_svg]:shrink-0
        outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2
        focus-visible:ring-accent-500
        focus-visible:ring-offset-background
        aria-invalid:ring-destructive
        dark:aria-invalid:ring-destructive
        aria-invalid:border-destructive
    `,
    {
        variants: {
            variant: {
                default: "w-full gap-2 px-4 bg-accent-500 text-accent-text hover:bg-accent-400",
                icon: "w-10 border shrink-0 text-primary-100 [&_svg]:size-4 border-surface-500 bg-transparent hover:border-accent-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

const Button = ({ className, variant, children, asChild = false, disabled, isLoading = false, ...props }: IProps) => {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, className }))}
            {...props}
            disabled={disabled || isLoading}
        >
            {isLoading ? <Spinner /> : children}
        </Comp>
    );
};

export { Button, buttonVariants };
