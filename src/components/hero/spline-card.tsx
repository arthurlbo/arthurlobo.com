"use client";

import { lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

/**
 * Spline card displayed on the hero section.
 */
export const SplineCard = () => {
    return (
        <Spline
            data-testid="spline-card"
            scene="https://prod.spline.design/MSgY-ONgcJQOjUxU/scene.splinecode"
            className="min-h-[600px] lg:min-h-0 xl:-mt-10 massive:-mt-0"
        />
    );
};
