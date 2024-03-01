import { socialLinks } from "@/utils/constants";

import { BackgroundBeams } from "./background-beams";
import { Copy, SocialButton } from "@/components/ui";

export const Footer = () => {
    return (
        <section className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-12 md:pt-24 lg:gap-24">
            <h1 className="z-50 text-center text-4xl font-extrabold leading-relaxed text-primary md:max-w-4xl lg:text-[3rem]">
                Connect with me on any of these platforms to get in touch!
            </h1>
            <div className="z-50 flex items-center gap-5">
                {socialLinks.map((link, key) => (
                    <>
                        <SocialButton key={key} {...link} size="big" iconSize="big" />
                        <div className="h-6 w-px flex-none bg-hover last:hidden" />
                    </>
                ))}
            </div>
            <div className="z-50 mt-24 flex items-center gap-5">
                <Copy />
                <div className="h-3 w-px flex-none bg-hover" />
                <button className="rounded-lg bg-transparent text-sm font-semibold text-secondary transition-all duration-300 ease-in-out hover:text-primary focus:outline-none focus:ring-2  focus:ring-accent/70 focus:ring-offset-4  focus:ring-offset-background focus:duration-0">
                    Back to top
                </button>
            </div>
            <BackgroundBeams />
        </section>
    );
};
