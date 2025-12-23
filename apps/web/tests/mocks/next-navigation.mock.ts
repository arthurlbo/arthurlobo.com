jest.mock("next/navigation", () => ({
    usePathname: jest.fn(),
}));
