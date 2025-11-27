import { ElementType } from "react";

import { cn } from "@/shared/utils";
import { DeveloperIconProps } from "developer-icons/dist/icon";

export interface IIconProps {
    className: string;
    icon: ElementType<DeveloperIconProps>;
}

export const Icon = ({ className, icon: Icon }: IIconProps) => {
    return (
        <div
            className={cn(
                "border-border bg-surface absolute z-20 flex h-8 w-8 items-center justify-center rounded-full border p-1.5 transition-all duration-500 ease-in-out group-hover:scale-[115%]",
                className,
            )}
        >
            <Icon className="h-full w-full" />
        </div>
    );
};
