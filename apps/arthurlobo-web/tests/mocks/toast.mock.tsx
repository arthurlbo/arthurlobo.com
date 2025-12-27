jest.mock("@repo/design-system/components", () => ({
    ...jest.requireActual("@repo/design-system/components"),
    toast: {
        error: jest.fn(),
        success: jest.fn(),
    },
}));
