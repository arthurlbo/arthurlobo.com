import "./globals.css";

import { ReactNode } from "react";

import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";

import { SEO_CONFIG } from "@/shared/constants";

import { Desktop, Mobile } from "@/features/layout";

import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export const metadata: Metadata = {
    title: {
        default: SEO_CONFIG.title,
        template: "%s | Arthur Lobo",
    },
    description: SEO_CONFIG.description,
    metadataBase: new URL(SEO_CONFIG.url),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: SEO_CONFIG.title,
        description: SEO_CONFIG.description,
        url: SEO_CONFIG.url,
        siteName: SEO_CONFIG.name,
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    creator: SEO_CONFIG.name,
    authors: [{ name: SEO_CONFIG.name, url: SEO_CONFIG.url }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${spaceGrotesk.variable} ${spaceMono.variable} bg-background flex h-full min-h-screen w-full items-start justify-center overflow-x-hidden font-sans antialiased`}
            >
                <Providers
                    themeConfig={{
                        attribute: "class",
                        defaultTheme: "dark",
                        enableSystem: false,
                    }}
                >
                    <main className="relative flex h-full w-full max-w-[1536px] flex-col items-start justify-start xl:flex-row">
                        <Desktop />
                        <Mobile />

                        <div className="mt-[72px] flex h-full w-full flex-col gap-4 p-4 xl:mt-0">{children}</div>
                    </main>
                </Providers>
            </body>
        </html>
    );
}
