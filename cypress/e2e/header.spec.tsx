describe("Header", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render logo", () => {
        cy.get("[alt='Logo Arthur Lobo']").should("exist");
    });

    it("should render the desktop nav correctly", () => {
        cy.get("[data-testid=desktop-nav]").should("exist");
        cy.get("[data-testid=nav-link-desktop]").should("exist").should("have.length", 5);
        cy.get("[data-testid=social-button-header-desktop]")
            .should("exist")
            .should("have.length", 4)
            .should("have.attr", "target", "_blank")
            .and("have.attr", "rel", "noreferrer");

        cy.get("[data-testid=nav-link-mobile]").should("not.be.visible");
        cy.get("[data-testid=mobile-nav]").should("not.be.visible");
        cy.get("[data-testid=social-button-header-mobile]").should("not.be.visible");
        cy.get("[data-testid=copy-section-mobile]").should("not.exist");
    });

    it("should render the mobile header correctly", () => {
        cy.viewport(1024, 768).then(() => {
            cy.get("[data-testid=mobile-menu-button]").should("be.visible");

            cy.get("[data-testid=desktop-nav]").should("not.be.visible");
            cy.get("[data-testid=social-button-header-desktop]").should("not.be.visible");
            cy.get("[data-testid=nav-link-desktop]").should("not.be.visible");
        });
    });

    it("should open the mobile nav when clicking on the menu button", () => {
        cy.viewport(1024, 768).then(() => {
            cy.get("[data-testid=mobile-menu-button]").should("be.visible").click();

            setTimeout(() => {
                cy.get("[data-testid=mobile-nav]").should("be.visible");
                cy.get("[data-testid=nav-link-mobile]").should("be.visible").should("have.length", 5);

                cy.get("[data-testid=social-button-header-mobile]")
                    .should("be.visible")
                    .should("have.length", 4)
                    .should("have.attr", "target", "_blank")
                    .and("have.attr", "rel", "noreferrer");

                cy.get("[data-testid=copy-section-mobile]").should("be.visible");
            }, 5000);
        });
    });
});
