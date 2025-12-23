import { Button, Separator, Sheet, SheetClose, SheetContent, SheetTrigger } from "@repo/design-system/components";
import { IconMenu, IconX } from "@tabler/icons-react";

import { AppNavigation, Cta, Profile, Search, SocialNavigation, Theme } from "../../shared";

/**
 * Mobile drawer component.
 */
export const Drawer = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="icon" className="rounded-full">
                    <IconMenu />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" showDefaultCloseButton={false}>
                <div className="flex w-full items-center justify-between gap-4">
                    <Profile />

                    <SheetClose asChild>
                        <Button variant="icon" className="rounded-full">
                            <IconX />
                        </Button>
                    </SheetClose>
                </div>

                <Search />
                <AppNavigation />
                <Separator />
                <SocialNavigation />
                <Separator />
                <Theme />
                <Cta />
            </SheetContent>
        </Sheet>
    );
};
