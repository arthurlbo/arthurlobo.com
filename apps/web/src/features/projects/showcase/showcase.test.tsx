import { render, screen } from "@testing-library/react";

import { ProjectsShowcase } from "./showcase";

const mockProjects: TProject[] = [
    {
        title: "habits",
        description: "Description for project one.",
        image: "/projects/fallback.webp",
        link: "https://example.com/one",
        technologies: ["React", "TypeScript"],
    },
    {
        title: "yazitv",
        description: "Description for project two.",
        image: "/projects/fallback.webp",
        link: "https://example.com/two",
        technologies: ["React", "TypeScript"],
    },
];

describe("ProjectsShowcase", () => {
    it("should render a card for each project", () => {
        render(<ProjectsShowcase projects={mockProjects} />);

        expect(screen.getByText("habits")).toBeInTheDocument();
        expect(screen.getByText("Description for project one.")).toBeInTheDocument();

        expect(screen.getByText("yazitv")).toBeInTheDocument();
        expect(screen.getByText("Description for project two.")).toBeInTheDocument();
    });
});
