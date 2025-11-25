import { cn } from "@/shared/utils";

export interface IEventProps {
    title: string;
    date: string;
    side: "left" | "right";
    className: string;
}

export const Event = ({ className, date, side, title }: IEventProps) => {
    return (
        <div
            className={cn(
                "border-border absolute z-20 flex flex-col items-start justify-start gap-0.5 rounded-lg border bg-transparent px-3 py-1.5 text-xs",
                "group-hover:border-accent-primary/60 transition-all duration-500 group-hover:-translate-y-5",
                "after:bg-border group-hover:after:bg-accent-primary/60 transition-all duration-500 after:absolute after:top-1/2 after:z-30 after:h-px after:w-4 after:translate-y-1/2 after:content-['']",
                side === "left" ? "right-1/2 mr-5 after:-right-4" : "left-1/2 ml-5 after:-left-4",
                className,
            )}
        >
            <span className="text-text-secondary font-bold">{title}</span>
            <span className="text-text-primary line-clamp-1 w-[100px] font-normal">{date}</span>
        </div>
    );
};
