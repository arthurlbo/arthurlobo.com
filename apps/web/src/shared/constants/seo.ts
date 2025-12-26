import { getExperienceYears } from "@/shared/utils";

const yearsOfExperience = getExperienceYears();

export const SEO_CONFIG = {
    url: process.env.NEXT_PUBLIC_APP_URL ?? "https://arthurlobo.com",
    name: "Arthur Lobo",
    title: "Arthur Lobo | Senior Software Engineer ",
    description: `I'm a Senior Software Engineer with ${yearsOfExperience}+ years of expertise in modern web development. I architect and build scalable, performant applications using Node.js, TypeScript, React and Next.js, always prioritizing clean code and exceptional UX.`,
};
