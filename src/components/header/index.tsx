import Link from "next/link";
import Image from "next/image";

import { Mobile } from "./mobile";
import { Desktop } from "./desktop";

import LogoArthur from "@/assets/logo.svg";

export const Header = () => {
    return (
        <div className="absolute left-0 top-0 flex h-[70px] w-full max-w-[100vw] items-center justify-between border-b border-hover bg-transparent px-5 xl:h-[90px] xl:border-b-0 xl:px-28 xl:pb-0">
            <Link
                tabIndex={0}
                href="/"
                className="rounded-lg focus:outline-0 focus:ring-2 focus:ring-accent/70 focus:ring-offset-4 focus:ring-offset-background"
            >
                <Image src={LogoArthur} alt="Logo Arthur Lobo" priority width={170} className="xl:-[170px] w-[140px]" />
            </Link>

            <Desktop />

            <Mobile />
        </div>
    );
};
