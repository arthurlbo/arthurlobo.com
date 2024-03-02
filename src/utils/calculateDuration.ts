import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

/**
 * Calculate the duration between two dates in years and months.
 * @param startDate - Start date.
 * @param endDate - End date.
 */
export function calculateDuration(startDate: string, endDate: string) {
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const diff = dayjs.duration(end.diff(start));
    const years = diff.years();
    const months = diff.months() + 1;

    return `${years > 0 ? `${years} yr` : ""} ${months} mos`;
}
