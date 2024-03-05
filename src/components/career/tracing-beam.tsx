"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { motion, useTransform, useScroll, useVelocity, useSpring, useAnimation } from "framer-motion";

interface TracingBeamProps {
    children: ReactNode;
}

/**
 * Tracing beam component.
 * @param children - The children to render.
 * @param className - The class name to apply.
 */
export const TracingBeam = ({ children }: TracingBeamProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // track velocity of scroll to increase or decrease distance between svg gradient y coordinates.
    const scrollYProgressVelocity = useVelocity(scrollYProgress);
    const [_, setVelocity] = useState(0);

    const contentRef = useRef<HTMLDivElement | null>(null);

    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setSvgHeight(contentRef.current.offsetHeight);
            }
        };

        window.addEventListener("resize", handleResize);

        // Call the function directly to update the height on first render
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        return scrollYProgressVelocity.on("change", (latestVelocity) => {
            setVelocity(latestVelocity);
        });
    }, []);

    const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
        stiffness: 500,
        damping: 90,
    });

    const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
        stiffness: 500,
        damping: 90,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <motion.div data-testid="career-tracing-beam" ref={ref} className="relative h-full w-full flex-none">
            <div className="absolute">
                <svg
                    viewBox={`0 0 20 ${svgHeight + 5}`}
                    width="20"
                    height={svgHeight + 5} // Set the SVG height
                    className="block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 0 0 V ${svgHeight + 5}`}
                        fill="none"
                        stroke="#212024"
                        animate={controls}
                        initial={{ scaleY: 0, originY: 0 }}
                        transition={{ duration: 4 }}
                        variants={{
                            hidden: { scaleY: 0 },
                            visible: { scaleY: 1 },
                        }}
                    ></motion.path>
                    <motion.path
                        d={`M 0 0 V ${svgHeight + 5}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.25"
                        className="motion-reduce:hidden"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.path>
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1} // set y1 for gradient
                            y2={y2} // set y2 for gradient
                        >
                            <stop stopColor="#6344F5" stopOpacity="0"></stop>
                            <stop stopColor="#7200CF"></stop>
                            <stop offset="0.325" stopColor="#6344F5"></stop>
                            <stop offset="1" stopColor="#7200CF" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};
