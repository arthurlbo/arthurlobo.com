import { IconRocket, IconStar } from "@tabler/icons-react";
import { render } from "@testing-library/react";

import { Line } from "./line";

describe("Line", () => {
    it("renders with top placement", () => {
        const { container } = render(<Line leftIcon={IconRocket} rightIcon={IconStar} placement="top" />);

        const lineContainer = container.firstChild;
        expect(lineContainer).toBeInTheDocument();
        expect(lineContainer).toHaveClass("-mt-8");
    });

    it("renders with bottom placement", () => {
        const { container } = render(<Line leftIcon={IconRocket} rightIcon={IconStar} placement="bottom" />);

        const lineContainer = container.firstChild;
        expect(lineContainer).toBeInTheDocument();
        expect(lineContainer).toHaveClass("mt-8");
    });

    it("renders both icons", () => {
        render(<Line leftIcon={IconRocket} rightIcon={IconStar} placement="top" />);

        const svgs = document.querySelectorAll("svg");
        // 1 SVG para a linha + 2 SVGs dos ícones = 3 total
        expect(svgs.length).toBeGreaterThanOrEqual(3);
    });

    it("renders curved line svg", () => {
        const { container } = render(<Line leftIcon={IconRocket} rightIcon={IconStar} placement="top" />);

        const svg = container.querySelector('svg[viewBox="0 0 198 33"]');
        expect(svg).toBeInTheDocument();
    });

    it("rotates svg when placement is top", () => {
        const { container } = render(<Line leftIcon={IconRocket} rightIcon={IconStar} placement="top" />);

        const svg = container.querySelector('svg[viewBox="0 0 198 33"]');
        expect(svg).toHaveClass("rotate-180");
    });

    it("does not rotate svg when placement is bottom", () => {
        const { container } = render(<Line leftIcon={IconRocket} rightIcon={IconStar} placement="bottom" />);

        const svg = container.querySelector('svg[viewBox="0 0 198 33"]');
        expect(svg).not.toHaveClass("rotate-180");
    });
});
