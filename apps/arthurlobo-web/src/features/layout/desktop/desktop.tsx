import { Separator } from "@repo/design-system/components";

import { AppNavigation, Cta, Profile, Search, SocialNavigation, Theme } from "../shared";

/**
 * Sidebar component for desktop layout.
 */
export const Desktop = () => (
    <aside
        data-testid="desktop-sidebar"
        className="border-surface-500 scrollbar-thin sticky top-0 hidden h-screen w-full max-w-[280px] shrink-0 flex-col items-start justify-start gap-4 overflow-x-hidden overflow-y-auto border-r p-4 xl:flex 2xl:border-transparent"
    >
        <Profile />
        <Search />
        <AppNavigation />
        <Separator />
        <SocialNavigation />
        <Separator />
        <Theme />
        <Cta />
    </aside>
);
