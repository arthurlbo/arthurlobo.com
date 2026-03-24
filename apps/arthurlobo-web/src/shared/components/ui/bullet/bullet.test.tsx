import { render } from "@testing-library/react";

import { Bullet } from "./bullet";

describe("Bullet", () => {
    it("should render the bullet point correctly", () => {
        const { getByText } = render(<Bullet />);

        expect(getByText("•")).toBeInTheDocument();
    });
});
