"use client";

import { Dispatch, useEffect, useRef, useState } from "react";

import { motion, useAnimation } from "framer-motion";

interface CellProps {
    rowIdx: number;
    colIdx: number;
    clickedCell: number[] | null;
    setClickedCell: Dispatch<number[] | null>;
}

const Cell = ({ rowIdx, colIdx, clickedCell, setClickedCell }: CellProps) => {
    const controls = useAnimation();

    useEffect(() => {
        if (clickedCell) {
            const distance = Math.sqrt(Math.pow(clickedCell[0] - rowIdx, 2) + Math.pow(clickedCell[1] - colIdx, 2));
            controls.start({
                opacity: [0, 1 - distance * 0.1, 0],
                transition: { duration: distance * 0.2 },
            });
        }
    }, [clickedCell]);

    return (
        <div className="border-b border-l border-hover bg-transparent" onClick={() => setClickedCell([rowIdx, colIdx])}>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileHover={{
                    opacity: [0, 1, 0.5],
                }}
                transition={{
                    duration: 0.5,
                    ease: "backOut",
                }}
                animate={controls}
                className="h-12 w-12 bg-accent/50"
            />
        </div>
    );
};

const Pattern = () => {
    const [clickedCell, setClickedCell] = useState<number[] | null>(null);

    const x = new Array(47).fill(0);
    const y = new Array(30).fill(0);

    const matrix = x.map((_, i) => y.map((_, j) => [i, j]));

    return (
        <div
            className="relative z-30 flex flex-row opacity-[0.3]"
            style={{ clipPath: "polygon(1% 0, 100% 0, 100% 100%)" }}
        >
            {matrix.map((row, rowIdx) => (
                <div key={`matrix-row-${rowIdx}`} className="relative z-20 flex flex-col border-b">
                    {row.map((_, colIdx) => (
                        <Cell
                            key={`matrix-col-${colIdx}`}
                            rowIdx={rowIdx}
                            colIdx={colIdx}
                            clickedCell={clickedCell}
                            setClickedCell={setClickedCell}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export const BackgroundCellCore = () => {
    const [_, setMousePosition] = useState({ x: 0, y: 0 });

    const ref = useRef<any>(null);

    const handleMouseMove = (event: any) => {
        const rect = ref.current && ref.current.getBoundingClientRect();

        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return (
        <div ref={ref} onMouseMove={handleMouseMove} className="absolute inset-0 h-[135%]">
            <div className="absolute inset-y-0 -right-28 -top-28 h-full w-[110%] overflow-hidden">
                <Pattern />
            </div>
        </div>
    );
};
