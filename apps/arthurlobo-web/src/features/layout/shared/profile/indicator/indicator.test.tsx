import { act, fireEvent, render, screen } from "@testing-library/react";

import { Indicator } from "./indicator";

describe("Indicator", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        act(() => {
            jest.runOnlyPendingTimers();
        });
        jest.useRealTimers();
    });

    it("renders indicator image", () => {
        render(<Indicator />);

        const indicator = screen.getByAltText("Indicator");
        expect(indicator).toBeInTheDocument();
    });

    it("adds animation class on click", () => {
        render(<Indicator />);

        const indicator = screen.getByAltText("Indicator");

        fireEvent.click(indicator);

        expect(indicator).toHaveClass("animate-move");
    });

    it("removes animation class after 5 seconds", () => {
        render(<Indicator />);

        const indicator = screen.getByAltText("Indicator");

        fireEvent.click(indicator);

        expect(indicator).toHaveClass("animate-move");

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(indicator).not.toHaveClass("animate-move");
    });
});
