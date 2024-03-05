import { socialLinks } from "@/utils";

import { ScrollToTop } from "./scroll-to-top";
import { BackgroundBeams } from "./background-beams";
import { Copy, FadeInWhileInView, SocialButton } from "@/components";

/**
 * Contact section.
 */
export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative flex w-full flex-col items-center justify-center gap-6 md:gap-12 md:pt-24 lg:gap-24"
        >
            <FadeInWhileInView initial={{ y: -40 }} animate={{ y: 0 }}>
                <h1 className="z-50 text-center text-4xl font-extrabold leading-relaxed text-primary md:max-w-4xl lg:text-[3rem]">
                    Connect with me on any of these platforms to get in touch!
                </h1>
            </FadeInWhileInView>

            <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }}>
                <div className="z-50 flex items-center gap-5">
                    {socialLinks.map((link, key) => (
                        <>
                            <SocialButton key={key} {...link} size="big" iconSize="big" section="contact" />
                            <div className="h-6 w-px flex-none bg-hover last:hidden" />
                        </>
                    ))}
                </div>
            </FadeInWhileInView>

            <FadeInWhileInView initial={{ y: 40 }} animate={{ y: 0 }}>
                <div className="z-50 mt-24 flex items-center gap-5">
                    <Copy />

                    {/* Divider */}
                    <div className="h-3 w-px flex-none bg-hover" />

                    <ScrollToTop />
                </div>
            </FadeInWhileInView>

            <BackgroundBeams />
        </section>
    );
};
