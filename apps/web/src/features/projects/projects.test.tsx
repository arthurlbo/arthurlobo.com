import { fireEvent, render, screen } from "@testing-library/react";

import { ProjectsGrid } from "./projects";

describe("ProjectsGrid", () => {
    it("renders all project cards", () => {
        render(<ProjectsGrid />);

        const links = screen.getAllByRole("link");
        expect(links.length).toBeGreaterThan(0);
    });

    it("renders grid container", () => {
        const { container } = render(<ProjectsGrid />);

        const grid = container.querySelector("section");
        expect(grid).toBeInTheDocument();
        expect(grid).toHaveClass("grid");
    });

    it("handles mouse hover on card", () => {
        render(<ProjectsGrid />);

        const cards = screen.getAllByRole("link");
        const firstCard = cards[0]!.parentElement;

        // Hover não causa erros
        if (firstCard) {
            fireEvent.mouseEnter(firstCard);
            fireEvent.mouseLeave(firstCard);
        }

        expect(firstCard).toBeInTheDocument();
    });

    it("handles focus on card", () => {
        render(<ProjectsGrid />);

        const cards = screen.getAllByRole("link");
        const firstCard = cards[0]!.parentElement;

        // Focus não causa erros
        if (firstCard) {
            fireEvent.focus(firstCard);
            fireEvent.blur(firstCard);
        }

        expect(firstCard).toBeInTheDocument();
    });
});
