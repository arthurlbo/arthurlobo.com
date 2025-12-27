import { Metadata } from "next";

import { Accordion } from "@repo/design-system/components";
import {
    IconBolt,
    IconCloud,
    IconCode,
    IconDeviceMobile,
    IconPalette,
    IconSettings2,
    IconTool,
} from "@tabler/icons-react";
import {
    AWS,
    Azure,
    CSS3,
    ChakraUI,
    Cypress,
    Docker,
    ESLint,
    ExpressJsLight,
    Figma,
    Git,
    GraphQL,
    HTML5,
    I18next,
    Insomnia,
    JQuery,
    JavaScript,
    Jest,
    Kubernetes,
    MaterialUI,
    MicrosoftSQLServer2,
    MongoDB,
    MySQL,
    NestJS,
    NextJs,
    NodeJs,
    PHP,
    PWA,
    PostgreSQL,
    Prettier,
    Prisma,
    React,
    ReactQuery,
    Redis,
    Redux,
    Storybook,
    TailwindCSS,
    Terraform,
    TypeScript,
    ViteJS,
    Vitest,
} from "developer-icons";

import { IStackCardProps, StackCard } from "@/features/about";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Stack",
};

const STACKS: IStackCardProps[] = [
    {
        title: "Languages",
        icon: IconCode,
        technologies: [
            {
                label: "NodeJS",
                icon: NodeJs,
            },
            {
                label: "TypeScript",
                icon: TypeScript,
            },
            {
                label: "JavaScript",
                icon: JavaScript,
            },
            {
                label: "PHP",
                icon: PHP,
            },
        ],
    },
    {
        title: "Frontend",
        icon: IconPalette,
        technologies: [
            {
                label: "HTML5",
                icon: HTML5,
            },
            {
                label: "CSS3",
                icon: CSS3,
            },
            {
                label: "React.js",
                icon: React,
            },
            {
                label: "Next.js",
                icon: NextJs,
            },
            {
                label: "Vite",
                icon: ViteJS,
            },
            {
                label: "PWA",
                icon: PWA,
            },
            {
                label: "Socket.IO",
                icon: IconBolt,
            },
            {
                label: "Apollo GraphQL",
                icon: IconBolt,
            },
            {
                label: "React Query",
                icon: ReactQuery,
            },
            {
                label: "Zustand",
                icon: IconBolt,
            },
            {
                label: "Redux",
                icon: Redux,
            },
            {
                label: "i18next",
                icon: I18next,
            },
            {
                label: "IndexedDB",
                icon: IconBolt,
            },
            {
                label: "JQuery",
                icon: JQuery,
            },
            {
                label: "Ajax",
                icon: IconBolt,
            },
            {
                label: "Tailwind CSS",
                icon: TailwindCSS,
            },
            {
                label: "Chakra UI",
                icon: ChakraUI,
            },
            {
                label: "Material UI",
                icon: MaterialUI,
            },
            {
                label: "Storybook",
                icon: Storybook,
            },
        ],
    },
    {
        title: "Mobile",
        icon: IconDeviceMobile,
        technologies: [
            {
                label: "React Native",
                icon: React,
            },
            {
                label: "Expo",
                icon: IconBolt,
            },
            {
                label: "Reanimated",
                icon: IconBolt,
            },
            {
                label: "NativeWind",
                icon: TailwindCSS,
            },
        ],
    },
    {
        title: "Backend & APIs",
        icon: IconSettings2,
        technologies: [
            {
                label: "NestJS",
                icon: NestJS,
            },
            {
                label: "ExpressJS",
                icon: ExpressJsLight,
            },
            {
                label: "Fastify",
                icon: IconBolt,
            },
            {
                label: "MySQL",
                icon: MySQL,
            },
            {
                label: "PostgreSQL",
                icon: PostgreSQL,
            },
            {
                label: "SQL Server",
                icon: MicrosoftSQLServer2,
            },
            {
                label: "MongoDB",
                icon: MongoDB,
            },
            {
                label: "Redis",
                icon: Redis,
            },
            {
                label: "BullMQ",
                icon: IconBolt,
            },
            {
                label: "TypeORM",
                icon: IconBolt,
            },
            {
                label: "Prisma",
                icon: Prisma,
            },
            {
                label: "GraphQL",
                icon: GraphQL,
            },
            {
                label: "MQTT",
                icon: IconBolt,
            },
            {
                label: "REST",
                icon: IconBolt,
            },
        ],
    },
    {
        title: "DevOps",
        icon: IconCloud,
        technologies: [
            {
                label: "Docker",
                icon: Docker,
            },
            {
                label: "Kubernetes",
                icon: Kubernetes,
            },
            {
                label: "Terraform",
                icon: Terraform,
            },
            {
                label: "NGINX",
                icon: IconBolt,
            },
            {
                label: "AWS",
                icon: AWS,
            },
            {
                label: "Azure",
                icon: Azure,
            },
            {
                label: "CI/CD",
                icon: IconBolt,
            },
        ],
    },
    {
        title: "Testing & Tools",
        icon: IconTool,
        technologies: [
            {
                label: "Jest",
                icon: Jest,
            },
            {
                label: "Cypress",
                icon: Cypress,
            },
            {
                label: "Vitest",
                icon: Vitest,
            },
            {
                label: "SuperTest",
                icon: IconBolt,
            },
            {
                label: "Sentry",
                icon: IconBolt,
            },
            {
                label: "ESLint",
                icon: ESLint,
            },
            {
                label: "Prettier",
                icon: Prettier,
            },
            {
                label: "Insomnia",
                icon: Insomnia,
            },
            {
                label: "Git",
                icon: Git,
            },
            {
                label: "Figma",
                icon: Figma,
            },
        ],
    },
];

export default function Stack() {
    return (
        <Accordion type="single" collapsible asChild>
            <section className="mt-4 grid h-full w-full grid-cols-1 items-start gap-6 lg:grid-cols-2">
                {STACKS.map((stack) => (
                    <StackCard key={stack.title} {...stack} />
                ))}
            </section>
        </Accordion>
    );
}
