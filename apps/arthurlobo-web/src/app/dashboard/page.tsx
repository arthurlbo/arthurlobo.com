import { Suspense } from "react";

import { Metadata } from "next";

import { Heading } from "@/shared/components/ui";
import { Skeleton } from "@repo/design-system/components";

import { DashboardContribution, DashboardTimeStats } from "@/features/dashboard";

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day (60 * 60 * 24)

export const metadata: Metadata = {
    title: "Dashboard",
};

export default async function Dashboard() {
    return (
        <>
            <Heading
                title="Dashboard"
                description="Track my development activity through live data. View coding time, language preferences, and contributions that showcase my daily commitment to building."
            />

            <Suspense fallback={<Skeleton className="h-[341px] rounded-2xl" />}>
                <DashboardTimeStats />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-[412px] rounded-2xl" />}>
                <DashboardContribution />
            </Suspense>
        </>
    );
}
