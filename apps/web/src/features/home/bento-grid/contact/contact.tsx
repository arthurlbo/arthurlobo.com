import Image from "next/image";

import Me from "@/assets/navigation/me.webp";
import { IconAt, IconBrandInstagram, IconBrandLinkedin, IconCalendarWeek } from "@tabler/icons-react";

import { Card, Heading } from "../shared";
import { Line } from "./line";

export const Contact = () => {
    return (
        <Card link="/contact" className="flex-col items-center justify-between gap-4 p-4 lg:w-[260px]">
            <Heading
                title="Contact"
                description="Let's Connect!"
                className="h-auto max-w-none items-center justify-start gap-0.5 p-0"
            />

            <div className="relative flex h-full w-full flex-col items-center justify-center">
                <Line placement="top" leftIcon={IconAt} rightIcon={IconBrandLinkedin} />

                <div className="border-surface-500 bg-background absolute top-1/2 left-1/2 z-20 h-20 w-20 shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border p-1 transition-all duration-700 ease-in-out group-hover:scale-110">
                    <Image
                        src={Me}
                        alt="Profile"
                        priority
                        quality={100}
                        placeholder="blur"
                        className="h-full w-full rounded-full object-cover object-top"
                    />
                </div>

                <Line placement="bottom" leftIcon={IconBrandInstagram} rightIcon={IconCalendarWeek} />
            </div>
        </Card>
    );
};
