"use client";

import { startTransition, useActionState, useEffect } from "react";

import { Input, NavigationLink } from "@/shared/components/ui";
import { SOCIAL_NAVIGATION_LINKS } from "@/shared/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FieldGroup, toast } from "@repo/design-system/components";
import { IconAt, IconMessageCircle, IconSend, IconUser } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import { contactFormAction } from "./action";
import { TContactFormData, contactFormSchema } from "./schema";

export const ContactForm = () => {
    const [state, formAction, isPending] = useActionState<IPrevState, TContactFormData>(contactFormAction, {
        error: null,
        success: false,
    });

    const { control, reset, handleSubmit } = useForm<TContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onHandleSubmit = (data: TContactFormData) => {
        startTransition(() => {
            formAction(data);
        });
    };

    useEffect(() => {
        reset();

        if (state?.error) toast.error(state?.error);
        if (state?.success) toast.success("Thanks for contacting! I'll get back to you soon.");
    }, [state]);

    return (
        <section className="bg-surface-700/30 flex w-full flex-col items-start justify-start gap-6 rounded-2xl p-6">
            <form id="contactForm" className="w-full" onSubmit={handleSubmit(onHandleSubmit)}>
                <FieldGroup className="flex w-full flex-col items-start justify-start gap-4">
                    <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
                        <Input
                            name="name"
                            control={control}
                            label="Name"
                            placeholder="What's your name?"
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
                        placeholder="Tell me about your project, idea, or just say hi..."
                        rightIcon={IconMessageCircle}
                        isTextArea
                    />
                </FieldGroup>
            </form>

            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                <Button type="submit" form="contactForm" className="h-10 px-3 md:w-auto" isLoading={isPending}>
                    <IconSend className="size-5" />
                    <span>Send Message</span>
                </Button>

                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <span className="text-primary-300 shrink-0 text-xs font-semibold">You can also find me here:</span>

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
