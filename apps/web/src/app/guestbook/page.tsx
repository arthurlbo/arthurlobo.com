import { Metadata } from "next";

import { InfoState } from "@/shared/components/info-state";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Guestbook",
};

export default function Guestbook() {
    return (
        <InfoState
            emoji="📝"
            title="Almost There..."
            description="Creating a space for visitors to leave their mark. Soon you'll be able to sign the guestbook and share your thoughts!"
            descriptionClassName="max-w-lg"
        />
    );
}
