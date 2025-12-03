"use client";

import * as React from "react";

import { cn } from "@/shared/utils";
import { IconSearch } from "@tabler/icons-react";
import { Command as CommandPrimitive } from "cmdk";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/dialog";

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
    return (
        <CommandPrimitive
            data-slot="command"
            className={cn(
                "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
                className,
            )}
            {...props}
        />
    );
}

function CommandDialog({
    children,
    className,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}) {
    return (
        <Dialog {...props}>
            <DialogContent className={cn("overflow-hidden p-0", className)} showCloseButton={showCloseButton}>
                <DialogTitle className="hidden" />
                <DialogDescription className="hidden" />

                <Command className="bg-background text-text-primary">{children}</Command>
            </DialogContent>
        </Dialog>
    );
}

function CommandInput({
    className,
    containerClassName,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Input> & { containerClassName?: string }) {
    return (
        <div
            data-slot="command-input-wrapper"
            className={cn("flex h-10 items-center gap-2 border-b px-3 [&_svg]:size-4", containerClassName)}
        >
            <IconSearch className="shrink-0" />

            <CommandPrimitive.Input
                data-slot="command-input"
                className={cn(
                    "placeholder:text-text-tertiary flex h-full flex-1 rounded-lg bg-transparent py-3 text-sm outline-hidden outline-0 focus:outline-0 focus:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                )}
                {...props}
            />
        </div>
    );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
    return (
        <CommandPrimitive.List
            data-slot="command-list"
            className={cn("max-h-[400px] scroll-py-1 overflow-x-hidden overflow-y-auto", className)}
            {...props}
        />
    );
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
    return <CommandPrimitive.Empty data-slot="command-empty" className="py-6 text-center text-sm" {...props} />;
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
    return <CommandPrimitive.Group data-slot="command-group" className={cn(className)} {...props} />;
}

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
    return (
        <CommandPrimitive.Separator
            data-slot="command-separator"
            className={cn("bg-border -mx-1 h-px", className)}
            {...props}
        />
    );
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
    return <CommandPrimitive.Item data-slot="command-item" className={cn(className)} {...props} />;
}

function CommandShortcut({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="command-shortcut"
            className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
            {...props}
        />
    );
}

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
