import { useIsActiveRoute } from "@/shared/hooks";
import { IconHome } from "@tabler/icons-react";
import { render, screen } from "@testing-library/react";

import { LinkButton } from "./link-button";

const mockUseIsActiveRoute = useIsActiveRoute as jest.MockedFunction<typeof useIsActiveRoute>;

const mockProps = {
    label: "Home",
    icon: IconHome,
    link: "/home",
};

describe("LinkButton", () => {
    beforeEach(() => {
        mockUseIsActiveRoute.mockReturnValue(false);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders link with label and icon", () => {
        render(<LinkButton {...mockProps} />);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByRole("link")).toHaveAttribute("href", "/home");
    });

    it("renders as internal link by default", () => {
        render(<LinkButton {...mockProps} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("target", "_self");
        expect(link).not.toHaveAttribute("rel");
    });

    it("renders as external link when internalLink is false", () => {
        render(<LinkButton {...mockProps} internalLink={false} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("shows active state when route is active", () => {
        mockUseIsActiveRoute.mockReturnValue(true);
        render(<LinkButton {...mockProps} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("data-state", "active");
    });

    it("shows inactive state when route is not active", () => {
        mockUseIsActiveRoute.mockReturnValue(false);
        render(<LinkButton {...mockProps} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("data-state", "inactive");
    });

    it("hides label when variant is icon", () => {
        render(<LinkButton {...mockProps} variant="icon" />);

        expect(screen.queryByText("Home")).toHaveStyle({ display: "none" });
    });

    it("shows label when variant is button", () => {
        render(<LinkButton {...mockProps} variant="button" />);

        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("renders icon", () => {
        render(<LinkButton {...mockProps} />);

        const icon = document.querySelector("svg");
        expect(icon).toBeInTheDocument();
    });
});
