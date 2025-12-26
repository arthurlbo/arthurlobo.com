import { render, screen } from "@testing-library/react";

import mockImage from "../../../assets/mock.webp";
import { Card } from "./card";

const mockProps = {
    title: "My Awesome Project",
    description: "A cool project that does amazing things",
    link: "https://github.com/user/project",
    image: mockImage,
    technologies: ["React", "TypeScript", "Tailwind"],
};

describe("Card", () => {
    it("renders project title and description", () => {
        render(<Card {...mockProps} />);

        expect(screen.getByText("My Awesome Project")).toBeInTheDocument();
        expect(screen.getByText("A cool project that does amazing things")).toBeInTheDocument();
    });

    it("renders as external link", () => {
        render(<Card {...mockProps} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "https://github.com/user/project");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renders project image", () => {
        render(<Card {...mockProps} />);

        const image = screen.getByAltText("My Awesome Project");
        expect(image).toBeInTheDocument();
    });

    it("renders all technologies", () => {
        render(<Card {...mockProps} />);

        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("TypeScript")).toBeInTheDocument();
        expect(screen.getByText("Tailwind")).toBeInTheDocument();
    });

    it("renders learn more link", () => {
        render(<Card {...mockProps} />);

        expect(screen.getByText("Learn more")).toBeInTheDocument();
    });
});
