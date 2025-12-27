"use client";

import { Activity, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { Card } from "./card";

interface IProps {
    projects: TProject[];
}

/**
 * Container component for display project cards.
 */
export const ProjectsShowcase = ({ projects }: IProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="grid h-full w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
                <div
                    key={project.title}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    className="group relative flex h-full w-full items-center justify-center lg:p-2"
                >
                    <Activity mode={hoveredIndex === index ? "visible" : "hidden"}>
                        <AnimatePresence>
                            <motion.span
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.2 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.2, delay: 0.2 },
                                }}
                                className="bg-surface-700 absolute inset-0 block h-full w-full rounded-2xl"
                            />
                        </AnimatePresence>
                    </Activity>

                    <Card {...project} />
                </div>
            ))}
        </section>
    );
};
