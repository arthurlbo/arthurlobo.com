import { render, screen } from "@testing-library/react";

import { AppNavigation } from "./app";

describe("AppNavigation", () => {
    it("renders navigation container", () => {
        const { container } = render(<AppNavigation />);

        const nav = container.firstChild;
        expect(nav).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        render(<AppNavigation />);

        const links = screen.getAllByRole("link");
        expect(links.length).toBeGreaterThan(0);
    });
});
