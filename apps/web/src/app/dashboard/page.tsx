import { Metadata } from "next";

import { InfoState } from "@/shared/components/info-state";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function Dashboard() {
    return (
        <InfoState
            emoji="📊"
            title="Almost There..."
            description="Building a dashboard featuring WakaTime coding stats and GitHub activity. Check back soon for live metrics!"
        />
    );
}
