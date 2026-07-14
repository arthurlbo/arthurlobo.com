import { Metadata } from "next";

import AdamRoboLogo from "@/assets/about/career/adam-robo.webp";
import AnaliticaLogo from "@/assets/about/career/analitica.webp";
import CobeLogo from "@/assets/about/career/cobe.webp";
import SooroLogo from "@/assets/about/career/sooro.webp";

import { IMilestoneCardProps, Milestones } from "@/features/about";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Career",
};

const CAREER_MILESTONES: IMilestoneCardProps[] = [
    {
        value: "1",
        title: "Senior Software Engineer",
        organization: {
            name: "Sooro Renner",
            link: "https://sooro.com.br/",
            logo: SooroLogo,
        },
        tags: ["Full-time", "Remote"],
        period: "Jul 2025 - Present",
        location: "Marechal Cândido Rondon, Paraná, Brazil",
        summary:
            "Senior engineer on the internal multi-tenant platform that runs an entire whey processing operation across three business units, spanning fiscal, quality, lab, gatehouse, inventory and production planning. The system serves 1,000+ registered users, handles ~50k requests/day at 99% uptime, and replaced slow, manual spreadsheet-based workflows.",
        impacts: [
            "Designed and built a distributed rate-limiting layer with a custom Token Bucket algorithm backed by Redis, protecting the platform's APIs against abuse and burst traffic.",
            "Co-designed and built a real-time integration between the portal and industrial hardware (three truck and pallet-weighing scales) using WebSockets with a room-based architecture, enabling live weight capture in the gatehouse module and removing manual data entry across ~800 weigh-ins per day.",
            "Replaced hardcoded scale configuration with a dedicated management system, so new scales can be onboarded and configured through an interface instead of requiring code changes and redeploys.",
            "Co-led the integration of a newly acquired butter company into the platform, delivering the full raw-material intake flow (gatehouse, lab, fiscal and reporting) in three months, plus automations the company's previous system lacked: SAP integration and automatic invoice retrieval via the Qive API.",
            "Replaced a manual deploy process (VM access, local build, file transfer) with an automated CI/CD pipeline on GitHub Actions, cutting deploy time from 20 to 5 minutes across frontend and backend.",
            "Drove frontend architecture and performance improvements across the portal, migrating from Context to Zustand, refactoring query-param handling, and cutting unnecessary re-renders through memoization and code splitting.",
        ],
    },
    {
        value: "2",
        title: "Senior Software Engineer",
        organization: {
            name: "COBE Tecnologia",
            link: "http://www.cobetecnologia.com.br/",
            logo: CobeLogo,
        },
        tags: ["Freelance", "Remote"],
        period: "Oct 2025 - Jun 2026",
        totalTime: "9 mos",
        location: "Curitiba, Paraná, Brazil",
        summary:
            "Battery-monitoring platform for industrial forklift fleets, tracking 250k+ battery cycles across 4,000+ pieces of equipment for enterprise clients including Volvo, Aurora and Condor. Brought in with one other engineer to modernize the product, leading frontend across web and mobile on a five-person team while also contributing to the backend.",
        impacts: [
            "Led the migration of the legacy multi-tenant web system to a modern React, Next.js, TypeScript and Tailwind stack, defining the architecture from scratch in two months and building the foundation the rest of the team developed modules on top of.",
            "Built the company's new mobile app from scratch (React Native, Expo, TypeScript, NativeWind, React Query), covering authentication, QR code scanning, battery swaps, charge logging, damage reporting and operational forms.",
            "Shipped an AI-powered insights section in the platform's monthly client operations report, sending operational data to the OpenAI API to surface optimization opportunities, strengths and risk areas, delivered as part of the client-facing PDF.",
            "Extended web and mobile to support lithium batteries, previously limited to lead-acid only, implementing the distinct operational flows the new type required. This was the core goal of the engagement.",
            "Consolidated three separate codebases (web, mobile and backend) into a pnpm-workspace monorepo, sharing design system, schemas and configs to remove duplication and enforce consistency, with Docker and automated testing across the stack.",
        ],
    },
    {
        value: "3",
        title: "Senior Software Engineer",
        organization: {
            name: "Analítica - Gerenciadora de Dados S/A",
            link: "https://www.linkedin.com/company/analitica-ag/posts/?feedView=all",
            logo: AnaliticaLogo,
        },
        tags: ["Full-time", "Remote"],
        period: "Oct 2024 - Jul 2025",
        totalTime: "10 mos",
        location: "Curitiba, Paraná, Brazil",
        summary:
            "Agricultural monitoring platform processing 2M+ sensor records per day. Joined as a freelance frontend developer, grew into owning the platform's frontend, then expanded into backend development.",
        impacts: [
            "Expanded from frontend into backend work, taking on performance-critical problems across Node.js, MongoDB and Redis while remaining the reference for the platform's frontend.",
            "Co-led the backend re-architecture to NestJS and GraphQL on an MQTT-based IoT pipeline, designing schemas, resolvers and service structure for a platform ingesting 2M+ sensor records per day.",
            "Implemented a Redis caching layer that cut API response times from 60–120s to 300–500ms on the platform's heaviest calculations.",
            "Optimized complex queries with MongoDB aggregation pipelines and strategic indexing, reducing query response time by ~65%.",
            "Engineered a data processing pipeline for full-harvest data, using a monthly cron job and a dedicated MongoDB collection to bring millisecond-level access to reports that previously took minutes.",
            "Handled deployments and environment setup on Azure.",
            "Acted as one of the team's go-to references on business domain and technical questions, supporting backend engineers day to day.",
        ],
    },
    {
        value: "4",
        title: "Senior Frontend Developer",
        organization: {
            name: "Analítica - Gerenciadora de Dados S/A",
            link: "https://www.linkedin.com/company/analitica-ag/posts/?feedView=all",
            logo: AnaliticaLogo,
        },
        tags: ["Full-time", "Remote"],
        period: "Mar 2024 - Oct 2024",
        totalTime: "8 mos",
        location: "Curitiba, Paraná, Brazil",
        impacts: [
            "Owned the entire frontend of the platform as the sole frontend engineer on an 8-person engineering team, defining architecture and technical direction.",
            "Led the frontend implementation of a multi-tenant feature that enabled the company to onboard two new clients, tripling its customer base.",
            "Established a scalable frontend architecture that cut bug reports by ~85% and significantly reduced delivery time compared to the legacy system.",
            "Automated GraphQL hook generation with Codegen, streamlining development and eliminating a class of manual errors.",
            "Supported backend engineers picking up frontend tasks, acting as the team's reference for frontend decisions and code review.",
        ],
    },
    {
        value: "5",
        title: "Frontend Developer",
        organization: {
            name: "Analítica - Gerenciadora de Dados S/A",
            link: "https://www.linkedin.com/company/analitica-ag/posts/?feedView=all",
            logo: AnaliticaLogo,
        },
        tags: ["Freelance", "Remote"],
        period: "Dec 2023 - Mar 2024",
        totalTime: "4 mos",
        location: "Curitiba, Paraná, Brazil",
        impacts: [
            "Built the frontend of the company's new agricultural monitoring platform from scratch, replacing a legacy PHP system that was slow and produced unreliable data.",
            "Delivered real-time dashboards that gave clients immediate visibility into field data, removing manual page refreshes and cutting the time to access and visualize critical data from minutes to seconds.",
            "Translated Figma designs into pixel-perfect interfaces and, where designs didn't exist, designed screens from scratch based on the existing design system.",
        ],
    },
    {
        value: "6",
        title: "Mid-level Frontend Developer",
        organization: {
            name: "Adam Robo",
            link: "https://www.linkedin.com/company/adamrobo/",
            logo: AdamRoboLogo,
        },
        tags: ["Full-time", "On-site"],
        period: "Dec 2022 - Jan 2024",
        totalTime: "1 yr 2 mos",
        location: "Curitiba, Paraná, Brazil",
        summary:
            "Health-tech startup building vision-screening platforms. Established and led the frontend across every product, owning architecture, implementation and design, and later growing the frontend team.",
        impacts: [
            "Built the company's flagship multi-tenant vision-screening platform from scratch, serving 897 client companies and 2,400+ users, with 145k+ vision tests processed (~2k/month).",
            "Delivered an enterprise vision-screening platform for Electrolux, processing 8,400+ tests.",
            "Owned frontend delivery beyond code, shaping backlog, estimating effort and scoping requirements directly with stakeholders.",
            "Implemented E2E and unit tests with Cypress, enabling faster and more confident deployments.",
            "Onboarded and mentored the company's second frontend engineer, teaching React and TypeScript in depth and eventually co-leading projects with them.",
        ],
    },
    {
        value: "7",
        title: "Junior Frontend Developer",
        organization: {
            name: "Adam Robo",
            link: "https://www.linkedin.com/company/adamrobo/",
            logo: AdamRoboLogo,
        },
        tags: ["Full-time", "On-site"],
        period: "Apr 2022 - Dec 2022",
        totalTime: "9 mos",
        location: "Curitiba, Paraná, Brazil",
        impacts: [
            "Led the migration of the SESI-PR vision-screening platform from a legacy stack (HTML, CSS, jQuery) to a modern React, TypeScript, ChakraUI and Vite architecture, significantly improving performance and virtually eliminating bug reports.",
            "Rebuilt the application offline-first with IndexedDB, so vision tests and patient anamnesis could run in remote areas with no connectivity and sync once back online.",
            "Defined the frontend's architecture, component structure and UI design from scratch as the sole frontend engineer, with no designer on the team, setting the technical foundation (state management, testing, build tooling) for every product that followed.",
        ],
    },
];

export default function Career() {
    return <Milestones items={CAREER_MILESTONES} />;
}
