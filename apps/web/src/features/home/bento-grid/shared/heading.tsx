import { cn } from "@/shared/utils";

interface IProps {
    title: string;
    description: string;
    className?: string;
}

export const Heading = ({ className, description, title }: IProps) => {
    return (
        <div className={cn("flex w-full flex-col items-start justify-start gap-2", className)}>
            <span className="text-text-tertiary font-mono text-sm">{title}</span>
            <p className="text-text-primary text-base font-semibold">{description}</p>
        </div>
    );
};
