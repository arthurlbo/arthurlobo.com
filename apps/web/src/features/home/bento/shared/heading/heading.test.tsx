import { render, screen } from "@testing-library/react";

import { Heading } from "./heading";

describe("Heading", () => {
    it("renders title and description", () => {
        render(<Heading title="Projects" description="View my latest work" />);

        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("View my latest work")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Heading title="Test" description="Description" className="custom-class" />);

        const heading = container.firstChild;
        expect(heading).toHaveClass("custom-class");
    });

    it("renders with default styling when no className provided", () => {
        const { container } = render(<Heading title="Test" description="Description" />);

        const heading = container.firstChild;
        expect(heading).toBeInTheDocument();
    });
});
