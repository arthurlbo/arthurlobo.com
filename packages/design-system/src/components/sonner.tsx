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
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
                success: <IconSquareRoundedCheck className="size-4" />,
                info: <IconInfoSquareRounded className="size-4" />,
                warning: <IconAlertSquareRounded className="size-4" />,
                error: <IconSquareRoundedX className="size-4" />,
                loading: <IconLoader2 className="size-4 animate-spin" />,
            }}
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                    "--border-radius": "var(--radius)",
                } as React.CSSProperties
            }
            {...props}
        />
    );
};

export { Toaster, toast };
