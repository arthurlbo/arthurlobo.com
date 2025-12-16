import Image from "next/image";

import Me from "@/assets/navigation/me.webp";

import { Drawer } from "./drawer";

export const Mobile = () => (
    <header className="border-surface-500 bg-background/50 fixed top-0 left-0 z-50 flex h-[72px] w-full items-center justify-between border-b p-4 backdrop-blur-sm xl:hidden">
        <div className="border-surface-500 relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border">
            <Image
                src={Me}
                alt="Profile"
                priority
                quality={100}
                placeholder="blur"
                className="h-full w-full object-cover object-top"
            />
        </div>

        <Drawer />
    </header>
);
