import { cn } from "@/shared/utils";

/**
 * Visual separator rendered as a bullet point (•).
 *
 * @param className - Optional Tailwind classes for conditional visibility or styling.
 */
export const Bullet = ({ className }: { className?: string }) => {
    return <span className={cn("text-primary-200 text-sm font-normal", className)}>•</span>;
};
