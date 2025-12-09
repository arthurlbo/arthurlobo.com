interface IHeadingProps {
    title: string;
    description: string;
}

export const Heading = ({ description, title }: IHeadingProps) => {
    return (
        <>
            <section className="flex w-full flex-col items-start gap-4">
                <h1 className="text-primary-100 text-3xl font-semibold">{title}</h1>

                <p className="text-primary-200 text-base leading-8 font-light xl:max-w-2xl">{description}</p>
            </section>

            <div className="bg-surface-500 my-4 h-px w-full shrink-0" />
        </>
    );
};
