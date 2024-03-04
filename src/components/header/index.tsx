import Link from "next/link";
import Image from "next/image";

import { Container } from "./container";
import { MobileNavigation } from "./mobileNavigation";
import { DesktopNavigation } from "./desktop-navigation";

import LogoArthur from "@/assets/logo.svg";

/**
 * Header component.
 */
export const Header = () => {
    return (
        <Container>
            <Link
                tabIndex={0}
                href="/"
                className="rounded-lg focus:outline-0 focus:ring-2 focus:ring-accent/70 focus:ring-offset-4 focus:ring-offset-background"
            >
                <Image src={LogoArthur} alt="Logo Arthur Lobo" priority width={170} className="xl:-[170px] w-[140px]" />
            </Link>
            <DesktopNavigation />
            <MobileNavigation />
        </Container>
    );
};
