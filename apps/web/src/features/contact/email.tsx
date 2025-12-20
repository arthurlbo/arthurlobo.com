import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
    pixelBasedPreset,
} from "@react-email/components";

import { TContactFormData as IProps } from "./form";

export const ContactEmail = ({ email, name, message }: IProps) => {
    return (
        <Html>
            <Head />
            <Preview>Nova mensagem de contato de {name}</Preview>

            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                }}
            >
                <Body className="bg-gray-50 font-sans">
                    <Container className="mx-auto my-10 max-w-2xl rounded-lg bg-white p-8 shadow-lg">
                        <Heading className="mb-6 text-2xl font-bold text-gray-900">Nova Mensagem de Contato</Heading>

                        <Hr className="my-6 border-gray-200" />

                        <Section className="mb-4">
                            <Text className="mb-1 text-sm font-semibold text-gray-600">Nome:</Text>
                            <Text className="m-0 text-base text-gray-900">{name}</Text>
                        </Section>

                        <Section className="mb-4">
                            <Text className="mb-1 text-sm font-semibold text-gray-600">Email:</Text>
                            <Text className="m-0 text-base text-blue-600">{email}</Text>
                        </Section>

                        <Section className="mb-4">
                            <Text className="mb-1 text-sm font-semibold text-gray-600">Mensagem:</Text>
                            <Text className="m-0 text-base leading-relaxed whitespace-pre-wrap text-gray-900">
                                {message}
                            </Text>
                        </Section>

                        <Hr className="my-6 border-gray-200" />

                        <Text className="text-xs text-gray-500">
                            Esta mensagem foi enviada através do formulário de contato do site.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
