import { IconPalette } from "@tabler/icons-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    FadeInWhileInView,
    Title,
} from "@/components/ui";

import { Project, ProjectProps } from "./project";

import YaziImg from "@/assets/yazi.webp";
import DeltaImg from "@/assets/delta.webp";
import HabitsImg from "@/assets/habits.webp";
import FeedgetImg from "@/assets/feedget.webp";
import TimeCapsuleImg from "@/assets/timecapsule.webp";

/**
 * My side projects.
 **/
const projects: ProjectProps[] = [
    {
        title: "Time Capsule",
        description: [
            "Introducing a time capsule app for users to record and share life’s best moments. With GitHub OAuth, users can create accounts and register memories.",
            "Memories can be made public and are displayed on a timeline. The API, developed in TypeScript with Fastify and Prisma, ensures efficiency and scalability, while NextJS, React, and Tailwind are used for the web app, providing an intuitive interface. ReactNative with TypeScript is utilized for mobile, ensuring efficient authentication with expo-auth-session and expo-routes.",
        ],
        image: TimeCapsuleImg,
        link: "https://timecapsule.arthurlobo.com",
        repository: "https://github.com/arthurlbo/time-capsule",
        technologies: [
            "react",
            "reactNative",
            "typescript",
            "next",
            "expo",
            "tailwind",
            "zod",
            "jwt",
            "node",
            "fastify",
            "prisma",
            "sqlite",
        ],
        beamClassName: "from-[#7457E0] to-[#FF997A]",
    },
    {
        title: "Yazi.tv",
        description: [
            "Discover Yazi.tv: your gateway to endless entertainment! Stream movies and TV series, host watch parties, and enjoy handpicked recommendations. Seamlessly crafted with React, Next, and TypeScript, our platform prioritizes pixel-perfect design and user-friendly interface.",
            "I've meticulously dissected the application into reusable components, fostering efficiency, maintainability and end-to-end testing with Cypress to guarantee a seamless and bug-free experience from start to finish.",
        ],
        image: YaziImg,
        link: "https://yazi.arthurlobo.com",
        repository: "https://github.com/arthurlbo/yazitv",
        technologies: ["react", "typescript", "next", "tailwind", "shadcn", "cypress", "figma"],
        beamClassName: "from-[#ED2BA3] to-[#8A29F0]",
    },
    {
        title: "Habits",
        description: [
            "Introducing a habits monitoring application designed to streamline our daily routines. This all-inclusive solution empowers users to effortlessly create and track their habits across both web and mobile platforms.",
            "Developed using TypeScript, Fastify, and Prisma, our API offers a robust and practical approach to habit management. The web application, crafted with React, TypeScript, and Tailwind, provides an intuitive and user-friendly interface for habit tracking. Meanwhile, our mobile app, built with ReactNative and Expo, ensures seamless habit monitoring on the go.",
        ],
        image: HabitsImg,
        link: "https://habits.arthurlobo.com",
        repository: "https://github.com/arthurlbo/habits",
        technologies: [
            "react",
            "reactNative",
            "typescript",
            "vite",
            "expo",
            "tailwind",
            "radix",
            "zod",
            "node",
            "fastify",
            "prisma",
            "sqlite",
        ],
        beamClassName: "from-[#370986] to-[#8C59F5]",
    },
    {
        title: "Feedget",
        description: [
            "Presenting a feedback widget for users to share ideas, report issues, or provide information. This application collects and delivers feedback via email.",
            "Our TypeScript-based feedback capture API utilizes Express, Prisma, Nodemailer, and Mailtrap to collect and send feedback. The web app, employing React, TypeScript, Tailwind, Vite, ensures an intuitive interface. For mobile, we use ReactNative with TypeScript and Expo for seamless feedback integration",
        ],
        image: FeedgetImg,
        link: "https://feedget.arthurlobo.com",
        repository: "https://github.com/arthurlbo/feedget",
        technologies: [
            "react",
            "reactNative",
            "typescript",
            "vite",
            "expo",
            "tailwind",
            "jest",
            "node",
            "express",
            "prisma",
            "mailtrap",
            "sqlite",
        ],
        beamClassName: "from-[#8C59F5] to-[#86C1E8]",
    },
    {
        title: "Delta",
        description: [
            "A frontend authentication interface challenge, from prototype to code, aimed at enhancing UX/UI skills. Using design principles, I crafted a login form and improved frontend development tools like Next.js, TypeScript, Tailwind, and tested with Cypress and React Hook Form.",
            "I focused on React best practices in the code, breaking it into reusable components. The form and inputs are API-ready and versatile. I validated form data with Zod, tested components with Cypress, and documented with Storybook.",
        ],
        image: DeltaImg,
        link: "https://delta.arthurlobo.com",
        repository: "https://github.com/arthurlbo/delta-login",
        technologies: [
            "react",
            "typescript",
            "next",
            "tailwind",
            "radix",
            "reactHookForm",
            "zod",
            "cypress",
            "storybook",
            "figma",
        ],
        beamClassName: "from-[#0079FF] to-[#A4B8E3]",
    },
];

/**
 * Projects section.
 */
export const Projects = () => {
    return (
        <section id="projects" className="flex w-full flex-col items-start gap-12 lg:items-center lg:gap-24">
            <FadeInWhileInView initial={{ y: -40 }} animate={{ y: 0 }}>
                <Title icon={IconPalette} label="Projects" title="Some of my side projects" align="center" />
            </FadeInWhileInView>

            <Carousel className="w-full" opts={{ loop: true, duration: 0 }}>
                <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }}>
                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index}>
                                <Project {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation buttons */}
                    <CarouselPrevious />
                    <CarouselNext />
                </FadeInWhileInView>
            </Carousel>
        </section>
    );
};
