import { IconButton } from "@/shared/components/ui";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@repo/design-system/components";
import { IconMenu, IconX } from "@tabler/icons-react";

import { AppNavigation, CtaCard, Divider, Profile, Search, SocialNavigation, Theme } from "../shared";

export const Drawer = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <IconButton icon={IconMenu} />
            </SheetTrigger>

            <SheetContent side="right" showDefaultCloseButton={false}>
                <div className="flex w-full items-center justify-between gap-4">
                    <Profile />

                    <SheetClose asChild>
                        <IconButton icon={IconX} />
                    </SheetClose>
                </div>

                <Search />
                <AppNavigation />
                <Divider />
                <SocialNavigation />
                <Divider />
                <Theme />
                <CtaCard />
            </SheetContent>
        </Sheet>
    );
};
