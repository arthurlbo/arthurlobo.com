"use client";

import { ReactNode, useEffect, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { useMedia } from "@/utils";

interface ContainerProps {
    children: ReactNode;
}

/**
 * Container component that wraps the header of the website to make the sticky animation.
 * @param children - Header content.
 */
export const Container = ({ children }: ContainerProps) => {
    const desktopHeader = useMedia("(min-width: 1399px)", false);
    const massiveHeader = useMedia("(min-width: 1600px)", false);

    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();
    const scrollControl = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        scrollControl.on("change", (v) => setIsScrolled(v > 0.1));
    }, [scrollControl]);

    const animate = isScrolled && desktopHeader;

    return (
        <motion.header
            className={`
                fixed
                left-1/2
                top-0
                z-[9999]
                flex
                h-[70px]
                w-full
                max-w-[100vw]
                -translate-x-1/2
                items-center
                justify-between
                border-b
                border-hover
                bg-background/90
                xl:h-[90px]
                ${animate ? "top-6 rounded-full border px-5" : "px-5 xl:border-b-0 xl:px-28 xl:pb-0"}
            `}
            initial={{ width: "100%" }}
            animate={{ width: animate ? (massiveHeader ? "50%" : "60%") : "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {children}
        </motion.header>
    );
};
