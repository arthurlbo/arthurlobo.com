import { ReactNode } from "react";

import { render, screen } from "@testing-library/react";

import { ContactEmail } from "./email";

jest.mock("@react-email/components", () => {
    const originalModule = jest.requireActual("@react-email/components");
    return {
        ...originalModule,
        Html: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        Head: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        Body: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        Container: ({ children }: { children: ReactNode }) => <div>{children}</div>,
        Preview: ({ children }: { children: ReactNode }) => <div data-testid="preview">{children}</div>,
        Tailwind: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    };
});

const mockProps = {
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, I'd like to discuss a project with you.",
};

describe("ContactEmail", () => {
    it("renders all contact information", () => {
        render(<ContactEmail {...mockProps} />);

        const nameElements = screen.getAllByText(/John Doe/);
        expect(nameElements.length).toBeGreaterThan(0);

        expect(screen.getByText(/john@example.com/)).toBeInTheDocument();
        expect(screen.getByText(/Hello, I'd like to discuss/)).toBeInTheDocument();
    });

    it("renders section labels", () => {
        render(<ContactEmail {...mockProps} />);

        expect(screen.getByText(/Name:/)).toBeInTheDocument();
        expect(screen.getByText(/Email:/)).toBeInTheDocument();
        expect(screen.getByText(/Message:/)).toBeInTheDocument();
    });

    it("renders heading", () => {
        render(<ContactEmail {...mockProps} />);

        expect(screen.getByText(/New message!/)).toBeInTheDocument();
    });

    it("handles multiline messages", () => {
        const multilineMessage = "Line 1\nLine 2\nLine 3";
        render(<ContactEmail {...mockProps} message={multilineMessage} />);

        expect(screen.getByText(/Line 1/)).toBeInTheDocument();
        expect(screen.getByText(/Line 2/)).toBeInTheDocument();
        expect(screen.getByText(/Line 3/)).toBeInTheDocument();
    });
});
