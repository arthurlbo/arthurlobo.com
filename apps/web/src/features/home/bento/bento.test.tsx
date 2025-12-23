import { render, screen } from "@testing-library/react";

import { HomeBento } from "./bento";

describe("HomeBento", () => {
    it("renders all bento grid cards", () => {
        render(<HomeBento />);

        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Languages & Tools")).toBeInTheDocument();
        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("renders all card links", () => {
        render(<HomeBento />);

        const links = screen.getAllByRole("link");
        expect(links.length).toBe(5);
    });

    it("renders bento grid container", () => {
        const { container } = render(<HomeBento />);

        const bentoGrid = container.firstChild;
        expect(bentoGrid).toBeInTheDocument();
        expect(bentoGrid).toHaveClass("bg-surface-700/30");
    });
});
