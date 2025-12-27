import { ElementType } from "react";

import { cn } from "@/shared/utils";
import { DeveloperIconProps } from "developer-icons/dist/icon";

interface IProps {
    icon: ElementType<DeveloperIconProps>;
    className?: string;
}

/**
 * Icon component that displays a developer icon within a styled circular container.
 *
 * @param Icon - The developer icon component to be rendered.
 * @param className - Additional Tailwind CSS classes for customization.
 */
export const Icon = ({ className, icon: Icon }: IProps) => {
    return (
        <div
            className={cn(
                "border-surface-500 bg-surface-700/50 text-primary-100 z-20 flex h-7 w-7 items-center justify-center rounded-full border p-1 transition-all duration-700 ease-in-out group-hover:rotate-360",
                className,
            )}
        >
            <Icon className="h-full w-full" />
        </div>
    );
};
