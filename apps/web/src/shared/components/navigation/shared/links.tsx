import {
    IconAddressBook,
    IconChartLine,
    IconHome2,
    IconMessageCircle,
    IconPalette,
    IconUser,
} from "@tabler/icons-react";

import { INavLinkProps, NavLink } from "./nav-link";

export const LINK_ITEMS: INavLinkProps[] = [
    {
        label: "Home",
        icon: IconHome2,
        link: "/",
    },
    {
        label: "About",
        icon: IconUser,
        link: "/about",
    },
    {
        label: "Projects",
        icon: IconPalette,
        link: "/projects",
    },
    {
        label: "Dashboard",
        icon: IconChartLine,
        link: "/dashboard",
    },
    {
        label: "Contact",
        icon: IconMessageCircle,
        link: "/contact",
    },
    {
        label: "Guestbook",
        icon: IconAddressBook,
        link: "/guestbook",
        disabled: true,
    },
];

export const Links = () => {
    return (
        <div className="flex w-full flex-col items-start gap-1">
            {LINK_ITEMS.map((item) => (
                <NavLink key={item.link} {...item} />
            ))}
        </div>
    );
};
