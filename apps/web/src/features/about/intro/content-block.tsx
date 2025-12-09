import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

export interface IContentBlockProps {
    title: string;
    description: string;
    number: string;
    icon: TablerIcon;
    side: "right" | "left";
}

export const ContentBlock = ({ description, number, side, title, icon: Icon }: IContentBlockProps) => {
    return (
        <article
            className={cn(
                "group relative flex w-full items-start justify-start gap-4",
                side === "right" ? "xl:flex-row" : "xl:flex-row-reverse",
            )}
        >
            <div
                className={cn(
                    "text-surface-700/30 absolute -top-8 -z-1 text-9xl font-bold opacity-0",
                    "transition-all duration-300 ease-in-out group-hover:opacity-100",
                    side === "right" ? "-left-4" : "-right-4",
                )}
            >
                {number}
            </div>

            <div
                className={cn(
                    "bg-surface-700/70 text-primary-100 flex h-10 w-10 items-center justify-center rounded-lg border border-transparent",
                    "group-hover:bg-surface-700 group-hover:border-accent-500 transition-all duration-300 ease-in-out group-hover:-translate-y-1",
                )}
            >
                <Icon className="h-5 w-5" />
            </div>

            <div
                className={cn(
                    "flex w-full max-w-2|xl flex-col justify-center gap-4",
                    side === "right" ? "items-start text-start" : "items-end text-end",
                )}
            >
                <div className={cn("flex items-center gap-3", side === "right" ? "flex-row" : "flex-row-reverse")}>
                    <span className="text-primary-300 font-mono text-sm font-bold">{number}</span>
                    <h1 className="text-primary-100 text-3xl font-semibold">{title}</h1>
                </div>

                <p className="text-primary-200 text-base leading-8 font-normal">{description}</p>
            </div>
        </article>
    );
};
