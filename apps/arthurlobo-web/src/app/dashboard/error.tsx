"use client";

import { IInfoStateProps, InfoState } from "@/shared/components/ui";

interface IProps {
    error: Error & { digest?: string };
}

export default function Error({ error }: IProps) {
    const isRateLimitError = error.message === "RATE_LIMIT_REACHED";

    const content: IInfoStateProps = isRateLimitError
        ? {
              emoji: "⏳",
              title: "Hold on!",
              description: "Too many requests in a short period. Please wait a few moments and try again.",
              descriptionClassName: "max-w-[330px]",
          }
        : {
              emoji: "❌",
              title: "Failed to Load Dashboard",
              description: "The dashboard data could not be loaded at this time. Please try again later.",
              descriptionClassName: "max-w-xs",
          };

    return <InfoState {...content} />;
}
