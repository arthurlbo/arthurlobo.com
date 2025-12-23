import { render, screen } from "@testing-library/react";

import { SocialNavigation } from "./social";

describe("SocialNavigation", () => {
    it("renders social section label", () => {
        render(<SocialNavigation />);

        expect(screen.getByText("Social")).toBeInTheDocument();
    });

    it("renders social links", () => {
        render(<SocialNavigation />);

        const links = screen.getAllByRole("link");
        expect(links.length).toBeGreaterThan(0);
    });
});
