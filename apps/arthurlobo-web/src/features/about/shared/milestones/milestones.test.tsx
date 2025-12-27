import logoMock from "@/assets/mock.webp";
import { render, screen } from "@testing-library/react";

import { Milestones } from "./milestones";

const mockItems = [
    {
        value: "item-1",
        title: "Software Engineer",
        organization: {
            name: "Tech Company",
            link: "https://company.com",
            logo: logoMock,
        },
        tags: ["Full-time"],
        period: "2021 - 2022",
        location: "Remote",
        impacts: ["Built systems"],
    },
    {
        value: "item-2",
        title: "Frontend Developer",
        organization: {
            name: "Another Company",
            link: "https://another.com",
            logo: logoMock,
        },
        tags: ["Contract"],
        period: "2020 - 2021",
        location: "São Paulo",
    },
];

describe("Milestones", () => {
    it("renders all milestone items", () => {
        render(<Milestones items={mockItems} />);

        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
        expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    });

    it("renders correct number of items", () => {
        render(<Milestones items={mockItems} />);

        expect(screen.getByText("Tech Company")).toBeInTheDocument();
        expect(screen.getByText("Another Company")).toBeInTheDocument();
    });

    it("renders empty list when no items provided", () => {
        const { container } = render(<Milestones items={[]} />);

        const section = container.querySelector("section");
        expect(section).toBeInTheDocument();
        expect(section?.children.length).toBe(0);
    });
});
