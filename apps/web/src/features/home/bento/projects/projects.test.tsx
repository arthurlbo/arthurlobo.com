import { render, screen } from "@testing-library/react";

import { Projects } from "./projects";

describe("Projects", () => {
    it("renders heading with title and description", () => {
        render(<Projects />);

        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Dive into my latest projects and creations.")).toBeInTheDocument();
    });

    it("renders all project images", () => {
        render(<Projects />);

        expect(screen.getByAltText("Time Capsule project")).toBeInTheDocument();
        expect(screen.getByAltText("Delta Company project")).toBeInTheDocument();
        expect(screen.getByAltText("Yazi.tv project")).toBeInTheDocument();
    });

    it("renders as a link to /projects", () => {
        render(<Projects />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/projects");
    });
});
