import { ElementType } from "react";

import { cn } from "@/shared/utils";
import { DeveloperIconProps } from "developer-icons/dist/icon";

export interface IIconProps {
    icon: ElementType<DeveloperIconProps>;
    className?: string;
}

export const Icon = ({ className, icon: Icon }: IIconProps) => {
    return (
        <div
            className={cn(
                "border-border bg-surface z-20 flex h-7 w-7 items-center justify-center rounded-full border p-1 transition-all duration-700 ease-in-out group-hover:rotate-[360deg]",
                className,
            )}
        >
            <Icon className="h-full w-full" />
        </div>
    );
};
