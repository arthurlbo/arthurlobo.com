import "./globals.css";

import { ReactNode } from "react";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "./_providers";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-plus_jakarta_sans",
});

export const metadata: Metadata = {
    title: {
        default: "Full-stack Monorepo Template",
        template: "%s | FSM Template",
    },
    description: "A modern Full-stack monorepo template to kickstart your web development.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${plusJakartaSans.variable} bg-background relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden font-sans antialiased`}
            >
                <Providers
                    themeConfig={{
                        attribute: "class",
                        enableSystem: true,
                        defaultTheme: "system",
                    }}
                >
                    {children}
                </Providers>
            </body>
        </html>
    );
}
