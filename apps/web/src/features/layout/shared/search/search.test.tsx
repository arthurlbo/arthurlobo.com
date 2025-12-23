import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Search } from "./search";

describe("Search", () => {
    it("renders search trigger button", () => {
        render(<Search />);

        expect(screen.getByText("Quick search...")).toBeInTheDocument();
        expect(screen.getByText("CTRL+K")).toBeInTheDocument();
    });

    it("opens dialog on trigger click", async () => {
        render(<Search />);

        const trigger = screen.getByText("Quick search...");
        fireEvent.click(trigger);

        await waitFor(() => {
            expect(screen.getByPlaceholderText("Search or jump to...")).toBeInTheDocument();
        });
    });

    it("opens dialog with Ctrl+K keyboard shortcut", async () => {
        render(<Search />);

        fireEvent.keyDown(document, { key: "k", ctrlKey: true });

        await waitFor(() => {
            expect(screen.getByPlaceholderText("Search or jump to...")).toBeInTheDocument();
        });
    });

    it("opens dialog with Cmd+K keyboard shortcut", async () => {
        render(<Search />);

        fireEvent.keyDown(document, { key: "k", metaKey: true });

        await waitFor(() => {
            expect(screen.getByPlaceholderText("Search or jump to...")).toBeInTheDocument();
        });
    });

    it("renders search icon", () => {
        render(<Search />);

        const icon = document.querySelector("svg");
        expect(icon).toBeInTheDocument();
    });
});
