import Image from "next/image";

import Indicator from "@/assets/indicator.svg";
import Me from "@/assets/me.webp";

export const Profile = () => {
    return (
        <div className="group relative flex w-full items-center gap-3 py-1">
            <div className="border-border relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full border">
                <Image
                    src={Me}
                    alt="Profile"
                    priority
                    placeholder="blur"
                    className="h-full w-full object-cover object-top"
                />
            </div>

            <div className="flex flex-col items-start gap-0.5">
                <span className="text-text-primary text-xl font-semibold">Arthur Lobo</span>
                <span className="text-text-secondary text-sm font-normal">@arthurlbo</span>
            </div>

            <Image
                src={Indicator}
                alt="Indicator"
                width={40}
                priority
                className="group-hover:animate-move focus:animate-move absolute top-0.5 -right-1.5 h-auto focus:ring-0 focus:ring-offset-0 focus:outline-none"
            />
        </div>
    );
};
