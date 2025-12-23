import { render, screen } from "@testing-library/react";

import { Dashboard } from "./dashboard";

describe("Dashboard", () => {
    it("renders heading with title and description", () => {
        render(<Dashboard />);

        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("View some stats about my dev activity.")).toBeInTheDocument();
    });

    it("renders chart component", () => {
        render(<Dashboard />);

        expect(screen.getByTestId("dashboard-chart")).toBeInTheDocument();
    });

    it("renders as a link to /dashboard", () => {
        render(<Dashboard />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/dashboard");
    });
});
