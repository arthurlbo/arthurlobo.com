import Link from "next/link";

export interface NavLinkProps {
    label: string;
    href: string;
}

export const NavLink = ({ label, href }: NavLinkProps) => {
    return (
        <Link
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
