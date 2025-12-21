import { Card, Heading } from "../shared";
import { Orbital } from "./orbital";

/*
 * Stack card used in the home page bento grid.
 */
export const Stack = () => {
    return (
        <Card link="/about/stack" className="lg:w-[260px]">
            <Heading
                title="Languages & Tools"
                description="Discover my tech arsenal"
                className="max-w-none items-center justify-end gap-0.5"
            />

            <Orbital />
        </Card>
    );
};
