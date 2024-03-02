import { IconBriefcase2 } from "@tabler/icons-react";

import { calculateDuration } from "@/utils/calculateDuration";

import { Title } from "@/components/ui";
import { TracingBeam } from "./tracing-beam";
import { ExperienceCard, ExperienceCardProps } from "./experience-card";

/**
 * List of my experiences.
 */
const experiences: ExperienceCardProps[] = [
    {
        jobTitle: "Frontend Developer",
        company: "Wolk Tecnologia",
        companyLink: "https://www.wolk.com.br/index.html",
        location: "Curitiba, Paraná, Brazil",
        duration: `Dec 2023 - Present • ${calculateDuration("2023/12/01", new Date().toDateString())}`,
        achievements: [
            "Led the Frontend of two dashboard projects (financial and operational), replacing the company's existing legacy systems enhancing performance and user experience.",
            "Successfully achieve real-time data updates in the dashboards, ensuring an exceptional and immersive user experience.",
            "Pixel-perfect development of the prototype created in Figma.",
        ],
        technologies: [
            "react",
            "typescript",
            "tailwind",
            "next",
            "figma",
            "cypress",
            "githubActions",
            "git",
            "reactQuery",
            "shadcn",
        ],
        pointClassName: "bg-gradient-to-r from-[#FCB045] to-[#E100FF]",
    },
    {
        jobTitle: "Mid-level Frontend Developer",
        company: "Adam Robo",
        companyLink: "https://adamrobo.com.br/lp/",
        location: "Curitiba, Paraná, Brazil",
        duration: `Dec 2022 - Jan 2024 • ${calculateDuration("2022/12/01/", "2024/01/01")}`,
        achievements: [
            "Training team members in React and TypeScript.",
            "Elaborated the Front-end architecture to ensure system performance and scalability.",
            "Successfully led and managed three end-to-end projects for company products and external clients products from inception to completion.",
            "Successfully gathered project requirements, selected the technology stack, determined deadlines and costs, and ensured accurate project planning and execution.",
            "Leadership in migrations of web apps from traditional HTML, CSS, and JavaScript to modernized tools (React and TypeScript), optimizing performance and user experience.",
        ],
        technologies: [
            "react",
            "chrakraui",
            "typescript",
            "tailwind",
            "next",
            "figma",
            "cypress",
            "githubActions",
            "git",
            "reactQuery",
            "i18next",
            "jest",
            "pwa",
            "reactHookForm",
            "reactQuery",
            "redux",
            "sentry",
            "vite",
            "zod",
        ],
        pointClassName: "bg-gradient-to-r from-[#E100FF] to-[#3f6bfb]",
    },
    {
        jobTitle: "Junior Frontend Developer",
        company: "Adam Robo",
        companyLink: "https://adamrobo.com.br/lp/",
        location: "Curitiba, Paraná, Brazil",
        duration: `Apr 2022 - Dec 2022 • ${calculateDuration("2022/04/01", "2022/12/01")}`,
        pointClassName: "bg-gradient-to-r from-[#3F5EFB] to-[#1CB5E0]",
    },
];

/**
 * Career section.
 */
export const Career = () => {
    return (
        <section id="career" className="flex w-full flex-col items-start gap-12 overflow-visible lg:gap-24">
            <Title icon={IconBriefcase2} label="Career" title="My work history" align="center" />

            <TracingBeam>
                <div className="flex h-full w-full flex-col items-start gap-12 pl-5 md:pl-12">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
};
