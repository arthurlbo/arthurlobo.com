import * as React from "react";

import { cn } from "@/shared/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-primary-300 border-surface-500 h-11 w-full min-w-0 rounded-lg border bg-transparent px-3 text-sm transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                "aria-invalid:border-destructive",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
