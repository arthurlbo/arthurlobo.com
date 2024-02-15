import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            colors: {
                background: "#000000",
                hover: "#212024",
                primary: "#F2F2F2",
                secondary: "#8F9BA8",
                accent: "#7200CF",
                complementary: "#FF8E6F",
            },
            fontFamily: {
                sans: "var(--font-plus_jakarta_sans)",
            },
            screens: {
                tall: { raw: "((min-height: 850px))" },
                massive: { raw: "((min-width: 1600px))" },
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;

export default config;
