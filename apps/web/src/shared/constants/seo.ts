import { getExperienceYears } from "@/shared/utils";

const yearsOfExperience = getExperienceYears();

export const SEO_CONFIG = {
    url: process.env.NEXT_PUBLIC_APP_URL ?? "https://arthurlobo.com",
    name: "Arthur Lobo",
    title: "Arthur Lobo | Full Stack Software Engineer ",
    description: `Arthur Lobo, a Full Stack Software Engineer with ${yearsOfExperience}+ years of experience building scalable, high-performance web solutions using React, Next.js, TypeScript, and NodeJS. Focused on clean architecture and exceptional user experience.`,
};
