describe("Projects section", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render correctly", () => {
        cy.contains("Projects").should("exist");
        cy.contains("Some of my side projects").should("exist");
        cy.get("[data-testid=project-carousel]").should("exist");
        cy.get("[data-testid=project-carousel-content]").should("exist");
        cy.get("[data-testid=project-carousel-item]").should("exist");
        cy.get("[data-testid=project-carousel-previous]").should("exist");
        cy.get("[data-testid=project-carousel-next]").should("exist");
    });

    it("should render all the projects correctly", () => {
        cy.get("[data-testid=project]")
            .should("have.length", 5)
            .each((topic) => {
                cy.wrap(topic).within(() => {
                    cy.get("[data-testid=project-beam]").should("exist");

                    cy.get("h1").should("exist");
                    cy.get("p").should("have.length", 2);

                    cy.contains("View project on live")
                        .parent()
                        .and("have.attr", "target", "_blank")
                        .and("have.attr", "rel", "noreferrer");

                    cy.contains("Repository")
                        .parent()
                        .and("have.attr", "target", "_blank")
                        .and("have.attr", "rel", "noreferrer");

                    cy.get("[data-testid=technologies-wrapper]").should("exist");

                    cy.get("[data-testid=project-image]").should("exist");
                });
            });
    });

    it("should navigate through the projects carousel", () => {
        cy.get("[data-testid=project-carousel-next]").click({ force: true });
        setTimeout(() => {
            cy.get("[data-testid=project").eq(1).should("be.visible");
        }, 5000);
        cy.get("[data-testid=project-carousel-previous]").click({ force: true });
        setTimeout(() => {
            cy.get("[data-testid=project").eq(0).should("be.visible");
        }, 5000);
    });
});
