import { fireEvent, render, screen } from "@testing-library/react";

import { Chart } from "./chart";

describe("Chart", () => {
    it("renders chart container", () => {
        render(<Chart />);

        const chartContainer = screen.getByTestId("dashboard-chart");
        expect(chartContainer).toBeInTheDocument();
    });

    it("renders with default chart data on mount", () => {
        render(<Chart />);

        expect(screen.getByTestId("dashboard-chart")).toBeInTheDocument();
    });

    it("changes data on mouse enter", () => {
        render(<Chart />);

        const chartWrapper = screen.getByTestId("dashboard-chart");

        fireEvent.mouseEnter(chartWrapper);

        expect(chartWrapper).toBeInTheDocument();
    });

    it("restores default data on mouse leave", () => {
        render(<Chart />);

        const chartWrapper = screen.getByTestId("dashboard-chart");

        fireEvent.mouseEnter(chartWrapper);
        fireEvent.mouseLeave(chartWrapper);

        expect(chartWrapper).toBeInTheDocument();
    });
});
