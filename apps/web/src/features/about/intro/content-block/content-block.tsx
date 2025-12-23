import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

export interface IAboutContentBlockProps {
    title: string;
    description: string;
    number: string;
    icon: TablerIcon;
    side: "right" | "left";
}

/**
 * Component to display an informational content block about me.
 *
 * @param title - The main heading of the content block.
 * @param description - Detailed text content for the block.
 * @param number - Numeric identifier displayed as both visible label and background decoration.
 * @param icon - TablerIcon component to render inside the card.
 * @param side - Controls horizontal alignment and flex direction ("right" or "left").
 */
export const AboutContentBlock = ({ description, number, side, title, icon: Icon }: IAboutContentBlockProps) => {
    return (
        <article
            className={cn(
                "group relative flex w-full flex-col justify-start gap-4",
                side === "right" ? "items-start xl:flex-row" : "items-end xl:flex-row-reverse xl:items-start",
            )}
        >
            <div
                className={cn(
                    "text-surface-700/50 absolute -top-8 -z-1 text-9xl font-bold opacity-0",
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
                <Icon className="size-5" />
            </div>

            <div
                className={cn(
                    "flex w-full max-w-2xl flex-col justify-center gap-4",
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
