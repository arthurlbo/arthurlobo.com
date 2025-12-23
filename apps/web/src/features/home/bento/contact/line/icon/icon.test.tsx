import { IconRocket } from "@tabler/icons-react";
import { render } from "@testing-library/react";

import { Icon } from "./icon";

describe("Icon", () => {
    it("renders with top placement", () => {
        const { container } = render(<Icon icon={IconRocket} placement="top" />);

        const iconContainer = container.firstChild;
        expect(iconContainer).toBeInTheDocument();
        expect(iconContainer).toHaveClass("-mt-2");
    });

    it("renders with bottom placement", () => {
        const { container } = render(<Icon icon={IconRocket} placement="bottom" />);

        const iconContainer = container.firstChild;
        expect(iconContainer).toBeInTheDocument();
        expect(iconContainer).toHaveClass("-mb-2");
    });

    it("renders the provided icon", () => {
        render(<Icon icon={IconRocket} placement="top" />);

        // Tabler icons renderizam como SVG
        const svg = document.querySelector("svg");
        expect(svg).toBeInTheDocument();
    });
});
