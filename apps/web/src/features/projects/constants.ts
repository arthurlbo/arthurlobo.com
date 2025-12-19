import { StaticImageData } from "next/image";

import Exp from "@/assets/projects/exp.webp";
import Feedget from "@/assets/projects/feedget.webp";
import Habits from "@/assets/projects/habits.webp";
import Monorepo from "@/assets/projects/monorepo.webp";
import TimeCapsule from "@/assets/projects/time-capsule.webp";
import UserApi from "@/assets/projects/user-api.webp";
import Yazi from "@/assets/projects/yazi.webp";

export type TProject = {
    image: StaticImageData;
    title: string;
    description: string;
    link: string;
    technologies: string[];
};

export const PROJECTS: TProject[] = [
    {
        title: "Fullstack Monorepo Template",
        description: "A modern Full-stack monorepo template to kickstart your web development.",
        image: Monorepo,
        link: "https://github.com/arthurlbo/fullstack-monorepo-template",
        technologies: [
            "NodeJS",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "NestJS",
            "TypeORM",
            "PostgreSQL",
            "Jest",
            "SuperTest",
            "Turborepo",
            "Docker",
        ],
    },
    {
        title: "Time Capsule",
        description: "A time capsule for you to record and store the best moments of your life.",
        image: TimeCapsule,
        link: "https://github.com/arthurlbo/time-capsule",
        technologies: [
            "NodeJS",
            "TypeScript",
            "React",
            "React Native",
            "Next.js",
            "Tailwind CSS",
            "Expo",
            "Fastify",
            "Prisma",
            "SQLite",
            "OAuth2",
        ],
    },
    {
        title: "Habits",
        description:
            "A daily habits monitoring application, that allows the user to manage their daily habits in a simple and practical way.",
        image: Habits,
        link: "https://github.com/arthurlbo/habits",
        technologies: [
            "NodeJS",
            "TypeScript",
            "React",
            "React Native",
            "Vite",
            "Tailwind CSS",
            "Expo",
            "Fastify",
            "Prisma",
            "SQLite",
        ],
    },
    {
        title: "Yazi.tv",
        description:
            "Stream thousands of movies and TV shows in a simple way. Watch with friends and family in real time, receive personalized content, and much more!",
        image: Yazi,
        link: "https://github.com/arthurlbo/yazitv",
        technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Cypress"],
    },
    {
        title: "Exp Marketing",
        description: "A bio page developed for the multinational marketing agency @expmarketing.br",
        image: Exp,
        link: "https://github.com/arthurlbo/exp-bio",
        technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Feedget",
        description: "A feedback widget for collecting reports, ideas, problems from the users and sending via email.",
        image: Feedget,
        link: "https://github.com/arthurlbo/feedget",
        technologies: [
            "NodeJS",
            "TypeScript",
            "React",
            "React Native",
            "Vite",
            "Tailwind CSS",
            "Expo",
            "Express",
            "Prisma",
            "SQLite",
            "Jest",
        ],
    },

    {
        title: "User API",
        description:
            "A simple API for user management and authentication, built with NestJS, Docker, Prisma, and PostgreSQL .",
        image: UserApi,
        link: "https://github.com/arthurlbo/user-management-api",
        technologies: ["NodeJS", "TypeScript", "NestJS", "TypeORM", "Prisma", "MySQL", "Jest", "SuperTest", "Docker"],
    },
];
