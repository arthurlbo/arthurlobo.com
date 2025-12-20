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
            description="Working on a dashboard to share coding stats and metrics. Check back soon to see what I've been working on!"
            descriptionClassName="max-w-[480px]"
        />
    );
}
