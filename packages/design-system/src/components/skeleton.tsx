import React, { HTMLAttributes } from "react";

import { cn } from "@/shared/utils";

export const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn("bg-surface-500 h-full w-full animate-pulse rounded-2xl", className)} {...props} />;
};
