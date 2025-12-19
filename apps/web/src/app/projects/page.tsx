import { Metadata } from "next";

import { Heading } from "@/shared/components/ui";

import { ProjectsGrid } from "@/features/projects";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Projects",
};

export default function ProjectsPage() {
    return (
        <>
            <Heading
                title="Projects"
                description="A collection of projects that reflect my journey as a developer, showcasing the technologies I work with and the problems I solve."
            />

            <ProjectsGrid />
        </>
    );
}
