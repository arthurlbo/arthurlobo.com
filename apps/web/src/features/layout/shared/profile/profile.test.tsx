import { render, screen } from "@testing-library/react";

import { Profile } from "./profile";

describe("Profile", () => {
    it("renders profile image", () => {
        render(<Profile />);

        const image = screen.getByAltText("Profile");
        expect(image).toBeInTheDocument();
    });

    it("renders user name and username", () => {
        render(<Profile />);

        expect(screen.getByText("Arthur Lobo")).toBeInTheDocument();
        expect(screen.getByText("@arthurlbo")).toBeInTheDocument();
    });

    it("renders indicator component", () => {
        render(<Profile />);

        const indicator = screen.getByAltText("Indicator");
        expect(indicator).toBeInTheDocument();
    });
});
