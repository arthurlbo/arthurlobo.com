import { socialLinks } from "@/utils/constants";

import { SocialButton } from "@/components/ui";
import { BackgroundBeams } from "./background-beams";

export const Footer = () => {
    return (
        <section className="relative flex w-full flex-col items-center justify-center gap-12 pt-24 lg:gap-24">
            <h1 className="z-50 max-w-4xl text-center text-5xl font-extrabold leading-relaxed text-primary">
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
                <p className="text-sm font-semibold text-secondary">Made with 🤍 by Arthur</p>
                <div className="h-3 w-px flex-none bg-hover" />
                <button className="bg-transparent text-sm font-semibold text-secondary hover:text-primary">
                    Back to top
                </button>
            </div>
            <BackgroundBeams />
        </section>
    );
};
