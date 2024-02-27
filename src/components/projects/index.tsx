import { IconPalette } from "@tabler/icons-react";

import { Title } from "@/components/ui";
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
        link: "timecapsule.arthurlobo.com",
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
    },
    {
        title: "Yazi.tv",
        description: [
            "Discover Yazi.tv: your gateway to endless entertainment! Stream movies and TV series, host watch parties, and enjoy handpicked recommendations. Seamlessly crafted with React, Next, and TypeScript, our platform prioritizes pixel-perfect design and user-friendly interface.",
            "I've meticulously dissected the application into reusable components, fostering efficiency, maintainability and end-to-end testing with Cypress to guarantee a seamless and bug-free experience from start to finish.",
        ],
        image: YaziImg,
        link: "yazi.arthurlobo.com",
        repository: "https://github.com/arthurlbo/yazitv",
        technologies: ["react", "next", "typescript", "tailwind", "cypress", "shadcn", "figma"],
    },
    {
        title: "Habits",
        description: [
            "Introducing a habits monitoring application designed to streamline our daily routines. This all-inclusive solution empowers users to effortlessly create and track their habits across both web and mobile platforms.",
            "Developed using TypeScript, Fastify, and Prisma, our API offers a robust and practical approach to habit management. The web application, crafted with React, TypeScript, and Tailwind, provides an intuitive and user-friendly interface for habit tracking. Meanwhile, our mobile app, built with ReactNative and Expo, ensures seamless habit monitoring on the go.",
        ],
        image: HabitsImg,
        link: "habits.arthurlobo.com",
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
    },
    {
        title: "Feedget",
        description: [
            "Introducing a feedback widget enabling users to share ideas, report issues, or provide relevant information. This end-to-end application is designed to collect user feedback and deliver it via email.",
            "The feedback capture API, developed in TypeScript, utilizes Express, Prisma, Nodemailer, and Mailtrap libraries, providing a comprehensive solution for collecting and sending user feedback via email. For the web application, we utilized React, TypeScript, Tailwind, Vite, and other tools to create an intuitive and user-friendly interface for efficiently collecting feedback. Leveraging ReactNative with TypeScript and Expo for the mobile app, we ensured seamless setup and utilization of user feedback features.",
        ],
        image: FeedgetImg,
        link: "feedget.arthurlobo.com",
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
    },
    {
        title: "Delta",
        description: [
            "A front end challenge of an interface for authentication, from prototype to code. The objective of this challenge was to improve my UX and UI skills, applying design principles to create a login form and also the improvement of tools for frontend development such as next, typescript, tailwind, tests with cypress, react-hook-form, among others.",
            "Inside the code, I focused on following the good practices of React, breaking down the application into reusable components, leaving the form and inputs ready to be sent to an API and being able to be reused in different ways, validating form information with zod, testing components with cypress, and documenting components with storybook.",
        ],
        image: DeltaImg,
        link: "delta.arthurlobo.com",
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
    },
];

export const Projects = () => {
    return (
        <section className="mx-5 flex flex-col items-start gap-12 overflow-visible border-b border-b-hover py-5 lg:gap-24 lg:py-32 xl:mx-28">
            <Title icon={IconPalette} label="Projects" title="Some of my side projects" align="center" />
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
};
