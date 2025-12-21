import { cn } from "@/shared/utils";

export interface IEventProps {
    title: string;
    date: string;
    side: "left" | "right";
    className: string;
}

/**
 * Component to display an event milestone on a vertical timeline.
 *
 * @property title - Display text for the event milestone.
 * @property date - Temporal information (date range, year, or specific date).
 * @property side - Determines horizontal positioning relative to the vertical timeline.
 * @property className - Optional Tailwind classes for fine-tuning position or appearance.
 */
export const Event = ({ className, date, side, title }: IEventProps) => {
    return (
        <div
            className={cn(
                "border-surface-500 absolute z-20 flex flex-col items-start justify-start gap-0.5 rounded-lg border bg-transparent px-3 py-1.5 text-xs",
                "group-hover:border-accent-500 transition-all duration-500 group-hover:-translate-y-5",
                "after:bg-surface-500 group-hover:after:bg-accent-500 transition-all duration-500 after:absolute after:top-1/2 after:z-30 after:h-px after:w-4 after:translate-y-1/2 after:content-['']",
                side === "left" ? "right-1/2 mr-5 after:-right-4" : "left-1/2 ml-5 after:-left-4",
                className,
            )}
        >
            <span className="text-primary-200 font-bold">{title}</span>
            <span className="text-primary-100 line-clamp-1 w-[100px] font-normal lg:w-20 xl:w-[100px]">{date}</span>
        </div>
    );
};
