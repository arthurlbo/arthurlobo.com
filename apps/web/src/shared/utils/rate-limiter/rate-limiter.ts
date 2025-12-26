import { TIME } from "@/shared/constants";

interface IRateLimiterOptions {
    ip: string;
    context?: string;
    maxRequests?: number;
    windowMs?: number;
}

interface IRateLimiterResponse {
    success: boolean;
    remaining: number;
}

let lastCleanup = Date.now();
const requests = new Map<string, number[]>();

/**
 * Automatically cleans up old request timestamps to free memory.
 * @param now - Current timestamp.
 * @param windowMs - Time window in milliseconds.
 */
function autoCleanup(now: number, windowMs: number) {
    if (now - lastCleanup > windowMs) {
        lastCleanup = now;

        for (const [requestKey, timestamps] of requests.entries()) {
            const validTimestamps = timestamps.filter((time) => now - time < windowMs);

            if (validTimestamps.length === 0) {
                requests.delete(requestKey);
            } else {
                requests.set(requestKey, validTimestamps);
            }
        }
    }
}

/**
 * Simple in-memory rate limiter to prevent abuse of certain actions (e.g., form submissions).
 * @param ip - User's IP address.
 * @param context - Optional context to differentiate between different actions.
 * @param maxRequests - Maximum number of requests allowed within the time window.
 * @param windowMs - Time window in milliseconds.
 */
export function rateLimiter({
    ip,
    context = "",
    maxRequests = 3,
    windowMs = TIME.oneHourInMs,
}: IRateLimiterOptions): IRateLimiterResponse {
    const now = Date.now();

    autoCleanup(now, windowMs);

    const requestKey = `${context}:${ip}`;

    const userRequests = requests.get(requestKey) || [];
    const recentRequests = userRequests.filter((time) => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
        requests.set(requestKey, recentRequests);

        return {
            success: false,
            remaining: 0,
        };
    }

    recentRequests.push(now);
    requests.set(requestKey, recentRequests);

    return {
        success: true,
        remaining: maxRequests - recentRequests.length,
    };
}
