import Delta from "@/assets/home/delta.webp";
import TimeCapsule from "@/assets/home/time-capsule.webp";
import Yazi from "@/assets/home/yazi.webp";

import { Card, Heading } from "../shared";
import { IImageCardProps, ImageCard } from "./image-card";

const CARDS: IImageCardProps[] = [
    {
        src: TimeCapsule,
        alt: "Time Capsule project",
        className: "right-[170px] h-[160px] top-32 sm:top-20 lg:top-24 xl:top-20 delay-0 ease-out",
    },
    {
        src: Delta,
        alt: "Delta Company project",
        className: "right-[85px] h-full top-24 sm:top-10 delay-[50ms] ease-in-out",
    },
    {
        src: Yazi,
        alt: "Yazi.tv project",
        className: "right-0 h-full top-16 sm:top-4 delay-75 ease-in",
    },
];

export const Projects = () => {
    return (
        <Card link="/projects">
            <Heading title="Projects" description="Dive into my latest projects and creations." className="max-w-60" />

            <div className="relative flex h-full w-full items-end justify-end">
                {CARDS.map((card, index) => (
                    <ImageCard key={index} {...card} />
                ))}
            </div>
        </Card>
    );
};
