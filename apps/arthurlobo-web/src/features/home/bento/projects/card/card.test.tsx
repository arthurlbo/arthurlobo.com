import mockImage from "@/assets/mock.webp";
import { render, screen } from "@testing-library/react";

import { Card } from "./card";

const mockProps = {
    alt: "Project Screenshot",
    src: mockImage,
    className: "top-4 left-8",
};

describe("Card", () => {
    it("renders image with correct alt text", () => {
        render(<Card {...mockProps} />);

        const image = screen.getByAltText("Project Screenshot");
        expect(image).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Card {...mockProps} className="custom-position" />);

        const cardElement = container.firstChild;
        expect(cardElement).toHaveClass("custom-position");
    });

    it("renders container with correct structure", () => {
        const { container } = render(<Card {...mockProps} />);

        const cardElement = container.firstChild;
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveClass("border-surface-500");
    });
});
