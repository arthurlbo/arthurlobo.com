"use client";

import { ReactNode } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";

interface MenuProps {
    children: ReactNode;
}

const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
};

const navigationVariants = {
    open: { opacity: 1, scaleY: 1 },
    closed: { opacity: 0, scaleY: 0 },
};

/**
 * Menu component.
 */
export const Menu = ({ children }: MenuProps) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const path01Controls = useAnimation();
    const path02Controls = useAnimation();

    const onClick = async () => {
        toggleOpen();

        if (!isOpen) {
            await path02Controls.start(path02Variants.moving);
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
        } else {
            path01Controls.start(path01Variants.closed);
            await path02Controls.start(path02Variants.moving);
            path02Controls.start(path02Variants.closed);
        }
    };

    return (
        <>
            <motion.button
                data-testid="mobile-menu-button"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hover xl:hidden"
                onClick={onClick}
            >
                {/* Animated icon */}
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <motion.path
                        {...path01Variants.closed}
                        animate={path01Controls}
                        transition={{ duration: 0.3 }}
                        strokeWidth="1.5"
                        className="rounded-full stroke-primary"
                    />
                    <motion.path
                        {...path02Variants.closed}
                        animate={path02Controls}
                        transition={{ duration: 0.3 }}
                        strokeWidth="1.5"
                        className="rounded-full stroke-primary"
                    />
                </svg>
            </motion.button>

            {/* Menu content */}
            <motion.div
                className="absolute left-0 top-[70px] z-50 flex h-[calc(100vh-70px)] w-full flex-col items-center justify-between bg-background/95 p-8 xl:hidden"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={navigationVariants}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                style={{ transformOrigin: "top" }}
            >
                {children}
            </motion.div>
        </>
    );
};
