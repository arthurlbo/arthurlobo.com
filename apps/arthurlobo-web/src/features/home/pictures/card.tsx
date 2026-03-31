import Image, { StaticImageData } from "next/image";

import { cn } from "@/shared/utils";

export interface ICardProps {
    src: StaticImageData;
    alt: string;
    className?: string;
}

/**
 * Image card component to display some moments.
 * @param src - Image source.
 * @param alt - Alt text for the image.
 * @param className - Additional Tailwind CSS classes.
 */
export const Card = ({ alt, className, src }: ICardProps) => {
    return (
        <div
            className={cn(
                "group relative h-[200px] w-[200px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-transparent",
                "hover:border-primary-300 hover:z-50 hover:scale-[115%] hover:rotate-0",
                "transition-all duration-500 ease-out",
                className,
            )}
        >
            <Image
                src={src}
                alt={alt}
                priority
                quality={100}
                placeholder="blur"
                className={cn(
                    "h-full w-full object-cover object-center",
                    "transition-transform duration-300 ease-out",
                    "group-hover:scale-110",
                )}
            />

            <span className="text-accent-text absolute bottom-3 left-3 max-w-[180px] text-sm font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                {alt}
            </span>
        </div>
    );
};
