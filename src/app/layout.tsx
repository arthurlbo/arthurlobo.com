import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import { Header } from "@/components/header";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-plus_jakarta_sans",
});

export const metadata = {
    title: "Arthur Lobo | Portfolio",
    description: "Arthur Lobo's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${plusJakartaSans.variable} relative flex min-h-screen w-full max-w-screen flex-col items-center justify-center overflow-x-hidden bg-background font-sans`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
