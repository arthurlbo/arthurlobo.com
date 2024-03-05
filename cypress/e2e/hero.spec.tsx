describe("Hero section", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render correctly", () => {
        cy.contains("Hello there! I'm Arthur👋").should("exist");
        cy.contains("A Frontend Developer obsessed with delivering exceptional web experiences").should("exist");
        cy.get('[alt="Figma Indicator"]').should("exist");
        cy.get('[alt="Figma Border"]').should("exist");
        cy.contains("Know more about me").should("exist").should("have.attr", "href", "/#about");
    });

    it("should render the spline card", () => {
        cy.get("[data-testid=spline-card]").should("exist");
    });
});
