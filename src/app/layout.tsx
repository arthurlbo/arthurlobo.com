import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata = {
    title: "arthurlbo | Next TypeScript Template",
    description: "A simple Next template using Next, Typescript, Tailwind, Cypress and other tools!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden bg-background font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
