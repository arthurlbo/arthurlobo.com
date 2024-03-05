import Link from "next/link";

export interface NavLinkProps {
    label: string;
    href: string;
    screen?: "desktop" | "mobile";
}

/**
 * Navigation link component that will be displayed on the desktop and mobile main navigation.
 * @param label - Label of the link.
 * @param href - Href of the link.
 */
export const NavLink = ({ screen, label, href }: NavLinkProps) => {
    return (
        <Link
            data-testid={`nav-link-${screen}`}
            href={href}
            className="
                after:ease-out-cubic
                relative
                text-base
                font-semibold
                text-primary
                transition-all
                duration-300
                ease-in-out
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-right
                after:scale-x-0
                after:rounded-full
                after:bg-accent
                after:transition-transform
                after:duration-300
                after:will-change-transform
                after:content-['']
                hover:text-primary/80
                after:hover:origin-left
                after:hover:scale-x-100
                focus:outline-none
                focus:ring-0
                focus:duration-0
                after:focus:origin-left
                after:focus:scale-x-100
                xl:text-sm
                xl:font-medium
                xl:text-secondary
                xl:hover:text-secondary/80
            "
        >
            {label}
        </Link>
    );
};
