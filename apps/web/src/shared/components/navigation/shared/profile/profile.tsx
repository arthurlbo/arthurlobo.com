import Image from "next/image";

import Me from "@/assets/me.webp";

import { Indicator } from "./indicator";

export const Profile = () => {
    return (
        <div className="group relative flex w-full items-center gap-3 xl:py-1">
            <div className="border-border relative h-14 w-14 shrink-0 overflow-hidden rounded-full border xl:h-[70px] xl:w-[70px]">
                <Image
                    src={Me}
                    alt="Profile"
                    priority
                    placeholder="blur"
                    className="h-full w-full object-cover object-top"
                />
            </div>

            <div className="flex flex-col items-start xl:gap-0.5">
                <span className="text-text-primary text-base font-semibold xl:text-xl">Arthur Lobo</span>
                <span className="text-text-secondary text-sm font-normal">@arthurlbo</span>
            </div>

            <Indicator />
        </div>
    );
};
