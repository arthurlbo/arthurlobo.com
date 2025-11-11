import Link from "next/link";

import { cn } from "@/shared/utils";
import { TablerIcon } from "@tabler/icons-react";

interface IProps {
    href: string;
    label: string;
    icon: TablerIcon;
    className?: string;
}

export const LinkButton = ({ className, href, label, icon: Icon }: IProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={cn(
                "flex items-center gap-1 rounded-md px-4 py-2",
                "bg-foreground text-primary-foreground hover:bg-foreground/90 text-sm font-semibold",
                "transition-all duration-300 ease-in-out",
                className,
            )}
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </Link>
    );
};
