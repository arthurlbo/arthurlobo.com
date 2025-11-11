"use client";

import { ComponentProps, ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IProps {
    children: ReactNode;
    themeConfig: ComponentProps<typeof NextThemesProvider>;
}

export function Providers({ children, themeConfig }: IProps) {
    return <NextThemesProvider {...themeConfig}>{children}</NextThemesProvider>;
}
