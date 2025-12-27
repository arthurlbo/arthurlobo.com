import { Separator } from "@repo/design-system/components";

interface IHeadingProps {
    title: string;
    description: string;
}

/**
 * Generic heading component to be used across different pages.
 * @param title - Main title of the page.
 * @param description - Description/subtitle of the page.
 */
export const Heading = ({ description, title }: IHeadingProps) => {
    return (
        <>
            <section className="flex w-full flex-col items-start gap-4">
                <h1 className="text-primary-100 text-3xl font-semibold">{title}</h1>

                <p className="text-primary-200 text-base leading-8 font-light xl:max-w-2xl">{description}</p>
            </section>

            <Separator className="my-4 hidden shrink-0 xl:flex" />
        </>
    );
};
