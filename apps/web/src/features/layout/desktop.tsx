import { Separator } from "@repo/design-system/components";

import { AppNavigation, CtaCard, Profile, Search, SocialNavigation, Theme } from "./shared";

export const Desktop = () => (
    <aside className="border-surface-500 scrollbar-thin sticky top-0 hidden h-screen w-full max-w-[280px] shrink-0 flex-col items-start justify-start gap-4 overflow-x-hidden overflow-y-auto border-r p-4 xl:flex 2xl:border-transparent">
        <Profile />
        <Search />
        <AppNavigation />
        <Separator />
        <SocialNavigation />
        <Separator />
        <Theme />
        <CtaCard />
    </aside>
);
