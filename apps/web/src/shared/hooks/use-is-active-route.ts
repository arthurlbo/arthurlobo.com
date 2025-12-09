import { usePathname } from "next/navigation";

export const useIsActiveRoute = (route: string, splitPosition: number = 1) => {
    const pathname = usePathname();

    if (route === "/") {
        return pathname === "/";
    }

    return pathname.includes(route.split("/")[splitPosition] || "");
};
