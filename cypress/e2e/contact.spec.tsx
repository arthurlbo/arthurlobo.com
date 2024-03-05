describe("Contact section", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render correctly", () => {
        cy.contains("Connect with me on any of these platforms to get in touch!").should("exist");
    });

    it("should render all the social buttons correctly", () => {
        cy.get("[data-testid=social-button-contact]")
            .should("exist")
            .should("have.length", 4)
            .should("have.attr", "target", "_blank")
            .and("have.attr", "rel", "noreferrer");
    });

    it("should render the copy", () => {
        cy.get("[data-testid=copy-]").should("exist");
    });
});
