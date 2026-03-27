import { Icon as TIcon } from "@tabler/icons-react";

interface IProps {
    label: string;
    value: string;
    icon: TIcon;
    period?: string;
}

export const Card = ({ period, label, value, icon: Icon }: IProps) => {
    return (
        <div className="bg-accent-500 flex w-full flex-col items-start justify-start gap-2 rounded-xl p-4">
            <div className="text-accent-text-secondary flex w-full items-start justify-between gap-4">
                <div className="flex flex-1 items-start gap-2">
                    <Icon size={16} />
                    <span className="text-sm leading-tight">{label}</span>
                </div>

                {period && <span className="text-xs">{period}</span>}
            </div>

            <span className="text-accent-text text-2xl font-bold">{value}</span>
        </div>
    );
};
