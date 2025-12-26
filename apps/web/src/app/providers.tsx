"use client";

import { ComponentProps, ReactNode } from "react";

import { TIME } from "@/shared/constants";
import { AppProgressProvider } from "@bprogress/next";
import { Toaster } from "@repo/design-system/components";
import { ThemeProvider } from "next-themes";

interface IProps {
    children: ReactNode;
    themeConfig: ComponentProps<typeof ThemeProvider>;
}

/**
 * Providers component to wrap the application with necessary providers.
 * @param children - Wrapped application.
 * @param themeConfig - Theme configuration for NextThemesProvider.
 */
export function Providers({ children, themeConfig }: IProps) {
    return (
        <ThemeProvider {...themeConfig}>
            <AppProgressProvider
                height="2px"
                options={{ showSpinner: false }}
                color="var(--primary-100)"
                shallowRouting
            >
                {children}
                <Toaster position="top-center" duration={TIME.fiveSeconds} />
            </AppProgressProvider>
        </ThemeProvider>
    );
}
