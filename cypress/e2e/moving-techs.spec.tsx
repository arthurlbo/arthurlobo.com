describe("Moving Techs section", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render correctly", () => {
        cy.get("[data-testid=moving-techs]").should("exist");
        cy.get("[data-testid=moving-techs] > ul").should("exist").should("have.css", "animation-play-state", "running");
        cy.get("[data-testid=moving-techs] > ul > li").should("exist");
        cy.get("[data-testid=moving-techs] > ul > li > svg").should("exist");
        cy.get("[data-testid=moving-techs] > div").should("exist").should("have.length", 2);
    });
});
