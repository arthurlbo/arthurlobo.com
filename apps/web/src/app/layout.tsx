import "./globals.css";

import { ReactNode } from "react";

import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import { SEO_CONFIG } from "@/shared/constants/seo";

import { Providers } from "./_providers";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm_plex_sans",
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
                className={`${ibmPlexSans.variable} bg-background relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden font-sans antialiased`}
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
