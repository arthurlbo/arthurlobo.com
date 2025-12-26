import { Skeleton } from "@repo/design-system/components";

export default function Loading() {
    return (
        <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-[400px] rounded-xl" />
            ))}
        </div>
    );
}
