describe("About section", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render correctly", () => {
        cy.contains("About Me").should("exist");
        cy.contains("Arthur Carneiro Lobo").should("exist");
        cy.contains(
            "I am 20 years old and currently based in Brazil. I began programming out of curiosity when I was 17, and it was love at first sight. Since then, I have been pushing myself day by day to improve my skills, particularly in Frontend Development, which is my true passion.",
        ).should("exist");
        cy.get('[alt="Arthur Carneiro Lobo"]').should("exist");
    });

    it("should render the CTA buttons", () => {
        cy.contains("Find me on LinkedIn")
            .parent()
            .should("have.attr", "href", "https://www.linkedin.com/in/arthurlbo")
            .and("have.attr", "target", "_blank")
            .and("have.attr", "rel", "noreferrer");
        cy.contains("Check out my GitHub")
            .parent()
            .should("have.attr", "href", "https://www.github.com/arthurlbo")
            .and("have.attr", "target", "_blank")
            .and("have.attr", "rel", "noreferrer");
    });

    it("should render all the topics correctly", () => {
        cy.get("[data-testid=about-topic]")
            .should("have.length", 3)
            .each((topic) => {
                cy.wrap(topic).within(() => {
                    cy.get("h3").should("exist");
                });
            });
    });
});
