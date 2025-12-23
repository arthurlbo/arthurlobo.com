import { render, screen } from "@testing-library/react";

import { HomePictures } from "./pictures";

describe("HomePictures", () => {
    it("renders all picture cards", () => {
        render(<HomePictures />);

        expect(screen.getByAltText("Sunset on Balneário Camboriú - SC")).toBeInTheDocument();
        expect(screen.getByAltText("Estaleiro Beach - SC")).toBeInTheDocument();
        expect(screen.getByAltText("Me and my wife")).toBeInTheDocument();
        expect(screen.getByAltText("Sunset in Mal. Cândido Rondon - PR")).toBeInTheDocument();
        expect(screen.getByAltText("At Estaleiro Beach")).toBeInTheDocument();
        expect(screen.getByAltText("Balneário Camboriú skyline at dusk")).toBeInTheDocument();
    });

    it("renders correct number of cards", () => {
        render(<HomePictures />);

        const images = screen.getAllByRole("img");
        expect(images.length).toBe(6);
    });

    it("renders scrollable container", () => {
        const { container } = render(<HomePictures />);

        const section = container.querySelector("section");
        expect(section).toBeInTheDocument();
        expect(section).toHaveClass("overflow-x-auto");
    });
});
