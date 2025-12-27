import { IconUser } from "@tabler/icons-react";
import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";

import { Input } from "./input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestWrapper = ({ isTextArea = false, label }: any) => {
    const { control } = useForm({
        defaultValues: {
            testField: "",
        },
    });

    return (
        <Input
            name="testField"
            control={control}
            label={label}
            placeholder="Enter text..."
            rightIcon={IconUser}
            isTextArea={isTextArea}
        />
    );
};

describe("Input", () => {
    it("renders input field with label", () => {
        render(<TestWrapper label="Test Label" />);

        expect(screen.getByText("Test Label")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
    });

    it("renders as textarea when isTextArea is true", () => {
        render(<TestWrapper isTextArea label="Test Label" />);

        const textarea = screen.getByPlaceholderText("Enter text...");
        expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("renders as input when isTextArea is false", () => {
        render(<TestWrapper isTextArea={false} label="Test Label" />);

        const input = screen.getByPlaceholderText("Enter text...");
        expect(input.tagName).toBe("INPUT");
    });

    it("renders without label when not provided", () => {
        render(<TestWrapper />);

        expect(screen.queryByText("Test Label")).not.toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
    });

    it("renders right icon", () => {
        render(<TestWrapper label="Test Label" />);

        const icon = document.querySelector("svg");
        expect(icon).toBeInTheDocument();
    });
});
