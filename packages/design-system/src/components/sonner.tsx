"use client";
import * as React from "react";

import {
    IconAlertSquareRounded,
    IconInfoSquareRounded,
    IconLoader2,
    IconSquareRoundedCheck,
    IconSquareRoundedX,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps, toast } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "dark" } = useTheme();

    return (
        <Sonner
            className="toaster group"
            theme={theme as ToasterProps["theme"]}
            icons={{
                success: <IconSquareRoundedCheck className="size-4" />,
                info: <IconInfoSquareRounded className="size-4" />,
                warning: <IconAlertSquareRounded className="size-4" />,
                error: <IconSquareRoundedX className="size-4" />,
                loading: <IconLoader2 className="size-4 animate-spin" />,
            }}
            style={
                {
                    "--z-index": "9999",
                    "--normal-bg": "color-mix(in srgb, var(--accent-500) 50%, transparent)",
                    "--normal-text": "var(--text-primary-100)",
                    "--normal-border": "var(--accent-500)",
                    "--border-radius": "var(--radius)",
                } as React.CSSProperties
            }
            toastOptions={{
                style: {
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                },
            }}
            {...props}
        />
    );
};

export { Toaster, toast };
