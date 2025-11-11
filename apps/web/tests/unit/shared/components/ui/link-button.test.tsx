import { LinkButton } from "@/shared/components";
import { IconCode } from "@tabler/icons-react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("LinkButton", () => {
    it("renders button text", () => {
        render(<LinkButton href="#" label="Click me" icon={IconCode} />);
        expect(screen.getByText("Click me")).toHaveTextContent("Click me");
    });

    it("renders link with expected attributes", () => {
        render(<LinkButton href="/docs" label="Docs" icon={IconCode} />);
        const link = screen.getByRole("link", { name: "Docs" });
        expect(link).toHaveAttribute("href", "/docs");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noreferrer");
        expect(link).toHaveAttribute("aria-label", "Docs");
    });

    it("renders the provided icon", () => {
        const { container } = render(<LinkButton href="#" label="Icon" icon={IconCode} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
    });
});
