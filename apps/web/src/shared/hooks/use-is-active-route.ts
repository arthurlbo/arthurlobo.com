import { usePathname } from "next/navigation";

interface IProps {
    route: string;
    splitPosition?: number;
    hasNestedRoutes?: boolean;
}

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
