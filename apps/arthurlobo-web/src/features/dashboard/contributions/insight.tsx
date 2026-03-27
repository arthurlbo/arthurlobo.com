export interface IInsightProps {
    label: string;
    value: number;
    suffix?: string;
}

export const Insight = ({ label, value, suffix }: IInsightProps) => {
    return (
        <div className="border-surface-500 bg-surface-700/30 relative flex w-full flex-col rounded-lg border p-4">
            <div className="flex items-end gap-1">
                <span className="text-3xl font-extrabold text-[#39d353]">{value.toFixed(0)}</span>
                {suffix && <span className="text-primary-300 pb-1 text-xs">{suffix}</span>}
            </div>

            <span className="text-primary-300 text-sm">{label}</span>
        </div>
    );
};
