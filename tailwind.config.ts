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
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                move: {
                    "0%": { transform: "translate(0, 0)" },
                    "25%": { transform: "translate(-200px, 20px)" },
                    "50%": { transform: "translate(-210px, 50px)" },
                    "75%": { transform: "translate(-50px, 80px)" },
                    "100%": { transform: "translate(0, 0)" },
                },
                "infinity-card": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-1000%)" },
                },
                "infinity-card-lg": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-200%)" },
                },
                beam: {
                    "0%": {
                        left: "0",
                        opacity: "0",
                    },
                    "25%": {
                        opacity: "0.5",
                    },
                    "50%": {
                        opacity: "0.8",
                    },
                    "75%": {
                        opacity: "0.5",
                    },
                    "100%": {
                        opacity: "0",
                        left: "100%",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: "shimmer 2s linear infinite",
                move: "move 5s ease-in-out",
                "infinity-card": "infinity-card 80s forwards linear infinite",
                "infinity-card-lg": "infinity-card-lg 80s forwards linear infinite",
                beam: "beam 4s linear infinite",
            },
            colors: {
                background: "#000000",
                hover: "#212024",
                primary: "#F2F2F2",
                secondary: "#8F9BA8",
                accent: "#7200CF",
                complementary: "#6344F5",
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
