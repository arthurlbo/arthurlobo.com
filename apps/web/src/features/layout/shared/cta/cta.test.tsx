import { render, screen } from "@testing-library/react";

import { Cta } from "./cta";

describe("Cta", () => {
    it("renders call to action text", () => {
        render(<Cta />);

        expect(screen.getByText("Let’s Connect")).toBeInTheDocument();
        expect(screen.getByText("Reach out to discuss projects, opportunities, or tech ideas.")).toBeInTheDocument();
    });

    it("renders as a link to /contact", () => {
        render(<Cta />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/contact");
        expect(link).toHaveAttribute("target", "_blank");
    });

    it("renders decorative sphere images", () => {
        render(<Cta />);

        expect(screen.getByAltText("Sphere Left")).toBeInTheDocument();
        expect(screen.getByAltText("Sphere Right")).toBeInTheDocument();
    });
});
