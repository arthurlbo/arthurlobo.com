import { CtaCard, Divider, Links, Profile, Search, SocialLinks, Theme } from "./shared";

export const Desktop = () => (
    <aside className="border-border fixed top-0 left-0 hidden h-screen w-full max-w-[280px] flex-col items-start justify-start gap-4 overflow-x-hidden overflow-y-auto border-r p-4 xl:flex">
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
