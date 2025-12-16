import { ElementType } from "react";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@repo/design-system/components";
import { TablerIcon } from "@tabler/icons-react";
import { DeveloperIconProps } from "developer-icons/dist/icon";

interface ITechnology {
    label: string;
    icon: ElementType<DeveloperIconProps> | TablerIcon;
}

export interface ICardProps {
    title: string;
    icon: TablerIcon;
    technologies: ITechnology[];
}

export const Card = ({ title, technologies, icon: Icon }: ICardProps) => {
    return (
        <AccordionItem
            value={title}
            className="group flex w-full flex-col items-start justify-start gap-4 border-none bg-transparent p-0"
        >
            <AccordionTrigger className="border-surface-500 hover:border-accent-400 flex w-full cursor-pointer items-center justify-start gap-4 rounded-none border-b px-0 pt-0 pb-4 transition-all duration-300 ease-in-out">
                <div className="bg-surface-700/30 border-surface-500 group-hover:border-accent-400 flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300 ease-in-out group-hover:-rotate-6">
                    <Icon className="text-accent-300 h-5 w-5" />
                </div>

                <span className="text-primary-100 flex-1 text-xl font-bold">{title}</span>
            </AccordionTrigger>

            <AccordionContent className="flex h-full w-full flex-col gap-4">
                <div className="flex w-full flex-wrap items-start justify-start gap-2">
                    {technologies.map(({ label, icon: Icon }) => (
                        <div
                            key={label}
                            className="border-surface-500 text-primary-100 bg-surface-700/30 flex items-center justify-center gap-2 rounded-full border px-4 py-2"
                        >
                            <Icon className="h-4 w-4" />
                            <span className="text-xs font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};
