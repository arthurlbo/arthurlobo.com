import { cn } from "@/shared/utils";

interface IProps {
    title: string;
    description: string;
    className?: string;
}

export const Heading = ({ className, description, title }: IProps) => {
    return (
        <div
            className={cn(
                "z-10 flex h-full w-full max-w-3xs shrink-0 flex-col items-start justify-start gap-1 p-4",
                className,
            )}
        >
            <span className="text-text-tertiary font-mono text-sm">{title}</span>
            <p className="text-text-primary text-base font-semibold">{description}</p>
        </div>
    );
};
