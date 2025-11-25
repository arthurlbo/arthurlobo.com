import { cn } from "@/shared/utils";

export interface IEventProps {
    title: string;
    date: string;
    position: number;
    side: "left" | "right";
}

export const Event = ({ position, side, date, title }: IEventProps) => {
    return (
        <div
            style={{ top: `${position}%` }}
            className={cn(
                "border-border bg-background/10 absolute z-20 flex flex-col items-start justify-start gap-0.5 rounded-lg border px-2 py-1 text-xs",
                "transition-all duration-1000 ease-in-out group-hover:-translate-y-10",
                "after:bg-border after:absolute after:top-1/2 after:z-30 after:h-px after:w-4 after:translate-y-1/2 after:content-['']",
                side === "left" ? "right-1/2 mr-5 after:-right-4" : "left-1/2 ml-5 after:-left-4",
            )}
        >
            <span className="text-text-secondary font-bold">{title}</span>
            <span className="text-text-primary line-clamp-1 w-[100px] font-normal">{date}</span>
        </div>
    );
};
