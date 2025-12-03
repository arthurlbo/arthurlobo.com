import { CtaCard, Divider, Links, Profile, Search, SocialLinks, Theme } from "./shared";

export const Desktop = () => (
    <aside className="border-border sticky top-0 hidden h-screen w-full max-w-[280px] shrink-0 flex-col items-start justify-start gap-4 overflow-x-hidden overflow-y-auto border-r p-4 xl:flex 2xl:border-transparent">
        <Profile />
        <Search />
        <Links />
        <Divider />
        <SocialLinks />
        <Divider />
        <Theme />
        <CtaCard />
    </aside>
);
