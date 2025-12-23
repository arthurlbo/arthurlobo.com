import logoMock from "@/assets/mock.webp";
import { Accordion } from "@repo/design-system/components";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { MilestoneCard } from "./card";

const mockProps = {
    value: "test-1",
    title: "Software Engineer",
    organization: {
        name: "Tech Company",
        link: "https://company.com",
        logo: logoMock,
    },
    tags: ["Full-time", "Remote"],
    period: "Jan 2021 - Dec 2022",
    totalTime: "2 years",
    location: "São Paulo, Brazil",
    impacts: ["Built scalable systems", "Improved performance"],
};

describe("MilestoneCard", () => {
    it("renders basic information", () => {
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...mockProps} />
            </Accordion>,
        );

        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
        expect(screen.getByText("Tech Company")).toBeInTheDocument();
        expect(screen.getByText("Jan 2021 - Dec 2022")).toBeInTheDocument();
        expect(screen.getByText("2 years")).toBeInTheDocument();
        expect(screen.getByText("São Paulo, Brazil")).toBeInTheDocument();
    });

    it("renders organization link correctly", () => {
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...mockProps} />
            </Accordion>,
        );

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "https://company.com");
        expect(link).toHaveAttribute("target", "_blank");
    });

    it("renders all tags", () => {
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...mockProps} />
            </Accordion>,
        );

        expect(screen.getByText("Full-time")).toBeInTheDocument();
        expect(screen.getByText("Remote")).toBeInTheDocument();
    });

    it("renders logo with correct alt text", () => {
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...mockProps} />
            </Accordion>,
        );

        const logo = screen.getByAltText("Tech Company");
        expect(logo).toBeInTheDocument();
    });

    it("renders impacts when accordion is opened", async () => {
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...mockProps} />
            </Accordion>,
        );

        const trigger = screen.getByRole("button");
        fireEvent.click(trigger);

        await waitFor(() => {
            expect(screen.getByText("Built scalable systems")).toBeInTheDocument();
            expect(screen.getByText("Improved performance")).toBeInTheDocument();
        });
    });

    it("works without totalTime", () => {
        const { totalTime: _totalTime, ...propsWithoutTime } = mockProps;
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...propsWithoutTime} />
            </Accordion>,
        );

        expect(screen.getByText("São Paulo, Brazil")).toBeInTheDocument();
        expect(screen.queryByText("2 years")).not.toBeInTheDocument();
    });

    it("works without impacts", () => {
        render(
            <Accordion type="single" collapsible>
                <MilestoneCard {...mockProps} impacts={[]} />
            </Accordion>,
        );

        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
        expect(screen.queryByText("Built scalable systems")).not.toBeInTheDocument();
    });
});
