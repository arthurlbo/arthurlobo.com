import { render, screen } from "@testing-library/react";

import { Event } from "./event";

const mockProps = {
    title: "Started New Job",
    date: "Jan 2024",
    side: "left" as const,
    className: "",
};

describe("Event", () => {
    it("renders title and date", () => {
        render(<Event {...mockProps} />);

        expect(screen.getByText("Started New Job")).toBeInTheDocument();
        expect(screen.getByText("Jan 2024")).toBeInTheDocument();
    });

    it("renders with left side positioning", () => {
        render(<Event {...mockProps} side="left" />);

        expect(screen.getByText("Started New Job")).toBeInTheDocument();
    });

    it("renders with right side positioning", () => {
        render(<Event {...mockProps} side="right" />);

        expect(screen.getByText("Started New Job")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Event {...mockProps} className="custom-class" />);

        const element = container.firstChild;
        expect(element).toHaveClass("custom-class");
    });
});
