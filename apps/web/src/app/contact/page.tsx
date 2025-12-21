import { Metadata } from "next";

import { Heading } from "@/shared/components/ui";

import { ContactForm } from "@/features/contact";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Contact",
};

export default function Contact() {
    return (
        <>
            <Heading
                title="Contact"
                description="Interested in working together? Let's connect to discuss opportunities, exchange ideas, or just have a great conversation about tech."
            />

            <ContactForm />
        </>
    );
}
