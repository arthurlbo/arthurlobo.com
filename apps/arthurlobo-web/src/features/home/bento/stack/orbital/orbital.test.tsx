import { render } from "@testing-library/react";

import { Orbital } from "./orbital";

describe("Orbital", () => {
    it("renders svg container", () => {
        const { container } = render(<Orbital />);

        const svg = container.querySelector('svg[viewBox="0 0 240 180"]');
        expect(svg).toBeInTheDocument();
    });

    it("renders all orbital circles", () => {
        const { container } = render(<Orbital />);

        const circles = container.querySelectorAll("circle");
        // 7 círculos definidos no array circles
        expect(circles.length).toBe(7);
    });

    it("renders technology icons", () => {
        const { container } = render(<Orbital />);

        const foreignObjects = container.querySelectorAll("foreignObject");
        // Total de ícones: 1 + 2 + 2 + 1 = 6 ícones
        expect(foreignObjects.length).toBe(6);
    });

    it("renders with correct dimensions", () => {
        const { container } = render(<Orbital />);

        const svg = container.querySelector("svg");
        expect(svg).toHaveAttribute("viewBox", "0 0 240 180");
    });
});
