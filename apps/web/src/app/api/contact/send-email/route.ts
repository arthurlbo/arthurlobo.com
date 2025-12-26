import { NextRequest } from "next/server";

import { rateLimiter } from "@/shared/utils";
import { webEnv } from "@repo/env";
import { Resend } from "resend";

import { ContactEmail, contactFormSchema } from "@/features/contact";

const resend = new Resend(webEnv.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

        const rateLimit = rateLimiter({ ip, context: "contact" });

        if (!rateLimit.success) {
            return Response.json(
                {
                    error: "Too many requests. Please try again later.",
                },
                { status: 429 },
            );
        }

        const body = await request.json();

        const validatedData = contactFormSchema.parse(body);

        const { data, error } = await resend.emails.send({
            from: `Contact <${webEnv.CONTACT_FROM_EMAIL}>`,
            to: [webEnv.CONTACT_TO_EMAIL as string],
            subject: "New contact message!",
            react: ContactEmail(validatedData),
        });

        if (error) return Response.json({ error: "Failed to send message, please try again later." }, { status: 500 });

        return Response.json(data);
    } catch (_) {
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
