import { render, screen } from "@testing-library/react";

import { InfoState } from "./info-state";

const mockProps = {
    emoji: "🔧",
    title: "Under Construction",
    description: "This page is currently being built. Check back soon!",
};

describe("InfoState", () => {
    it("renders emoji, title and description", () => {
        render(<InfoState {...mockProps} />);

        expect(screen.getByText("🔧")).toBeInTheDocument();
        expect(screen.getByText("Under Construction")).toBeInTheDocument();
        expect(screen.getByText("This page is currently being built. Check back soon!")).toBeInTheDocument();
    });

    it("renders home link button", () => {
        render(<InfoState {...mockProps} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/");
        expect(screen.getByText("Go back to home")).toBeInTheDocument();
    });

    it("applies custom description className", () => {
        render(<InfoState {...mockProps} descriptionClassName="custom-class" />);

        const description = screen.getByText(mockProps.description);
        expect(description).toHaveClass("custom-class");
    });

    it("renders without custom className", () => {
        render(<InfoState {...mockProps} />);

        const description = screen.getByText(mockProps.description);
        expect(description).toBeInTheDocument();
    });
});
