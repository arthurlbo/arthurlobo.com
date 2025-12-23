import { useIsActiveRoute } from "@/shared/hooks";
import { IconHome, IconUser } from "@tabler/icons-react";
import { render, screen } from "@testing-library/react";

import { NavigationTabs } from "./tabs";

const mockUseIsActiveRoute = useIsActiveRoute as jest.MockedFunction<typeof useIsActiveRoute>;

const mockLinks = [
    { label: "Home", icon: IconHome, link: "/home" },
    { label: "Profile", icon: IconUser, link: "/profile" },
];

describe("NavigationTabs", () => {
    beforeEach(() => {
        mockUseIsActiveRoute.mockReturnValue(false);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders all navigation tabs", () => {
        render(<NavigationTabs links={mockLinks} />);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("renders correct number of links", () => {
        render(<NavigationTabs links={mockLinks} />);

        const links = screen.getAllByRole("link");
        expect(links.length).toBe(2);
    });

    it("applies custom className", () => {
        const { container } = render(<NavigationTabs links={mockLinks} className="custom-class" />);

        const section = container.querySelector("section");
        expect(section).toHaveClass("custom-class");
    });

    it("renders with scrollable container", () => {
        const { container } = render(<NavigationTabs links={mockLinks} />);

        const section = container.querySelector("section");
        expect(section).toHaveClass("overflow-x-auto");
    });

    it("renders empty when no links provided", () => {
        render(<NavigationTabs links={[]} />);

        const links = screen.queryAllByRole("link");
        expect(links.length).toBe(0);
    });
});
