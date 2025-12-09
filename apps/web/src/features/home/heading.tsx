import { SEO_CONFIG } from "@/shared/constants";
import { TypingAnimation } from "@repo/design-system/components";

const greetings = ["Hello!", "Olá!", "Hola!", "Ciao!", "Hallo!", "Привет!", "Hej!", "Bonjour!", "こんにちは!", "你好!"];

export const HomeHeading = () => {
    return (
        <section className="flex w-full flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
                <TypingAnimation
                    className="text-primary-300 text-[1.3rem] font-normal"
                    words={greetings}
                    pauseDelay={3000}
                    loop
                />
                <h1 className="text-primary-100 text-3xl font-semibold">I’m Arthur 👋</h1>
            </div>

            <div className="text-primary-300 flex items-center gap-4 text-sm leading-tight font-normal">
                <span>• Based in Curitiba, Paraná, Brazil</span>
                <span>• Working remotely</span>
            </div>

            <p className="text-primary-200 text-sm leading-8 font-light xl:max-w-[950px]">{SEO_CONFIG.description}</p>
        </section>
    );
};
