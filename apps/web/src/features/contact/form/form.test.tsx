import { toast } from "@repo/design-system/components";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { contactFormAction } from "./action";
import { ContactForm } from "./form";

jest.mock("./action", () => ({
    contactFormAction: jest.fn(),
}));

describe("ContactForm", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders all form fields", () => {
        render(<ContactForm />);

        expect(screen.getByPlaceholderText("What's your name?")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Tell me about your project/i)).toBeInTheDocument();
    });

    it("renders submit button", () => {
        render(<ContactForm />);

        expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
    });

    it("renders social navigation section", () => {
        render(<ContactForm />);

        expect(screen.getByText("You can also find me here:")).toBeInTheDocument();
    });

    it("shows error toast on submission failure", async () => {
        (contactFormAction as jest.Mock).mockResolvedValue({
            error: "Failed to send",
            success: false,
        });

        render(<ContactForm />);

        const nameInput = screen.getByPlaceholderText("What's your name?");
        const emailInput = screen.getByPlaceholderText("your@email.com");
        const messageInput = screen.getByPlaceholderText(/Tell me about your project/i);

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });
        fireEvent.change(messageInput, { target: { value: "Test message" } });

        const submitButton = screen.getByRole("button", { name: /send message/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith("Failed to send");
        });
    });

    it("shows success toast on successful submission", async () => {
        (contactFormAction as jest.Mock).mockResolvedValue({
            error: null,
            success: true,
        });

        render(<ContactForm />);

        const nameInput = screen.getByPlaceholderText("What's your name?");
        const emailInput = screen.getByPlaceholderText("your@email.com");
        const messageInput = screen.getByPlaceholderText(/Tell me about your project/i);

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });
        fireEvent.change(messageInput, { target: { value: "Test message" } });

        const submitButton = screen.getByRole("button", { name: /send message/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith("Thanks for contacting! I'll get back to you soon.");
        });
    });
});
