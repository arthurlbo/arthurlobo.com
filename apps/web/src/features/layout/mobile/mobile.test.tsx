import { render, screen } from "@testing-library/react";

import { Mobile } from "./mobile";

describe("Mobile", () => {
    it("renders profile image", () => {
        render(<Mobile />);

        const image = screen.getByAltText("Profile");
        expect(image).toBeInTheDocument();
    });

    it("renders drawer menu", () => {
        render(<Mobile />);

        const menuButton = screen.getByRole("button");
        expect(menuButton).toBeInTheDocument();
    });

    it("renders as fixed header", () => {
        const { container } = render(<Mobile />);

        const header = container.querySelector("header");
        expect(header).toHaveClass("fixed");
        expect(header).toHaveClass("top-0");
    });

    it("renders with mobile-only classes", () => {
        const { container } = render(<Mobile />);

        const header = container.querySelector("header");
        expect(header).toHaveClass("xl:hidden");
    });
});
