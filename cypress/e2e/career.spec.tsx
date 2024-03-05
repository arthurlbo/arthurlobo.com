describe("Career section", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render correctly", () => {
        cy.contains("Career").should("exist");
        cy.contains("My work history").should("exist");
        cy.get("[data-testid=career-tracing-beam]").should("exist");
    });

    it("should render all the experiences correctly", () => {
        cy.get("[data-testid=career-experience]")
            .should("have.length", 3)
            .each((experience, index) => {
                cy.wrap(experience).within(() => {
                    cy.get("h1").should("exist");
                    cy.get("h2").should("exist");
                    cy.get("h3").should("exist");
                    cy.get("h4").should("exist");

                    if (index < 2) {
                        cy.get("ul").should("exist");
                        cy.get("li").should("exist");
                        cy.get("[data-testid=technologies-wrapper]").should("exist");
                    }

                    cy.get("[data-testid=experience-point]").should("exist");
                });
            });
    });
});
