import { ReactNode } from "react";

import { IconType } from "@/lib/iconType";

export interface TopicsProps {
    icon: IconType;
    children: ReactNode;
}

export const Topics = ({ icon: Icon, children }: TopicsProps) => {
    return (
        <div className="relative z-50 flex min-h-[123px] w-full flex-row items-center gap-5 rounded-2xl border border-hover bg-background p-6">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-hover bg-transparent">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            {children}
        </div>
    );
};
