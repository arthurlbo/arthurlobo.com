import Image, { StaticImageData } from "next/image";

import { cn } from "@/shared/utils";

export interface IContentBlockProps {
    src: StaticImageData;
    alt: string;
    title: string;
    description: string;
    side: "right" | "left";
}

export const ContentBlock = ({ alt, description, side, src, title }: IContentBlockProps) => {
    const sideStyle =
        side === "right"
            ? {
                  container: "xl:flex-row",
                  image: "rotate-[-8deg] group-hover:rotate-[-6deg]",
              }
            : {
                  container: "xl:flex-row-reverse",
                  image: "rotate-[8deg] group-hover:rotate-[6deg]",
              };

    return (
        <article className={cn("group flex w-full items-center justify-between", sideStyle.container)}>
            <div className="bg-surface-300 border-border-400 relative flex h-[260px] w-[260px] shrink-0 items-center justify-center rounded-2xl border p-3">
                <Image
                    src={src}
                    alt={alt}
                    quality={100}
                    placeholder="blur"
                    className={cn(
                        "absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover object-center",
                        "transition-all duration-500 ease-in-out",
                        sideStyle.image,
                    )}
                />
            </div>

            <div className="flex w-full max-w-2xl flex-col items-start justify-center gap-6">
                <h1 className="text-text-100 text-3xl font-semibold">{title}</h1>
                <p className="text-text-200 text-base leading-8 font-normal">{description}</p>
            </div>
        </article>
    );
};
