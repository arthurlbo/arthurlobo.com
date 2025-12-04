import { SEO_CONFIG } from "@/shared/constants";
import { TypingAnimation } from "@repo/design-system/components";

const greetings = [
    "Hello!", // Inglês
    "Olá!", // Português
    "Hola!", // Espanhol
    "Ciao!", // Italiano
    "Hallo!", // Alemão
    "Привет!", // Russo
    "Hej!", // Sueco
    "Bonjour!", // Francês
    "こんにちは!", // Japonês
    "你好!", // Chinês
];

export const HomeHeading = () => {
    return (
        <section className="flex w-full flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
                <TypingAnimation
                    className="text-text-tertiary text-xl font-normal"
                    words={greetings}
                    pauseDelay={3000}
                    loop
                />
                <h1 className="text-text-primary text-3xl font-semibold">I’m Arthur 👋</h1>
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
