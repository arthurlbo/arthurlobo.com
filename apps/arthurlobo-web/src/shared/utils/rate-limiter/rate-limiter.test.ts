import { rateLimiter } from "./rate-limiter";

describe("Rate Limiter", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it("should allow a request if it is within the limit", () => {
        const response = rateLimiter({
            ip: "192.168.0.1",
            maxRequests: 5,
            windowMs: 1000,
        });

        expect(response.success).toBe(true);
        expect(response.remaining).toBe(4);
    });

    it("should block requests when the limit is exceeded", () => {
        const options = {
            ip: "192.168.0.2",
            maxRequests: 2,
            windowMs: 1000,
        };

        rateLimiter(options);
        const secondResponse = rateLimiter(options);

        expect(secondResponse.success).toBe(true);
        expect(secondResponse.remaining).toBe(0);

        const thirdResponse = rateLimiter(options);

        expect(thirdResponse.success).toBe(false);
        expect(thirdResponse.remaining).toBe(0);
    });

    it("should renew the limit after the window (windowMs) has passed", () => {
        const options = {
            ip: "192.168.0.3",
            maxRequests: 1,
            windowMs: 1000,
        };

        rateLimiter(options);
        const blockedResponse = rateLimiter(options);
        expect(blockedResponse.success).toBe(false);

        jest.advanceTimersByTime(1100);

        const successResponse = rateLimiter(options);
        expect(successResponse.success).toBe(true);
        expect(successResponse.remaining).toBe(0);
    });

    it("should treat different contexts independently for the same IP", () => {
        const ip = "192.168.0.4";

        rateLimiter({ ip, context: "login", maxRequests: 1 });
        const resLogin = rateLimiter({ ip, context: "login", maxRequests: 1 });

        const resSignup = rateLimiter({ ip, context: "signup", maxRequests: 1 });

        expect(resLogin.success).toBe(false);
        expect(resSignup.success).toBe(true);
    });

    it("should trigger autoCleanup correctly without errors", () => {
        const options = {
            ip: "192.168.0.5",
            maxRequests: 5,
            windowMs: 5000,
        };

        rateLimiter(options);

        jest.advanceTimersByTime(6000);

        const res = rateLimiter(options);
        expect(res.success).toBe(true);
    });
});
