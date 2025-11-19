import { IconButton } from "@/shared/components/ui";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@repo/design-system/components";
import { IconMenu, IconX } from "@tabler/icons-react";

import { CtaCard, Divider, Links, Profile, Search, SocialLinks, Theme } from "../shared";

export const Drawer = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <IconButton icon={IconMenu} />
            </SheetTrigger>

            <SheetContent
                side="right"
                showDefaultCloseButton={false}
                className="bg-background flex h-screen w-full max-w-screen flex-col gap-4 overflow-y-auto p-4 md:max-w-[420px]"
            >
                <div className="flex w-full items-center justify-between gap-4">
                    <Profile />

                    <SheetClose asChild>
                        <IconButton icon={IconX} />
                    </SheetClose>
                </div>

                <Search />
                <Links />
                <Divider />
                <SocialLinks />
                <Divider />
                <Theme />
                <CtaCard />
            </SheetContent>
        </Sheet>
    );
};
