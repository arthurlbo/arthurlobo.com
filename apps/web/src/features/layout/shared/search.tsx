"use client";

import { Fragment, useEffect, useState } from "react";

import Link from "next/link";

import { cn } from "@/shared/utils";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@repo/design-system/components";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

import { APP_NAVIGATION_LINKS, SOCIAL_NAVIGATION_LINKS } from "./navigation";

const COMMAND_GROUPS = [
    {
        heading: "Pages",
        items: APP_NAVIGATION_LINKS,
    },
    {
        heading: "Socials",
        items: SOCIAL_NAVIGATION_LINKS,
    },
];

export const Search = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);

        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="border-border-400 hover:border-text-300 flex h-10 w-full shrink-0 cursor-pointer items-center justify-between gap-2 rounded-lg border px-3 transition-all duration-300 ease-in-out"
            >
                <IconSearch className="text-text-300 h-4 w-4 shrink-0" />

                <span className="text-text-200 flex-1 text-xs font-normal">Search something...</span>

                <kbd className="bg-surface-400 text-text-300 pointer-events-none inline-flex items-center rounded px-1 py-px font-mono text-[10px] font-semibold">
                    <span>CTRL + K</span>
                </kbd>
            </div>

            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                className="border-border-400 bg-background h-[400px] max-w-lg rounded-2xl"
            >
                <CommandInput
                    placeholder="Type a command or search..."
                    containerClassName="border-b border-border-400 h-14 [&_svg]:size-4 [&_svg]:text-text-300"
                />

                <CommandList className="h-full max-h-none px-2 pb-4">
                    <CommandEmpty>No results found.</CommandEmpty>

                    {COMMAND_GROUPS.map(({ heading, items }) => (
                        <Fragment key={heading}>
                            <CommandGroup
                                heading={heading}
                                className="**:[[cmdk-group-heading]]:text-text-300 mt-4 **:[[cmdk-group-heading]]:px-5 **:[[cmdk-group-heading]]:font-mono **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-bold"
                            >
                                {items.map(({ label, link, disabled = false, internalLink = true }) => (
                                    <CommandItem key={link} asChild>
                                        <Link
                                            href={disabled ? "" : link}
                                            target={internalLink ? "_self" : "_blank"}
                                            rel={internalLink ? undefined : "noopener noreferrer"}
                                            tabIndex={disabled ? -1 : 0}
                                            className={cn(
                                                "group flex w-full items-center gap-2 rounded-lg px-3 py-2 first:mt-2",
                                                "text-text-100 hover:bg-surface-400 hover:border-border-400 border border-transparent bg-transparent font-sans text-sm font-semibold",
                                                "transition-all duration-300 ease-in-out",
                                            )}
                                        >
                                            <IconArrowRight className="text-text-300 ease-in- h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5" />
                                            <span>{label}</span>
                                        </Link>
                                    </CommandItem>
                                ))}
                            </CommandGroup>

                            <CommandSeparator className="bg-surface-400 mt-2 last:hidden" />
                        </Fragment>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
};
