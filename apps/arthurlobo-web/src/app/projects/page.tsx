import { Metadata } from "next";

import { Heading } from "@/shared/components/ui";

import { ProjectsShowcase, getProjects } from "@/features/projects";

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day (60 * 60 * 24)

export const metadata: Metadata = {
    title: "Projects",
};

export default async function Projects() {
    const projects = await getProjects();

    return (
        <>
            <Heading
                title="Projects"
                description="See what I've built in action. Explore projects that showcase my technical skills, problem-solving approach, and the technologies I work with."
            />

            <ProjectsShowcase projects={projects} />
        </>
    );
}
