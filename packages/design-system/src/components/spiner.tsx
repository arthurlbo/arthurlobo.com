import * as React from "react";

import { cn } from "@/shared/utils";
import { IconLoader2 } from "@tabler/icons-react";

interface IProps {
    className?: string;
}

export const Spinner = ({ className }: IProps) => {
    return <IconLoader2 role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} />;
};
