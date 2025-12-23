"use client";

import { ComponentProps, ReactNode } from "react";

import { TIME } from "@/shared/constants";
import { Toaster } from "@repo/design-system/components";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IProps {
    children: ReactNode;
    themeConfig: ComponentProps<typeof NextThemesProvider>;
}

/**
 * Providers component to wrap the application with necessary providers.
 * @param children - Wrapped application.
 * @param themeConfig - Theme configuration for NextThemesProvider.
 */
export function Providers({ children, themeConfig }: IProps) {
    return (
        <NextThemesProvider {...themeConfig}>
            {children}
            <Toaster position="top-center" duration={TIME.fiveSeconds} />
        </NextThemesProvider>
    );
}
