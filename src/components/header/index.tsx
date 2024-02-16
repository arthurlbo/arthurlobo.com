import Link from "next/link";
import Image from "next/image";

import { Mobile } from "./mobile";
import { Desktop } from "./desktop";

import LogoArthur from "@/assets/logo.svg";

export const Header = () => {
    return (
        <div className="flex h-[70px] w-full max-w-[100vw] items-center justify-between overflow-hidden border-b border-hover bg-transparent px-5 xl:h-[90px] xl:border-b-0 xl:px-28 xl:pb-0">
            <Link href="/">
                <Image src={LogoArthur} alt="Logo Arthur Lobo" priority width={170} className="xl:-[170px] w-[140px]" />
            </Link>

            <Desktop />

            <Mobile />
        </div>
    );
};
