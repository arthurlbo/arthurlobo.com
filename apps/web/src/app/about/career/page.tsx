import { Metadata } from "next";

import AdamRoboLogo from "@/assets/about/career/adamrobo.webp";
import AnaliticaLogo from "@/assets/about/career/analitica.webp";
import SooroLogo from "@/assets/about/career/sooro.webp";

import { IMilestoneCardProps, Milestones } from "@/features/about";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Career",
};

const CAREER_MILESTONES: IMilestoneCardProps[] = [
    {
        value: "1",
        title: "Full Stack Software Engineer",
        organization: {
            name: "Sooro Renner",
            link: "https://sooro.com.br/",
            logo: SooroLogo,
        },
        tags: ["Full-time", "Remote"],
        period: "Jul 2025 - Present",
        location: "Marechal Cândido Rondon, Paraná, Brazil",
        impacts: [
            "Engineered and developed internal tools to automate workflows across departments, significantly improving operational efficiency and reducing manual effort for key business processes.",
            "Optimized core components and Frontend logic to improve system performance and render efficiency, resulting in a more fluid user experience and code consistency.",
            "Managed project backlogs, estimated task complexity, and prioritized feature development, ensuring timely and effective project delivery.",
        ],
    },
    {
        value: "2",
        title: "Full Stack Software Engineer",
        organization: {
            name: "Analítica - Gerenciadora de Dados S/A",
            link: "https://www.linkedin.com/company/analitica-ag/posts/?feedView=all",
            logo: AnaliticaLogo,
        },
        tags: ["Full-time", "Remote"],
        period: "Mar 2024 - Jul 2025",
        totalTime: "1 yr 5 mos",
        location: "Curitiba, Paraná, Brazil",
        impacts: [
            "Directed the entire Frontend development, overseeing all architectural and strategic decisions to build a robust and highly scalable system.",
            "Led the Frontend implementation of a multi-tenant system feature, which enabled the acquisition of two new clients and resulted in a substantial boost to company revenue.",
            "Engineered a scalable and maintainable Frontend architecture, cutting bug reports by 85% and reducing delivery time by 70%.",
            "Automated GraphQL hooks using Codegen, which streamlined the development workflow and enabled faster implementation of new features. This also minimized manual errors and ensured code consistency across the team.",
            "Implemented a Redis caching layer, reducing API response time from 60–120s to 300–500ms and accelerating the processing of complex calculations with large data volumes.",
            "Optimized complex database queries by implementing MongoDB Aggregation pipelines and strategic indexing, reducing query response time by 65% and significantly improving overall system performance.",
            "Engineered a scalable data processing pipeline for complex, full-harvest data. By implementing a monthly cron job and a dedicated MongoDB collection, this solution enabled millisecond-level data access for strategic analysis and reports.",
        ],
    },
    {
        value: "3",
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
            "Engineered and deployed two real-time dashboards, which reduced data accessibility and visualization time by 95%. These solutions enabled clients to efficiently analyze critical business data, significantly improving decision-making speed and accuracy.",
            "Developed and implemented real-time data solutions that delivered a highly efficient and immersive user experience, eliminating the need for manual page refreshes.",
            "Translated Figma prototypes into code with precision, ensuring pixel-perfect design and exceptional usability.",
        ],
    },
    {
        value: "4",
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
        impacts: [
            "Led the development of an offline-first PWA, which became the company's main system, serving over 800 users and generating more than 100,000 visual acuity tests, boosting client satisfaction by 88% and increasing product sales.",
            "Delivered two projects for major global clients in the manufacturing and education sectors, enabling the handling of more than 1,500 medical records monthly and driving a significant increase in company revenue.",
            "Led the migration of two legacy applications (HTML, CSS, jQuery, JavaScript) to a modern, component-based architecture (TypeScript, React.js, ChakraUI, Vite), improving performance by 25% and reducing bug reports by 90%.",
            "Implemented E2E and unit tests with Cypress, which optimized the CI/CD pipeline and enabled faster, more confident product deployments.",
            "Mentored and trained junior developers in React and TypeScript, significantly improving team productivity and enforcing best practices across the engineering department.",
        ],
    },
    {
        value: "5",
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
            "Established the UI/UX strategy for new projects, drastically improving usability and accessibility.",
            "Contributed to the development and maintenance of web applications, ensuring high performance, scalability, and code quality.",
            "Created and maintained clear technical documentation, reducing the gap between technical and non-technical teams.",
        ],
    },
];

export default function Career() {
    return <Milestones items={CAREER_MILESTONES} />;
}
