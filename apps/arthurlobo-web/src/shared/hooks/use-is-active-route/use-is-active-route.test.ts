import { usePathname } from "next/navigation";

import { renderHook } from "@testing-library/react";

import { useIsActiveRoute } from "./use-is-active-route";

const mockUsePathname = usePathname as jest.Mock;

describe("useIsActiveRoute", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("returns true when route is home and pathname is home", () => {
        mockUsePathname.mockReturnValue("/");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/" }));

        expect(result.current).toBe(true);
    });

    it("returns false when route is home but pathname is not", () => {
        mockUsePathname.mockReturnValue("/about");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/" }));

        expect(result.current).toBe(false);
    });

    it("returns true when route matches pathname exactly", () => {
        mockUsePathname.mockReturnValue("/about");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/about" }));

        expect(result.current).toBe(true);
    });

    it("returns true for nested routes when hasNestedRoutes is true", () => {
        mockUsePathname.mockReturnValue("/about/team");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/about", hasNestedRoutes: true }));

        expect(result.current).toBe(true);
    });

    it("returns false for nested routes when hasNestedRoutes is false", () => {
        mockUsePathname.mockReturnValue("/about/team");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/about", hasNestedRoutes: false }));

        expect(result.current).toBe(false);
    });

    it("respects splitPosition for partial route matching", () => {
        mockUsePathname.mockReturnValue("/blog/post");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/blog/post", splitPosition: 1 }));

        expect(result.current).toBe(true);
    });

    it("returns false when pathname has more segments than route", () => {
        mockUsePathname.mockReturnValue("/about/team/members");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/about" }));

        expect(result.current).toBe(false);
    });

    it("returns false when route segments don't match", () => {
        mockUsePathname.mockReturnValue("/contact");

        const { result } = renderHook(() => useIsActiveRoute({ route: "/about" }));

        expect(result.current).toBe(false);
    });
});
