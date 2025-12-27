"use client";

import { useState } from "react";

import { ChartContainer, TChartConfig } from "@repo/design-system/components";
import { Area, AreaChart, ReferenceDot, XAxis } from "recharts";

const defaultChartData = [
    { label: "Jan", value: 70 },
    { label: "Feb", value: 82 },
    { label: "Mar", value: 65 },
    { label: "Apr", value: 95 },
    { label: "May", value: 68 },
    { label: "Jun", value: 110 },
    { label: "Jul", value: 85 },
];

const hoverChartData = [
    { label: "Jan", value: 90 },
    { label: "Feb", value: 70 },
    { label: "Mar", value: 65 },
    { label: "Apr", value: 95 },
    { label: "May", value: 110 },
    { label: "Jun", value: 85 },
    { label: "Jul", value: 120 },
];

const chartConfig: TChartConfig = {
    value: {
        label: "Mock",
        color: "var(--chart-7)",
    },
};

/**
 * Interactive area chart component for the dashboard card.
 */
export function Chart() {
    const [chartData, setChartData] = useState(defaultChartData);
    const highlightData = defaultChartData[3];

    const handleMouseEnter = () => {
        setChartData(hoverChartData);
    };

    const handleMouseLeave = () => {
        setChartData(defaultChartData);
    };

    return (
        <div
            className="absolute bottom-0 left-0 z-50 h-[80%] w-full md:h-full lg:h-[80%] xl:h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-testid="dashboard-chart"
        >
            <ChartContainer id="dashboard-chart-container" config={chartConfig}>
                <AreaChart
                    tabIndex={-1}
                    accessibilityLayer
                    data={chartData}
                    margin={{ left: -4 }}
                    style={{ cursor: "pointer" }}
                >
                    <defs>
                        <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="label" hide />

                    <Area
                        dataKey="value"
                        type="natural"
                        fill="url(#fillValue)"
                        fillOpacity={0.4}
                        stroke="var(--color-value)"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive
                    />

                    <ReferenceDot
                        r={6}
                        x={highlightData!.label}
                        y={highlightData!.value}
                        fill="var(--color-value)"
                        stroke="white"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
}
