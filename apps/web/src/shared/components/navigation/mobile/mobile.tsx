import Image from "next/image";

import Me from "@/assets/navigation/me.webp";

import { Drawer } from "./drawer";

export const Mobile = () => (
    <header className="flex w-full items-center justify-between p-4 xl:hidden">
        <div className="border-border relative h-14 w-14 shrink-0 overflow-hidden rounded-full border">
            <Image
                src={Me}
                alt="Profile"
                priority
                placeholder="blur"
                className="h-full w-full object-cover object-top"
            />
        </div>

        <Drawer />
    </header>
);
