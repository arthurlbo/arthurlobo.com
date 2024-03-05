import { IconBolt } from "@tabler/icons-react";

/**
 * List of my technologies.
 */
const techs = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Vite",
    "Expo",
    "Tailwind CSS",
    "Chakra UI",
    "Shadcn UI",
    "Figma",
    "GraphQL",
    "PWA",
    "Dexie JS",
    "IndexedDB",
    "React Query",
    "React Hook Form",
    "Zod",
    "Framer Motion",
    "I18next",
    "Jest",
    "Cypress",
    "Storybook",
    "Sentry",
    "Node.js",
    "Express",
    "Prisma",
    "Fastify",
    "PostgreSQL",
    "MySQL",
    "JWT",
    "Git",
    "GitHub Actions",
];

/**
 * Moving techs section.
 */
export const MovingTechs = () => {
    const extendedTechs = techs.concat(techs);

    return (
        <section
            data-testid="moving-techs"
            className="group relative flex h-20 w-full max-w-[100vw] items-center justify-center overflow-x-hidden border-y border-y-hover"
        >
            <ul className="flex h-full w-full animate-infinity-card items-center justify-between gap-6 group-hover:[animation-play-state:paused] lg:animate-infinity-card-lg">
                {extendedTechs.map((tech, index) => (
                    <li key={index} className="flex flex-none items-center gap-6">
                        <IconBolt className="h-4 w-4 flex-none fill-secondary text-secondary" />
                        <span className="flex-none text-base font-semibold text-secondary">{tech}</span>
                    </li>
                ))}
            </ul>

            {/* Gradient overlay */}
            <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-black to-transparent" />
        </section>
    );
};
