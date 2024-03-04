import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";

import { IconType } from "@/lib/iconType";

interface TitleProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof titleVariants> {
    title: string;
    label: string;
    icon: IconType;
}

/**
 * Style variants for the title component, used to align the title.
 */
const titleVariants = cva("flex w-full flex-col gap-3", {
    variants: {
        align: {
            start: "items-start",
            center: "items-start lg:items-center",
        },
    },
    defaultVariants: {
        align: "start",
    },
});

/**
 * Title component used in the sections.
 * @param title - Title of the section.
 * @param label - Label of the section.
 * @param icon - Icon of the section.
 * @param align - Alignment of the title.
 */
export const Title = ({ title, label, icon: Icon, align }: TitleProps) => {
    return (
        <div className={cn(titleVariants({ align }))}>
            <div className="flex items-center gap-1 text-secondary">
                <Icon className="h-4 w-4" />
                <h2 className="text-sm font-bold leading-tight">{label}</h2>
            </div>

            <h1 className="text-4xl font-semibold text-primary">{title}</h1>
        </div>
    );
};
