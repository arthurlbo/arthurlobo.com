import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

import { TPlacement } from "../types";

interface IProps {
    icon: TablerIcon;
    placement: TPlacement;
}

/**
 * Displays an icon within a styled circular container, positioned based on the specified placement.
 *
 * @param placement - Determines whether the icon is placed at the "top" or "bottom".
 * @param Icon - The TablerIcon component to be rendered inside the container.
 */
export const Icon = ({ placement, icon: Icon }: IProps) => {
    return (
        <div
            className={cn(
                "border-surface-500 bg-surface-700/50 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border p-1.5",
                "group-hover:border-accent-500 transition-all duration-700 ease-in-out",
                placement === "top" ? "-mt-2" : "-mb-2",
            )}
        >
            <Icon className="h-full w-full" />
        </div>
    );
};
