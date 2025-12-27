import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Drawer } from "./drawer";

describe("Drawer", () => {
    it("renders menu trigger button", () => {
        render(<Drawer />);
        const menuButton = screen.getByRole("button");
        expect(menuButton).toBeInTheDocument();
    });

    it("opens drawer on menu click", async () => {
        render(<Drawer />);

        const menuButton = screen.getByRole("button");
        fireEvent.click(menuButton);

        await waitFor(() => {
            expect(screen.getByRole("dialog")).toBeInTheDocument();
        });
    });
});
