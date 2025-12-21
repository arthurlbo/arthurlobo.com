"use client";

import { useEffect, useState } from "react";

import { cn } from "@/shared/utils";
import { Button, Skeleton } from "@repo/design-system/components";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const THEME_BUTTONS = [
    {
        value: "light",
        icon: IconSun,
    },
    {
        value: "dark",
        icon: IconMoon,
    },
];

/**
 * Theme selection component.
 */
export const Theme = () => {
    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Skeleton className="h-[68px] shrink-0 rounded-md" />;
    }

    return (
        <>
            <span className="text-primary-300 px-4 font-mono text-xs font-semibold">Config</span>

            <div className="flex h-9 w-full items-center justify-between gap-4 px-3 py-2">
                <span className="text-primary-300 font-medium">Theme</span>

                <div className="border-surface-500 flex items-center gap-1 rounded-full border">
                    {THEME_BUTTONS.map(({ value, icon: Icon }) => {
                        const isActive = theme === value;

                        return (
                            <Button
                                key={value}
                                variant="icon"
                                className={cn(
                                    "h-auto w-auto rounded-full p-[3px]",
                                    isActive ? "hover:border-surface-500" : "text-primary-300 border-transparent",
                                )}
                                onClick={() => setTheme(value)}
                            >
                                <Icon />
                            </Button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
