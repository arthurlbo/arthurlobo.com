import { render, screen } from "@testing-library/react";

import { Contact } from "./contact";

describe("Contact", () => {
    it("renders heading with title and description", () => {
        render(<Contact />);

        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(screen.getByText("Let's Connect!")).toBeInTheDocument();
    });

    it("renders profile image", () => {
        render(<Contact />);

        const image = screen.getByAltText("Profile");
        expect(image).toBeInTheDocument();
    });

    it("renders as a link to /contact", () => {
        render(<Contact />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/contact");
    });

    it("renders decorative lines with icons", () => {
        render(<Contact />);

        // Verifica que os SVGs foram renderizados (linha + ícones)
        const svgs = document.querySelectorAll("svg");
        expect(svgs.length).toBeGreaterThan(0);
    });
});
