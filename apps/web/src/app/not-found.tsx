import { InfoState } from "@/shared/components/info-state";

export const dynamic = "force-static";

export default function NotFound() {
    return (
        <InfoState
            emoji="🔍"
            title="Page Not Found"
            description="The page you're looking for doesn't exist or has been moved."
            descriptionClassName="max-w-xs"
        />
    );
}
