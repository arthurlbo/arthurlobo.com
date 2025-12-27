import { render, screen } from "@testing-library/react";

import { Card } from "./card";

describe("Card", () => {
    it("renders children content", () => {
        render(
            <Card link="/test">
                <div>Test Content</div>
            </Card>,
        );

        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("renders as a link with correct href", () => {
        render(
            <Card link="/about">
                <div>Content</div>
            </Card>,
        );

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/about");
    });

    it("applies custom className", () => {
        render(
            <Card link="/test" className="custom-class">
                <div>Content</div>
            </Card>,
        );

        const link = screen.getByRole("link");
        expect(link).toHaveClass("custom-class");
    });

    it("renders arrow icon", () => {
        const { container } = render(
            <Card link="/test">
                <div>Content</div>
            </Card>,
        );

        // O ícone IconArrowUpRight renderiza como SVG
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
    });
});
