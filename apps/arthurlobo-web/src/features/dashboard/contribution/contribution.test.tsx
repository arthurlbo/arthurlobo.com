import { TooltipProvider } from "@repo/design-system/components";
import { render, screen } from "@testing-library/react";

import { DashboardContribution } from "./contribution";
import { getContribution } from "./get-contribution";

jest.mock("./get-contribution", () => ({
    getContribution: jest.fn(),
}));

const mockData = {
    weeks: [[{ level: 1, count: 5, date: "2023-01-01" }]],
    months: [{ name: "Jan", totalWeeks: 4 }],
    insights: [
        { label: "Total PRs", value: 12, suffix: "PRs" },
        { label: "Total Commits", value: 150 },
    ],
};

describe("DashboardContribution", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the title and insights correctly", async () => {
        (getContribution as jest.Mock).mockResolvedValue(mockData);

        render(<TooltipProvider>{await DashboardContribution()}</TooltipProvider>);

        expect(screen.getByText("Contributions")).toBeInTheDocument();
        expect(screen.getByText("Total PRs")).toBeInTheDocument();
        expect(screen.getByText("12")).toBeInTheDocument();
    });

    it("renders the Graph component with data from the fetch", async () => {
        (getContribution as jest.Mock).mockResolvedValue(mockData);
        render(<TooltipProvider>{await DashboardContribution()}</TooltipProvider>);
        expect(screen.getByText("Jan")).toBeInTheDocument();
    });
});
