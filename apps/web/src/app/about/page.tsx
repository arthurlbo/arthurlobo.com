import { getExperienceYears } from "@/shared/utils";
import { IconBolt, IconCalendar, IconCode, IconTarget } from "@tabler/icons-react";

import { IIntroContentBlockProps, IntroContentBlock } from "@/features/about";

export const dynamic = "force-static";

const yearsOfExperience = getExperienceYears();

const CONTENT_BLOCKS: IIntroContentBlockProps[] = [
    {
        side: "right",
        icon: IconCode,
        number: "01",
        title: "My Coding Journey",
        description: `My journey started ${yearsOfExperience} years ago with a curiosity about how things work. I learned the fundamentals with C, then moved to web development using Node.js and React. Since then, I have mastered new technologies and sharpened my skills in architecture, scalability, and system design, becoming a proficient Software Engineer.`,
    },
    {
        side: "left",
        icon: IconBolt,
        number: "02",
        title: "Passion for Problem-Solving",
        description:
            "I love solving hard problems. From handling huge data to improving slow systems and migrating legacy code, I’ve always enjoyed the challenge. I like understanding how things work under the hood, fixing what’s broken, and making it smarter. Solving problems is where I learn the most and have the most fun.",
    },
    {
        side: "right",
        icon: IconTarget,
        number: "03",
        title: "Life Beyond Code",
        description:
            "When I’m not coding, I’m probably watching Formula 1 or NBA, enjoying a good coffee, at the gym, playing games, or spending time with my wife. I love learning new things, visiting new places, exploring nature, and meeting people who share that same energy.",
    },
    {
        side: "left",
        icon: IconCalendar,
        number: "04",
        title: "These Days",
        description:
            "These days, I’m working as a Software Engineer at Sooro Renner, the largest whey company in Latin America, building internal tools that automate workflows and improve operational efficiency across all departments. I’m focused on growing day by day, improving both my technical skills and my ability to collaborate, communicate, and deliver meaningful impact.",
    },
];

export default function About() {
    return (
        <section className="mt-4 flex h-full w-full flex-col items-start justify-start gap-8 pb-2">
            {CONTENT_BLOCKS.map((block, index) => (
                <IntroContentBlock key={index} {...block} />
            ))}
        </section>
    );
}
