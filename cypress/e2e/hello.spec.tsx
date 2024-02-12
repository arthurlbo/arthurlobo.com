import { Hello } from "@/components/ui/hello";

describe("<Hello />", () => {
    beforeEach(() => {
        cy.mount(<Hello />);
    });
    it("should render the component correctly", () => {
        cy.contains("Hello Dev 🥳").should("be.visible");

        cy.contains("Get started by editing").should("be.visible");
        cy.contains("src/app/page.tsx").should("be.visible");

        cy.contains("Arthur Lobo").should("have.attr", "href", "https://www.github.com/arthurlbo");
    });
    it("should open the link in a new tab", () => {
        cy.contains("Arthur Lobo")
            .should("have.attr", "href", "https://www.github.com/arthurlbo")
            .and("have.attr", "target", "_blank")
            .and("have.attr", "rel", "noreferrer");
    });
});
