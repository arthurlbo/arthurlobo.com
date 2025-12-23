import { SEO_CONFIG } from "@/shared/constants";
import { render, screen } from "@testing-library/react";

import { HomeHeading } from "./heading";

describe("HomeHeading", () => {
    it("renders name and greeting", () => {
        render(<HomeHeading />);

        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/I’m Arthur/i);
    });

    it("renders location and work status", () => {
        render(<HomeHeading />);

        expect(screen.getByText("• Based in Curitiba, Paraná, Brazil")).toBeInTheDocument();
        expect(screen.getByText("• Working remotely")).toBeInTheDocument();
    });

    it("renders description from SEO config", () => {
        render(<HomeHeading />);
        expect(screen.getByText(SEO_CONFIG.description)).toBeInTheDocument();
    });

    it("renders typing animation component", () => {
        const { container } = render(<HomeHeading />);

        const typingElement = container.querySelector(".text-primary-300");
        expect(typingElement).toBeInTheDocument();
    });
});
