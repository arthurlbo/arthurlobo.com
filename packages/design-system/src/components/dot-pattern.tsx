"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/shared/utils";

interface IDotPatternProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    dotSpacing?: number;
    dotRadius?: number;
}

export function DotPattern({ className, dotSpacing = 16, dotRadius = 1 }: IDotPatternProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radius = Math.min(centerX, centerY);

    const dots = [];

    if (dimensions.width > 0 && dimensions.height > 0) {
        const cols = Math.ceil(dimensions.width / dotSpacing);
        const rows = Math.ceil(dimensions.height / dotSpacing);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const dotX = col * dotSpacing + dotSpacing / 2;
                const dotY = row * dotSpacing + dotSpacing / 2;

                const dx = dotX - centerX;
                const dy = dotY - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= radius) {
                    const opacity = radius > 0 ? Math.max(0, 1 - distance / radius) : 1;
                    dots.push({ x: dotX, y: dotY, opacity });
                }
            }
        }
    }

    return (
        <div ref={containerRef} className={cn("pointer-events-none", className)}>
            <svg width={dimensions.width} height={dimensions.height} aria-hidden="true">
                {dots.map((dot) => (
                    <circle
                        key={`${dot.x}-${dot.y}`}
                        cx={dot.x}
                        cy={dot.y}
                        r={dotRadius}
                        fill="currentColor"
                        opacity={dot.opacity}
                    />
                ))}
            </svg>
        </div>
    );
}
