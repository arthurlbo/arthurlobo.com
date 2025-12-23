import { render, screen } from "@testing-library/react";

import { Heading } from "./heading";

describe("Heading", () => {
    it("renders title and description", () => {
        render(<Heading title="My Page Title" description="This is a description of the page" />);

        expect(screen.getByText("My Page Title")).toBeInTheDocument();
        expect(screen.getByText("This is a description of the page")).toBeInTheDocument();
    });

    it("renders title as h1", () => {
        render(<Heading title="My Page Title" description="Description" />);

        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("My Page Title");
    });

    it("renders separator", () => {
        const { container } = render(<Heading title="Title" description="Description" />);

        const separator = container.querySelector('[data-slot="separator"]');
        expect(separator).toBeInTheDocument();
    });
});
