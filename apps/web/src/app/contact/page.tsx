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
                description="Let’s connect to discuss tech, leadership, or potential collaboration, I’m always up for a great conversation!"
            />

            <ContactForm />
        </>
    );
}
