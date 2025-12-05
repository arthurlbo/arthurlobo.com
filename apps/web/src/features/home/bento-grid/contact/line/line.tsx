import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

import { Icon } from "./icon";
import { TPlacement } from "./types";

interface IProps {
    leftIcon: TablerIcon;
    rightIcon: TablerIcon;
    placement: TPlacement;
}

export const Line = ({ leftIcon, rightIcon, placement }: IProps) => {
    return (
        <div
            className={cn(
                "absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between",
                placement === "top" ? "-mt-8" : "mt-8",
            )}
        >
            <Icon icon={leftIcon} placement={placement} />

            <svg
                viewBox="0 0 198 33"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className={cn("h-24 w-full fill-none", placement === "top" ? "rotate-180" : "")}
            >
                <path
                    d="M0 16.5 Q 99 1, 198 16.5"
                    className="stroke group-hover:stroke-primary-400 stroke-border-400 fill-none transition-all duration-700 ease-in-out"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            <Icon icon={rightIcon} placement={placement} />
        </div>
    );
};
