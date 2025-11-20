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

import { LINK_ITEMS } from "./links";
import { SOCIAL_LINKS } from "./social-links";

const COMMAND_GROUPS = [
    {
        heading: "Pages",
        items: LINK_ITEMS,
    },
    {
        heading: "Socials",
        items: SOCIAL_LINKS,
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
                className="border-surface hover:border-text-tertiary flex h-10 w-full shrink-0 cursor-pointer items-center justify-between gap-2 rounded-lg border px-3 transition-all duration-300 ease-in-out"
            >
                <IconSearch className="text-text-tertiary h-4 w-4 shrink-0" />

                <span className="text-text-secondary flex-1 text-xs font-normal">Search something...</span>

                <kbd className="bg-surface text-text-tertiary pointer-events-none inline-flex items-center rounded px-1 py-px font-mono text-[10px] font-semibold">
                    <span>CTRL + K</span>
                </kbd>
            </div>

            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                className="border-border bg-background h-[400px] max-w-lg rounded-2xl"
            >
                <CommandInput
                    placeholder="Type a command or search..."
                    containerClassName="border-b border-border h-14 [&_svg]:size-4 [&_svg]:text-text-tertiary"
                />

                <CommandList className="h-full max-h-none px-2 pb-4">
                    <CommandEmpty>No results found.</CommandEmpty>

                    {COMMAND_GROUPS.map(({ heading, items }) => (
                        <Fragment key={heading}>
                            <CommandGroup
                                heading={heading}
                                className="[&_[cmdk-group-heading]]:text-text-tertiary mt-4 [&_[cmdk-group-heading]]:px-5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold"
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
                                                "text-text-primary hover:bg-surface hover:border-border border border-transparent bg-transparent font-sans text-sm font-semibold",
                                                "focus-visible:ring-accent-primary focus-visible:ring-offset-background transition-all duration-300 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                            )}
                                        >
                                            <IconArrowRight className="text-text-tertiary transition-al ease-in- h-4 w-4 shrink-0 duration-300 group-hover:translate-x-0.5" />
                                            <span>{label}</span>
                                        </Link>
                                    </CommandItem>
                                ))}
                            </CommandGroup>

                            <CommandSeparator className="bg-surface mt-2 last:hidden" />
                        </Fragment>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
};
