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
                description="See what I've built in action. Explore projects that showcase my technical skills, problem-solving approach, and the technologies I work with."
            />

            <ProjectsGrid />
        </>
    );
}
