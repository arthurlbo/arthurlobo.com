import { Metadata } from "next";

import { Heading } from "@/shared/components/ui";

import { DashboardContributions, DashboardWeekly } from "@/features/dashboard";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function Dashboard() {
    return (
        <>
            <Heading
                title="Dashboard"
                description="Track my development activity through live data. View coding time, language preferences, and contributions that showcase my daily commitment to building."
            />

            <DashboardWeekly />

            <DashboardContributions />
        </>
    );
}
