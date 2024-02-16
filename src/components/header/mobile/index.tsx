import { navLinks, socialLinks } from "@/utils/constants";

import { Menu } from "./menu";
import { NavLink } from "../nav-link";
import { Copy, SocialButton } from "../../ui";

export const Mobile = () => {
    return (
        <Menu>
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {navLinks.map((link, key) => (
                    <NavLink key={key} {...link} />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((link, key) => (
                        <SocialButton key={key} {...link} />
                    ))}
                </div>
                <Copy />
            </div>
        </Menu>
    );
};