import * as React from "react";

import { cn } from "@/shared/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 h-10 w-full px-4 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-primary focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-primary-400 text-text-100 hover:bg-primary-300",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border border-surface-400 bg-transparent hover:bg-surface-300 text-text-100",
                secondary: "bg-accent-400 text-text-100 hover:bg-accent-300",
                ghost: "hover:bg-primary-400 text-text-100",
                link: "text-text-100 underline-offset-4 hover:underline",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

function Button({
    className,
    variant,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return <Comp data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />;
}

export { Button, buttonVariants };
