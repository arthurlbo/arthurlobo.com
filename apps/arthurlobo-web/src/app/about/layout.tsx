import { ReactNode } from "react";

import { Heading, NavigationTabs } from "@/shared/components/ui";

import { ABOUT_NAVIGATION_LINKS } from "@/features/about";

interface IProps {
    children: ReactNode;
}

export default function AboutLayout({ children }: IProps) {
    return (
        <>
            <Heading
                title="About"
                description="Get to know the person behind the code. Discover my journey, the skills I've developed, and the values that drive my work."
            />

            <NavigationTabs className="mt-1 xl:mt-0" links={ABOUT_NAVIGATION_LINKS} />

            {children}
        </>
    );
}
