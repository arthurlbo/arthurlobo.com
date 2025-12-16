import { Metadata } from "next";

import { AboutStack } from "@/features/about";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Stack",
};

export default function Stack() {
    return <AboutStack />;
}
