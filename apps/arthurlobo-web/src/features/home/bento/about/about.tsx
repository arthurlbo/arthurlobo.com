import { Card, Heading } from "../shared";
import { Timeline } from "./timeline";

/*
 * About card used in the home page bento grid.
 */
export const About = () => {
    return (
        <Card link="/about">
            <Heading title="About" description="A deeper look into my professional and personal journey." />
            <Timeline />
        </Card>
    );
};
