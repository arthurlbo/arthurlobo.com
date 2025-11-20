"use client";

import { cn } from "@/shared/utils";
import { Button } from "@repo/design-system/components";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const THEME_BUTTONS = [
    {
        value: "light",
        icon: IconSun,
    },
    {
        value: "system",
        icon: IconDeviceDesktop,
    },
    {
        value: "dark",
        icon: IconMoon,
    },
];

export const Theme = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <span className="text-text-tertiary px-4 font-mono text-xs font-semibold">Config</span>

            <div className="flex h-9 w-full items-center justify-between gap-4 px-3 py-2">
                <span className="text-text-tertiary font-medium">Theme</span>

                <div className="border-border flex items-center gap-1 rounded-full border p-0.5">
                    {THEME_BUTTONS.map(({ value, icon: Icon }) => {
                        const isActive = (theme || "system") === value;

                        return (
                            <Button
                                key={value}
                                className={cn(
                                    "h-auto w-auto cursor-pointer rounded-full border bg-transparent p-[3px] hover:bg-transparent",
                                    isActive
                                        ? "border-border text-text-primary"
                                        : "text-text-tertiary hover:text-text-primary border-transparent",
                                )}
                                onClick={() => setTheme(value)}
                            >
                                <Icon className="h-4 w-4" />
                            </Button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
