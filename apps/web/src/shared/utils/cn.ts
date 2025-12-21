import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges them with tailwind-merge.
 * @param inputs - An array of class names or class value inputs.
 */
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
