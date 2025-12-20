import { NextRequest } from "next/server";



import { webEnv } from "@repo/env";
import { Resend } from "resend";



import { ContactEmail, contactFormSchema } from "@/features/contact";



























const resend = new Resend(webEnv.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validatedData = contactFormSchema.parse(body);
        if (!validatedData) return Response.json({ error: "Invalid form data" }, { status: 400 });

        const { data, error } = await resend.emails.send({
            from: `Contact <${webEnv.CONTACT_FROM_EMAIL}>`,
            to: [webEnv.CONTACT_TO_EMAIL as string],
            subject: "New contact message",
            react: ContactEmail(validatedData),
        });

        if (error) return Response.json({ error }, { status: 500 });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
