import AtSunset from "@/assets/home/at-sunset.webp";
import Beach from "@/assets/home/beach.webp";
import LakeSunset from "@/assets/home/lake-sunset.webp";
import OnTheBeach from "@/assets/home/on-the-beach.webp";
import Sunset from "@/assets/home/sunset.webp";
import Wife from "@/assets/home/wife.webp";
import { IImageCardProps, ImageCard } from "@/features/home/pictures/image-card";

const imageCards: IImageCardProps[] = [
    {
        src: AtSunset,
        alt: "Sunset on Balneário Camboriú - SC",
        className: "-rotate-12",
    },
    {
        src: Beach,
        alt: "Estaleiro Beach - SC",
        className: "rotate-6 translate-y-4 z-10",
    },
    {
        src: Wife,
        alt: "Me and my wife",
        className: "-rotate-8 -translate-y-3",
    },
    {
        src: LakeSunset,
        alt: "Sunset in Mal. Cândido Rondon - PR",
        className: "rotate-4 translate-y-6 z-10",
    },
    {
        src: OnTheBeach,
        alt: "At Estaleiro Beach",
        className: "-translate-y-2 -rotate-5",
    },
    {
        src: Sunset,
        alt: "Balneário Camboriú skyline at dusk",
        className: "rotate-8 translate-y-4 z-10",
    },
];

export const HomePictures = () => (
    <section className="flex h-[280px] w-full shrink-0 items-center -space-x-3 overflow-x-auto overflow-y-hidden pl-4 lg:justify-center lg:-space-x-12 lg:pl-0 xl:-space-x-6 2xl:-space-x-3">
        {imageCards.map((card, index) => (
            <ImageCard key={index} {...card} />
        ))}
    </section>
);
