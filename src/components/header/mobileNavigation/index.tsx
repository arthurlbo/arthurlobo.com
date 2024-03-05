import { navLinks, socialLinks } from "@/utils";

import { Menu } from "./menu";
import { NavLink } from "../nav-link";
import { Copy, SocialButton } from "@/components";

/**
 * Menu for mobile devices that will be displayed on the header.
 */
export const MobileNavigation = () => {
    return (
        <Menu>
            <div
                data-testid="mobile-nav"
                className="flex flex-1 flex-col items-center justify-center gap-8 pb-8 xl:hidden"
            >
                {navLinks.map((link, key) => (
                    <NavLink key={key} {...link} screen="mobile" />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-8 xl:hidden">
                <div className="flex items-center justify-center gap-4 xl:hidden">
                    {socialLinks.map((link, key) => (
                        <SocialButton key={key} {...link} section="header-mobile" />
                    ))}
                </div>

                <Copy section="header-mobile" />
            </div>
        </Menu>
    );
};
