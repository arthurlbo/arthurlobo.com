import { IconType } from "@/lib/iconType";

interface TitleProps {
    title: string;
    label: string;
    icon: IconType;
}

export const Title = ({ title, label, icon: Icon }: TitleProps) => {
    return (
        <div className="flex w-full flex-col items-start md:items-center lg:items-start gap-3">
            <div className="flex items-center gap-1 text-secondary">
                <Icon className="h-4 w-4" />
                <h2 className="text-sm font-bold leading-tight">{label}</h2>
            </div>
            <h1 className="text-4xl font-semibold text-primary">{title}</h1>
        </div>
    );
};
