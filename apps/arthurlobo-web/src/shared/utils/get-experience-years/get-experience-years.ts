/**
 * Utility function to calculate my years of experience.
 */
export const getExperienceYears = () => {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();

    return currentYear - startYear;
};
