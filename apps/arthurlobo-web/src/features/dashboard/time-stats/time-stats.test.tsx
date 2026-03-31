import { render, screen } from "@testing-library/react";

import { getTimeStats } from "./get-time-stats";
import { DashboardTimeStats } from "./time-stats";

jest.mock("./get-time-stats", () => ({
    getTimeStats: jest.fn(),
}));

const mockTimeData = {
    allTime: "1,200 hrs",
    totalTime: "45 hrs",
    startDate: "Oct 10",
    endDate: "Oct 17",
    updatedAt: "Last updated 2 mins ago",
    bestDay: "Tuesday",
    dailyAverage: "6.5 hrs",
};

describe("DashboardTimeStats", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the main time stats correctly", async () => {
        (getTimeStats as jest.Mock).mockResolvedValue(mockTimeData);

        // Resolve the async component
        render(await DashboardTimeStats());

        expect(screen.getByText("45 hrs")).toBeInTheDocument();
        expect(screen.getByText("Oct 10 - Oct 17")).toBeInTheDocument();
        expect(screen.getByText("Last updated 2 mins ago")).toBeInTheDocument();
    });

    it("renders all the stat cards with correct labels and values", async () => {
        (getTimeStats as jest.Mock).mockResolvedValue(mockTimeData);

        render(await DashboardTimeStats());

        expect(screen.getByText("Daily Average")).toBeInTheDocument();
        expect(screen.getByText("6.5 hrs")).toBeInTheDocument();
        expect(screen.getByText("last 7 days")).toBeInTheDocument();

        expect(screen.getByText("Best Day")).toBeInTheDocument();
        expect(screen.getByText("Tuesday")).toBeInTheDocument();

        expect(screen.getByText("All Time")).toBeInTheDocument();
        expect(screen.getByText("1,200 hrs")).toBeInTheDocument();
    });
});
