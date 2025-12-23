import { render, screen } from "@testing-library/react";

import { Stack } from "./stack";

describe("Stack", () => {
    it("renders heading with title and description", () => {
        render(<Stack />);

        expect(screen.getByText("Languages & Tools")).toBeInTheDocument();
        expect(screen.getByText("Discover my tech arsenal")).toBeInTheDocument();
    });

    it("renders orbital component", () => {
        const { container } = render(<Stack />);

        const svg = container.querySelector('svg[viewBox="0 0 240 180"]');
        expect(svg).toBeInTheDocument();
    });

    it("renders as a link to /about/stack", () => {
        render(<Stack />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/about/stack");
    });
});
