import { render, screen } from "@testing-library/react";

import { Card } from "./card";

const mockProps: TProject = {
    title: "habits",
    description: "A cool project that does amazing things",
    link: "https://github.com/user/project",
    image: "/projects/fallback.webp",
    technologies: ["React", "TypeScript", "Tailwind"],
};

describe("Card", () => {
    it("renders project title and description", () => {
        render(<Card {...mockProps} />);

        expect(screen.getByText(mockProps.title)).toBeInTheDocument();
        expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    });

    it("renders as external link", () => {
        render(<Card {...mockProps} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", mockProps.link);
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renders project image", () => {
        render(<Card {...mockProps} />);

        const image = screen.getByAltText(mockProps.title);
        expect(image).toBeInTheDocument();
    });

    it("renders all technologies", () => {
        render(<Card {...mockProps} />);

        mockProps.technologies.forEach((tech) => {
            expect(screen.getByText(tech)).toBeInTheDocument();
        });
    });

    it("renders learn more link", () => {
        render(<Card {...mockProps} />);

        expect(screen.getByText("Learn more")).toBeInTheDocument();
    });
});
