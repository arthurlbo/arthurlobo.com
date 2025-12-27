import z from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(100, "Name must be at most 100 characters long"),
    email: z.email({ error: "Enter a valid email address" }),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters long")
        .max(500, "Message must be at most 500 characters long"),
});

export type TContactFormData = z.infer<typeof contactFormSchema>;
