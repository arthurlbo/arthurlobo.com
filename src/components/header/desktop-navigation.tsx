import { navLinks, socialLinks } from "@/utils/constants";

import { NavLink } from "./nav-link";
import { SocialButton } from "@/components/ui";

/**
 * Main navigation for desktop devices that will be displayed on the header.
 */
export const DesktopNavigation = () => {
    return (
        <>
            <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
                {navLinks.map((link, key) => (
                    <NavLink key={key} {...link} />
                ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
                {socialLinks.map((link, key) => (
                    <SocialButton key={key} {...link} />
                ))}
            </div>
        </>
    );
};