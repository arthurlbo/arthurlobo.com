/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useTheme } from "next-themes";

import { Theme } from "./theme";

jest.mock("next-themes", () => ({
    useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

describe("Theme", () => {
    beforeEach(() => {
        mockUseTheme.mockReturnValue({
            theme: "light",
            setTheme: jest.fn(),
        } as any);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders theme label after mount", async () => {
        render(<Theme />);

        await waitFor(() => {
            expect(screen.getByText("Config")).toBeInTheDocument();
            expect(screen.getByText("Theme")).toBeInTheDocument();
        });
    });

    it("renders light and dark theme buttons", async () => {
        render(<Theme />);

        await waitFor(() => {
            const buttons = screen.getAllByRole("button");
            expect(buttons.length).toBe(2);
        });
    });

    it("calls setTheme when clicking theme button", async () => {
        const setThemeMock = jest.fn();
        mockUseTheme.mockReturnValue({
            theme: "light",
            setTheme: setThemeMock,
        } as any);

        render(<Theme />);

        await waitFor(() => {
            const buttons = screen.getAllByRole("button");
            fireEvent.click(buttons[1]!); // Click dark theme button
        });

        expect(setThemeMock).toHaveBeenCalledWith("dark");
    });

    it("highlights active theme", async () => {
        mockUseTheme.mockReturnValue({
            theme: "dark",
            setTheme: jest.fn(),
        } as any);

        render(<Theme />);

        await waitFor(() => {
            const buttons = screen.getAllByRole("button");
            expect(buttons[1]).not.toHaveClass("border-transparent");
        });
    });
});
