import { HeroPattern } from "@/components/ui/hero-pattern";

describe("<HeroPattern />", () => {
    beforeEach(() => {
        cy.mount(<HeroPattern />);
    });

    it("should render the SVG", () => {
        cy.get("svg").should("exist");
    });

    it("should have the correct dimensions", () => {
        cy.get("svg").should("have.attr", "width", "1217");
        cy.get("svg").should("have.attr", "height", "479");
    });
});
