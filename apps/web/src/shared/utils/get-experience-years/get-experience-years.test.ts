import { getExperienceYears } from "./get-experience-years";

describe("getExperienceYears", () => {
    it("returns correct years of experience", () => {
        const result = getExperienceYears();
        const expectedYears = new Date().getFullYear() - 2021;

        expect(result).toBe(expectedYears);
    });
});
