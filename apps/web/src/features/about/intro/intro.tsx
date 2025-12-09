import Mock from "@/assets/home/at-sunset.webp";

import { ContentBlock, IContentBlockProps } from "./content-block";

const CONTENT_BLOCKS: IContentBlockProps[] = [
    {
        side: "right",
        src: Mock,
        alt: "Mock",
        title: "My Coding Journey",
        description:
            "When Apple unveiled the first iPad with its beautiful 1024x768 display, I knew I had to create for it. I taught myself mobile development while freelancing, and soon I was shipping iOS and Android apps. One of my games even climbed above Angry Birds in the charts for a while—which still makes me smile when I think about it.",
    },
    {
        side: "left",
        src: Mock,
        alt: "Mock",
        title: "Passion for Problem-Solving",
        description:
            "Despite my love for mobile development, the web kept calling my name. With my eye for design, frontend felt like the perfect playground. I dove into HTML, CSS, and JavaScript—with React in 2016 becoming my game-changer. A few months later and I had landed my first full-time web dev role and never looked back.",
    },
    {
        side: "right",
        src: Mock,
        alt: "Mock",
        title: "Life Beyond Code",
        description:
            "Despite my love for mobile development, the web kept calling my name. With my eye for design, frontend felt like the perfect playground. I dove into HTML, CSS, and JavaScript—with React in 2016 becoming my game-changer. A few months later and I had landed my first full-time web dev role and never looked back.",
    },
    {
        side: "left",
        src: Mock,
        alt: "Mock",
        title: "These Days",
        description:
            "When Apple unveiled the first iPad with its beautiful 1024x768 display, I knew I had to create for it. I taught myself mobile development while freelancing, and soon I was shipping iOS and Android apps. One of my games even climbed above Angry Birds in the charts for a while—which still makes me smile when I think about it.",
    },
];

export const AboutIntro = () => {
    return (
        <section className="mt-8 flex h-full w-full flex-col items-start justify-start gap-10 px-5 pb-8">
            {CONTENT_BLOCKS.map((block, index) => (
                <ContentBlock key={index} {...block} />
            ))}
        </section>
    );
};
