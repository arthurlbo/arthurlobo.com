import { usePathname } from "next/navigation";

interface IProps {
    route: string;
    splitPosition?: number;
    hasNestedRoutes?: boolean;
}

/**
 * Hook to determine if the current route is active.
 * @param route - Route to check against the current pathname.
 * @param splitPosition - Position to split the route for comparison.
 * @param hasNestedRoutes - Flag to indicate if the route has nested routes.
 */
export const useIsActiveRoute = ({ route, hasNestedRoutes = false, splitPosition = 1 }: IProps) => {
    const pathname = usePathname();

    if (route === "/") return pathname === "/";
    if (hasNestedRoutes) return pathname.startsWith(route);

    const routeSegments = route.split("/").filter(Boolean);
    const pathnameSegments = pathname.split("/").filter(Boolean);

    if (pathnameSegments.length > routeSegments.length) return false;

    for (let i = 0; i < splitPosition; i++) {
        if (routeSegments[i] !== pathnameSegments[i]) return false;
    }

    return true;
};
