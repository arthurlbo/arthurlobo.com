import { Accordion } from "@repo/design-system/components";
import { IconCode } from "@tabler/icons-react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Card } from "./card";

const MockIcon = () => <svg data-testid="mock-icon" />;

const mockProps = {
    title: "Languages",
    icon: IconCode,
    technologies: [
        { label: "TypeScript", icon: MockIcon },
        { label: "JavaScript", icon: MockIcon },
        { label: "Python", icon: MockIcon },
    ],
};

describe("Card", () => {
    it("renders title", () => {
        render(
            <Accordion type="single" collapsible>
                <Card {...mockProps} />
            </Accordion>,
        );

        expect(screen.getByText("Languages")).toBeInTheDocument();
    });

    it("renders all technologies", async () => {
        render(
            <Accordion type="single" collapsible>
                <Card {...mockProps} />
            </Accordion>,
        );

        const trigger = screen.getByRole("button", { name: /Languages/i });

        fireEvent.click(trigger);

        await waitFor(() => {
            expect(screen.getByText("TypeScript")).toBeInTheDocument();
        });

        expect(screen.getByText("JavaScript")).toBeInTheDocument();
        expect(screen.getByText("Python")).toBeInTheDocument();
    });

    it("renders technology icons", async () => {
        render(
            <Accordion type="single" collapsible>
                <Card {...mockProps} />
            </Accordion>,
        );

        const trigger = screen.getByRole("button", { name: /Languages/i });

        fireEvent.click(trigger);

        await waitFor(() => {
            const icons = screen.getAllByTestId("mock-icon");
            expect(icons.length).toBe(3);
        });
    });

    it("works with empty technologies array", () => {
        render(
            <Accordion type="single" collapsible>
                <Card {...mockProps} technologies={[]} />
            </Accordion>,
        );

        expect(screen.getByText("Languages")).toBeInTheDocument();
        expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
    });
});
