"use client";

import { lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const SplineCard = () => {
    return (
        <Spline
            scene="https://prod.spline.design/MSgY-ONgcJQOjUxU/scene.splinecode"
            className="min-h-[600px] lg:min-h-0 xl:-mt-10 massive:-mt-0"
        />
    );
};
