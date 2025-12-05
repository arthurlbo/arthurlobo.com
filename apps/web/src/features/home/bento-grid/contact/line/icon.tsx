import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

import { TPlacement } from "./types";

interface IProps {
    icon: TablerIcon;
    placement: TPlacement;
}

export const Icon = ({ placement, icon: Icon }: IProps) => {
    return (
        <div
            className={cn(
                "border-border-400 bg-surface-400 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border p-1.5",
                "group-hover:border-primary-400 transition-all duration-700 ease-in-out",
                placement === "top" ? "-mt-2" : "-mb-2",
            )}
        >
            <Icon className="h-full w-full" />
        </div>
    );
};
