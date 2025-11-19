import "./globals.css";

import { ReactNode } from "react";

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Desktop, Mobile } from "@/shared/components/navigation";
import { SEO_CONFIG } from "@/shared/constants";

import { Providers } from "./_providers";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm-plex-mono",
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
                className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} bg-background relative flex h-screen w-full max-w-screen flex-col items-center justify-center overflow-x-hidden overflow-y-auto font-sans antialiased`}
            >
                <Providers
                    themeConfig={{
                        attribute: "class",
                        enableSystem: true,
                        defaultTheme: "dark",
                    }}
                >
                    <Desktop />
                    <Mobile />

                    <main className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-x-hidden p-4 xl:max-w-[calc(100vw-280px)] xl:self-end">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
