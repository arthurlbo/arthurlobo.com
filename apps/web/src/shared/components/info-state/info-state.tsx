import Link from "next/link";

import { cn } from "@/shared/utils";
import { IconHome } from "@tabler/icons-react";

interface IProps {
    emoji: string;
    title: string;
    description: string;
    descriptionClassName?: string;
}

/**
 * Informational state component to display messages for some not available page or not-found.
 * @param emoji - Emoji to represent the info state.
 * @param title - Main title shown.
 * @param description - Description explaining the info state.
 * @param descriptionClassName - Additional Tailwind CSS classes for the description.
 */
export const InfoState = ({ title, description, descriptionClassName, emoji }: IProps) => {
    return (
        <section className="flex h-[calc(100vh-72px-32px)] w-full flex-col items-center justify-center gap-6 overflow-hidden xl:h-[calc(100vh-32px)]">
            <div className="flex flex-col items-center gap-4 text-3xl">
                <span>{emoji}</span>
                <h1 className="text-primary-100 font-bold">{title}</h1>
            </div>

            <span
                className={cn(
                    "text-primary-200 text-center text-base leading-relaxed font-normal",
                    descriptionClassName,
                )}
            >
                {description}
            </span>

            <Link
                href="/"
                className="bg-accent-500 text-accent-text hover:bg-accent-400 mt-2 flex h-10 w-auto items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold transition-all duration-300 ease-in-out"
            >
                <IconHome className="size-5" />
                <span>Go back to home</span>
            </Link>
        </section>
    );
};
