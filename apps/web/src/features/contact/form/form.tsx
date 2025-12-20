"use client";

import { Input, NavigationLink } from "@/shared/components/ui";
import { SOCIAL_NAVIGATION_LINKS } from "@/shared/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FieldGroup } from "@repo/design-system/components";
import { IconAt, IconMessageCircle, IconSend, IconUser } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import { TContactFormData, contactFormSchema } from "@/features/contact/form/schema";

export const ContactForm = () => {
    const { control, handleSubmit } = useForm<TContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onHandleSubmit = (data: TContactFormData) => {
        console.log(data);
    };

    return (
        <section className="bg-surface-700/30 flex w-full flex-col items-start justify-start gap-6 rounded-2xl p-6">
            <form id="contactForm" className="w-full" onSubmit={handleSubmit(onHandleSubmit)}>
                <FieldGroup className="flex w-full flex-col items-start justify-start gap-4">
                    <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
                        <Input
                            name="name"
                            control={control}
                            label="Name"
                            placeholder="tell me your name"
                            rightIcon={IconUser}
                        />

                        <Input
                            name="email"
                            control={control}
                            label="Email"
                            placeholder="your@email.com"
                            rightIcon={IconAt}
                        />
                    </div>

                    <Input
                        name="message"
                        control={control}
                        label="Message"
                        placeholder="type your message"
                        rightIcon={IconMessageCircle}
                        isTextArea
                    />
                </FieldGroup>
            </form>

            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                <Button type="submit" form="contactForm" className="h-10 px-3 md:w-auto" isLoading={false}>
                    <IconSend className="size-5" />
                    <span>Send message</span>
                </Button>

                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <span className="text-primary-300 shrink-0 text-xs font-semibold">Or find me on social media:</span>

                    <div className="flex w-full items-center justify-center gap-4">
                        {SOCIAL_NAVIGATION_LINKS.map((item) => (
                            <NavigationLink key={item.link} {...item} variant="icon" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
