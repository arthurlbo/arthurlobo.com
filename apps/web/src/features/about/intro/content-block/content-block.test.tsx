import { IconRocket } from "@tabler/icons-react";
import { render, screen } from "@testing-library/react";

import { AboutContentBlock } from "./content-block";

const mockProps = {
    title: "My Journey",
    description: "This is a description about my journey in tech.",
    number: "01",
    icon: IconRocket,
    side: "right" as const,
};

describe("AboutContentBlock", () => {
    it("renders title and description", () => {
        render(<AboutContentBlock {...mockProps} />);

        expect(screen.getByText("My Journey")).toBeInTheDocument();
        expect(screen.getByText("This is a description about my journey in tech.")).toBeInTheDocument();
    });

    it("renders number label", () => {
        render(<AboutContentBlock {...mockProps} />);

        const numbers = screen.getAllByText("01");
        expect(numbers.length).toBeGreaterThan(0);
    });

    it("renders with left side alignment", () => {
        render(<AboutContentBlock {...mockProps} side="left" />);

        expect(screen.getByText("My Journey")).toBeInTheDocument();
    });

    it("renders with right side alignment", () => {
        render(<AboutContentBlock {...mockProps} side="right" />);

        expect(screen.getByText("My Journey")).toBeInTheDocument();
    });
});
