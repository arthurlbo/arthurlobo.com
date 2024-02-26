import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

import { IconType } from "@/lib/iconType";

interface TitleProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof titleVariants> {
    title: string;
    label: string;
    icon: IconType;
}

const titleVariants = cva("flex w-full flex-col gap-3", {
    variants: {
        align: {
            start: "items-start md:items-center lg:items-start",
            center: "items-center",
        },
    },
    defaultVariants: {
        align: "start",
    },
});

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
