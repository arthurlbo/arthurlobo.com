import { IconPalette } from "@tabler/icons-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Title } from "@/components/ui";

import { Project, ProjectProps } from "./project";

import YaziImg from "@/assets/yazi.webp";
import DeltaImg from "@/assets/delta.webp";
import HabitsImg from "@/assets/habits.webp";
import FeedgetImg from "@/assets/feedget.webp";
import TimeCapsuleImg from "@/assets/timecapsule.webp";

const projects: ProjectProps[] = [
    {
        title: "Time Capsule",
        description: [
            "Introducing a time capsule application where users can record and cherish their life's best moments. With GitHub OAuth authentication, users can create accounts and register memories, including images and descriptions.",
            "Memories can be made public and are displayed on a timeline. The API, developed in TypeScript with Fastify and Prisma, ensures efficiency and scalability, while NextJS, React, and Tailwind are used for the web app, providing an intuitive interface. ReactNative with TypeScript is utilized for mobile, ensuring efficient authentication with expo-auth-session and expo-routes.",
        ],
        image: TimeCapsuleImg,
        link: "https://timecapsule.arthurlobo.com",
        repository: "https://github.com/arthurlbo/time-capsule",
        technologies: [
            "react",
            "next",
            "typescript",
            "tailwind",
            "reactNative",
            "fastify",
            "prisma",
            "expo",
            "jwt",
            "zod",
            "node",
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
        technologies: ["react", "next", "typescript", "tailwind", "cypress", "shadcn", "figma"],
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
            "vite",
            "typescript",
            "tailwind",
            "reactNative",
            "fastify",
            "prisma",
            "expo",
            "zod",
            "node",
            "sqlite",
            "radix",
        ],
        beamClassName: "from-[#370986] to-[#8C59F5]"
    },
    {
        title: "Feedget",
        description: [
            "Introducing a feedback widget enabling users to share ideas, report issues, or provide relevant information. This end-to-end application is designed to collect user feedback and deliver it via email.",
            "The feedback capture API, developed in TypeScript, utilizes Express, Prisma, Nodemailer, and Mailtrap libraries, providing a comprehensive solution for collecting and sending user feedback via email. For the web application, we utilized React, TypeScript, Tailwind, Vite, and other tools to create an intuitive and user-friendly interface for efficiently collecting feedback. Leveraging ReactNative with TypeScript and Expo for the mobile app, we ensured seamless setup and utilization of user feedback features.",
        ],
        image: FeedgetImg,
        link: "https://feedget.arthurlobo.com",
        repository: "https://github.com/arthurlbo/feedget",
        technologies: [
            "react",
            "vite",
            "typescript",
            "tailwind",
            "reactNative",
            "expo",
            "prisma",
            "expo",
            "node",
            "sqlite",
            "jest",
            "mailtrap",
        ],
        beamClassName: "from-[#8C59F5] to-[#86C1E8]"
    },
    {
        title: "Delta",
        description: [
            "A front end challenge of an interface for authentication, from prototype to code. The objective of this challenge was to improve my UX and UI skills, applying design principles to create a login form and also the improvement of tools for frontend development such as next, typescript, tailwind, tests with cypress, react-hook-form, among others.",
            "Inside the code, I focused on following the good practices of React, breaking down the application into reusable components, leaving the form and inputs ready to be sent to an API and being able to be reused in different ways, validating form information with zod, testing components with cypress, and documenting components with storybook.",
        ],
        image: DeltaImg,
        link: "https://delta.arthurlobo.com",
        repository: "https://github.com/arthurlbo/delta-login",
        technologies: [
            "react",
            "next",
            "typescript",
            "tailwind",
            "zod",
            "cypress",
            "storybook",
            "figma",
            "radix",
            "reactHookForm",
        ],
        beamClassName: "from-[#0079FF] to-[#A4B8E3]"
    },
];

export const Projects = () => {
    return (
        <section className="flex w-full flex-col items-start gap-12 lg:gap-24">
            <Title icon={IconPalette} label="Projects" title="Some of my side projects" align="center" />
            <Carousel className="w-full" opts={{ loop: true, duration: 0 }}>
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index}>
                            <Project {...project} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};
