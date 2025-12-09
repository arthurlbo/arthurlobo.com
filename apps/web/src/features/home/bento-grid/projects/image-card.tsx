import Image, { StaticImageData } from "next/image";

import { cn } from "@/shared/utils";

export interface IImageCardProps {
    alt: string;
    src: StaticImageData;
    className: string;
}

export const ImageCard = ({ alt, className, src }: IImageCardProps) => {
    return (
        <div
            className={cn(
                "border-border-400 bg-background absolute w-40 overflow-hidden rounded-tl-2xl border pt-2 pl-2",
                "group-hover:border-primary-400 transition-all duration-500 group-hover:scale-105",
                className,
            )}
        >
            <Image
                src={src}
                alt={alt}
                priority
                placeholder="blur"
                className="h-full w-full rounded-tl-lg object-cover object-top"
            />
        </div>
    );
};
