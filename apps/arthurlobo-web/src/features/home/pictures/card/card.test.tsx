import mockImage from "@/assets/mock.webp";
import { render, screen } from "@testing-library/react";

import { Card } from "./card";

const mockProps = {
    src: mockImage,
    alt: "Beautiful sunset at the beach",
    className: "",
};

describe("Card", () => {
    it("renders image with correct alt text", () => {
        render(<Card {...mockProps} />);

        const image = screen.getByAltText("Beautiful sunset at the beach");
        expect(image).toBeInTheDocument();
    });

    it("renders alt text as caption", () => {
        render(<Card {...mockProps} />);

        const captions = screen.getAllByText("Beautiful sunset at the beach");
        expect(captions.length).toBeGreaterThanOrEqual(1);
    });

    it("applies custom className", () => {
        const { container } = render(<Card {...mockProps} className="custom-rotation" />);

        const card = container.firstChild;
        expect(card).toHaveClass("custom-rotation");
    });

    it("renders with default styling when no className provided", () => {
        const { container } = render(<Card {...mockProps} />);

        const card = container.firstChild;
        expect(card).toBeInTheDocument();
        expect(card).toHaveClass("h-[200px]");
    });
});
