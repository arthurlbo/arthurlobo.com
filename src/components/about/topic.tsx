import { ReactNode } from "react";

import { IconType } from "@/lib/iconType";

export interface TopicProps {
    icon: IconType;
    children: ReactNode;
}

/**
 * Topic component that will be used in the About section.
 * @param icon - Icon to be displayed.
 * @param children - Content to be displayed.
 */
export const Topic = ({ icon: Icon, children }: TopicProps) => {
    return (
        <div
            data-testid="about-topic"
            className="relative z-50 flex min-h-[123px] w-full flex-row items-center gap-5 rounded-2xl border border-hover bg-background p-6"
        >
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-hover bg-transparent">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            {children}
        </div>
    );
};
