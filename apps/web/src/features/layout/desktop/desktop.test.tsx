import { render, screen } from "@testing-library/react";

import { Desktop } from "./desktop";

describe("Desktop", () => {
    it("renders all sidebar sections", () => {
        render(<Desktop />);

        // Verifica que o aside principal foi renderizado
        const sidebar = screen.getByRole("complementary");
        expect(sidebar).toBeInTheDocument();
    });

    it("renders with correct desktop-only classes", () => {
        const { container } = render(<Desktop />);

        const sidebar = container.querySelector("aside");
        expect(sidebar).toHaveClass("hidden");
        expect(sidebar).toHaveClass("xl:flex");
    });

    it("renders as sticky sidebar", () => {
        const { container } = render(<Desktop />);

        const sidebar = container.querySelector("aside");
        expect(sidebar).toHaveClass("sticky");
        expect(sidebar).toHaveClass("top-0");
    });
});
