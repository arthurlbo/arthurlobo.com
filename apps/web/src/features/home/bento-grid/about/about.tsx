import { Card, Heading } from "../shared";
import { Timeline } from "./timeline";

export const About = () => {
    return (
        <Card link="/about">
            <Heading
                title="About"
                description="A deeper look into my professional and personal journey."
                className="z-10 max-w-3xs shrink-0 p-4"
            />

            <Timeline />
        </Card>
    );
};
