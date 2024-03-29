import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import { Header } from "@/components";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-plus_jakarta_sans",
});

export const metadata = {
    title: "Arthur Lobo | Portfolio",
    description:
        "Arthur Lobo's portfolio, a Frontend developer based in Brazil, specializing in engineering exceptional user experiences across different devices. With focus on React and TypeScript, transforming ideas into high-performance web apps.",
    keywords:
        "Arthur Lobo, Frontend Developer, React, TypeScript, Portfolio, Next 14, Frontend Engineer, Developer portfolio, Framer motion, Web portfolio, Frontend portfolio, Web developer portfolio, Web developer, Frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="scrollbar scrollbar-track-[#424242] scrollbar-thumb-[#686868] scrollbar-w-2 hover:scrollbar-thumb-[#7b7b7b] active:scrollbar-thumb-[#7b7b7b]"
        >
            <body
                className={`
                    ${plusJakartaSans.variable}
                    relative
                    flex
                    min-h-screen
                    w-full
                    max-w-[100vw]
                    flex-col
                    items-center
                    justify-center
                    overflow-x-hidden
                    bg-background
                    font-sans
                    selection:bg-accent
                `}
            >
                <Header />
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
