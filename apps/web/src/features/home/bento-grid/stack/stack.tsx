import { NestJS, NextJs, NodeJs, PostgreSQL, React, TypeScript } from "developer-icons";

import { Card, Heading } from "../shared";
import { IIconProps, Icon } from "./icon";
import { Orbital } from "./orbital";

const ICONS: IIconProps[] = [
    {
        icon: PostgreSQL,
        className: "top-6 left-1/2 -translate-x-1/2",
    },
    {
        icon: NextJs,
        className: "top-[62px] left-12",
    },
    {
        icon: NodeJs,
        className: "top-[62px] right-12",
    },
    {
        icon: TypeScript,
        className: "top-[118px] left-4 p-2",
    },
    {
        icon: React,
        className: "top-[92px] left-1/2 -translate-x-1/2",
    },
    {
        icon: NestJS,
        className: "top-[118px] right-4",
    },
];

// TODO - Improve animation
export const Stack = () => {
    return (
        <Card link="/about/stack" className="w-[260px]">
            <Heading
                title="Languages & Tools"
                description="Discover my tech arsenal"
                className="max-w-none items-center justify-end gap-0.5"
            />

            <Orbital />

            {ICONS.map((icon, index) => (
                <Icon key={index} {...icon} />
            ))}
        </Card>
    );
};
