import { SEO_CONFIG } from "@/shared/constants";

export const HomeHeading = () => {
    return (
        <section className="flex w-full flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
                <span className="text-text-tertiary text-xl  font-normal">Hello!</span>
                <h1 className="text-text-primary text-3xl  font-semibold">I’m Arthur 👋</h1>
            </div>

            <div className="text-text-tertiary flex items-center gap-4 text-sm leading-tight font-normal">
                <span>• Based in Curitiba, Paraná, Brazil</span>
                <span>• Working remotely</span>
            </div>

            <p className="text-text-secondary text-sm leading-8 font-light xl:max-w-[950px]">
                {SEO_CONFIG.description}
            </p>
        </section>
    );
};
