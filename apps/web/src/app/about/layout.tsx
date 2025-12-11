import { ReactNode } from "react";

import type { Metadata } from "next";

import { ABOUT_NAVIGATION_LINKS } from "@/features/about";
import { Heading, NavigationTabs } from "@/shared/components/ui";

interface IProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "About",
};

export default function AboutLayout({ children }: IProps) {
    return (
        <>
            <Heading
                title="About"
                description="Discover who I am and dive into my journey, where passions, skills, and values come together to shape my technical path."
            />

            <NavigationTabs className="mt-2 xl:mt-0" links={ABOUT_NAVIGATION_LINKS} />

            {children}
        </>
    );
}
