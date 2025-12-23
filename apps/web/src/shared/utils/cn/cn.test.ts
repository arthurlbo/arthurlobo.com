import { cn } from "./cn";

describe("cn", () => {
    it("merges multiple class names", () => {
        const result = cn("text-red-500", "bg-blue-500");
        expect(result).toBe("text-red-500 bg-blue-500");
    });

    it("handles conditional classes", () => {
        const result = cn("base-class", true && "conditional-class", false && "hidden-class");
        expect(result).toBe("base-class conditional-class");
    });

    it("merges conflicting Tailwind classes", () => {
        const result = cn("p-4", "p-8");
        expect(result).toBe("p-8");
    });

    it("handles undefined and null values", () => {
        const result = cn("text-black", undefined, null, "bg-white");
        expect(result).toBe("text-black bg-white");
    });

    it("handles arrays of classes", () => {
        const result = cn(["text-sm", "font-bold"], "text-red-500");
        expect(result).toBe("text-sm font-bold text-red-500");
    });

    it("handles objects with boolean values", () => {
        const result = cn({
            "text-red-500": true,
            "bg-blue-500": false,
            "font-bold": true,
        });
        expect(result).toBe("text-red-500 font-bold");
    });

    it("returns empty string when no arguments", () => {
        const result = cn();
        expect(result).toBe("");
    });

    it("merges duplicate classes", () => {
        const result = cn("text-red-500", "text-red-500", "bg-blue-500");
        expect(result).toBe("text-red-500 bg-blue-500");
    });
});
