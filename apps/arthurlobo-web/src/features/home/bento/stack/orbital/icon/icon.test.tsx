import { render } from "@testing-library/react";

import { Icon } from "./icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MockIcon = ({ className }: any) => <svg data-testid="mock-icon" className={className} />;

describe("Icon", () => {
    it("renders the provided icon", () => {
        const { container } = render(<Icon icon={MockIcon} />);

        const icon = container.querySelector('[data-testid="mock-icon"]');
        expect(icon).toBeInTheDocument();
    });

    it("applies custom className to container", () => {
        const { container } = render(<Icon icon={MockIcon} className="custom-class" />);

        const iconContainer = container.firstChild;
        expect(iconContainer).toHaveClass("custom-class");
    });

    it("renders with default styling when no className provided", () => {
        const { container } = render(<Icon icon={MockIcon} />);

        const iconContainer = container.firstChild;
        expect(iconContainer).toBeInTheDocument();
        expect(iconContainer).toHaveClass("border-surface-500");
    });
});
