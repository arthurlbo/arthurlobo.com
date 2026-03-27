type TTimeStats = {
    totalTime: string;
    bestDay: string;
    dailyAverage: string;
    allTime: string;
    startDate: string;
    endDate: string;
    updatedAt: string;
};

type TContributionMonth = { name: string; totalWeeks: number };

type TContributionDay = {
    key: string;
    date: string;
    count: number;
    level: number;
};

type TContributionInsight = { label: string; value: number; suffix?: string };

type TContribution = {
    months: TContributionMonth[];
    weeks: TContributionDay[][];
    insights: TContributionInsight[];
};
