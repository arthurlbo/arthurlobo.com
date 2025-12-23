import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
    pixelBasedPreset,
} from "@react-email/components";

import { TContactFormData as IProps } from "../form";

/**
 * Contact email template.
 * @param name - Visitor's name that are contacting.
 * @param email - Visitor's email address.
 * @param message - Visitor's message.
 */
export const ContactEmail = ({ email, name, message }: IProps) => {
    return (
        <Html>
            <Head />
            <Preview>New contact message from {name}</Preview>

            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body className="bg-gray-50 font-sans">
                    <Container className="m-10">
                        <Heading className="mb-6 text-xl font-bold text-gray-900">New message!</Heading>

                        <Section className="mb-1">
                            <Text className="mb-1 text-base font-semibold text-gray-900">Name:</Text>
                            <Text className="text-sm text-gray-600">{name}</Text>
                        </Section>

                        <Section className="mb-1">
                            <Text className="mb-1 text-base font-semibold text-gray-900">Email:</Text>
                            <Text className="text-sm text-blue-600">{email}</Text>
                        </Section>

                        <Section className="mb-1">
                            <Text className="mb-1 text-base font-semibold text-gray-900">Message:</Text>
                            <Text className="text-sm leading-relaxed whitespace-pre-wrap text-gray-600">{message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
