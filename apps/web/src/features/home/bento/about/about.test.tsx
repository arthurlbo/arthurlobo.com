import { render, screen } from "@testing-library/react";

import { About } from "./about";

describe("About", () => {
    it("renders heading with title and description", () => {
        render(<About />);

        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("A deeper look into my professional and personal journey.")).toBeInTheDocument();
    });

    it("renders timeline with events", () => {
        render(<About />);

        // Verifica alguns eventos da timeline
        expect(screen.getByText("Sooro Renner")).toBeInTheDocument();
        expect(screen.getByText("Wedding")).toBeInTheDocument();
    });

    it("renders as a link to /about", () => {
        render(<About />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/about");
    });
});
