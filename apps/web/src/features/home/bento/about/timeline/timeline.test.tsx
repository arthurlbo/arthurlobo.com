import { render, screen } from "@testing-library/react";

import { Timeline } from "./timeline";

describe("Timeline", () => {
    it("renders all events", () => {
        render(<Timeline />);

        expect(screen.getByText("Sooro Renner")).toBeInTheDocument();
        expect(screen.getByText("Wedding")).toBeInTheDocument();
        expect(screen.getByText("Analítica S/A")).toBeInTheDocument();
        expect(screen.getByText("Adam Robo")).toBeInTheDocument();
        expect(screen.getByText("College")).toBeInTheDocument();
    });

    it("renders event dates", () => {
        render(<Timeline />);

        expect(screen.getByText("Jul 2025 - Present")).toBeInTheDocument();
        expect(screen.getByText("Dec 01, 2024")).toBeInTheDocument();
        expect(screen.getByText("Dec 2023 - Jul 2025")).toBeInTheDocument();
    });

    it("renders timeline container", () => {
        const { container } = render(<Timeline />);

        const timeline = container.firstChild;
        expect(timeline).toBeInTheDocument();
    });
});
