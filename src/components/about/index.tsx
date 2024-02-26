import { IconCode, IconDiscountCheck, IconFlare, IconSchool } from "@tabler/icons-react";

import { Topics, TopicsProps } from "./topics";
import { CtaButton, Title } from "@/components/ui";

const topics: TopicsProps[] = [
    {
        icon: IconCode,
        children: (
            <h3 className="text-base font-normal text-secondary">
                I have over <span className="text-primary">2 years</span> of experience as a frontend developer,
                specializing in <span className="text-primary">React and TypeScript.</span>
            </h3>
        ),
    },
    {
        icon: IconSchool,
        children: (
            <h3 className="text-base font-normal text-secondary">
                I am currently pursuing a Bachelor's degree in{" "}
                <span className="text-primary">Software Engineering.</span>
            </h3>
        ),
    },
    {
        icon: IconFlare,
        children: (
            <h3 className="text-base font-normal text-secondary">
                I love minimalistic design and <span className="text-primary">coffee.</span> Outside of work, I explore
                new places, and savor <span className="text-primary">fine wine.</span>
            </h3>
        ),
    },
];

export const About = () => {
    return (
        <section className="mx-5 flex flex-col items-start gap-12 overflow-hidden border-b border-b-hover py-5 md:items-center lg:gap-32 lg:py-32 xl:mx-28">
            <div className="flex w-full flex-col items-start justify-between gap-12 md:items-center lg:flex-row lg:gap-0">
                <div className="flex w-full flex-col items-start justify-center gap-12 md:items-center lg:max-w-[540px] lg:items-start xl:max-w-[593px] xl:gap-16">
                    <div className="flex w-full flex-col items-start gap-7 md:items-center lg:items-start">
                        <Title label="About Me" icon={IconDiscountCheck} title="Arthur Carneiro Lobo" />
                        <p className="font-regular text-start text-xl text-secondary md:text-center lg:text-start">
                            I am <span className="text-primary">20 years</span> old and currently based in{" "}
                            <span className="text-primary">Brazil.</span> I began programming out of curiosity when I
                            was 17, and it was <span className="text-primary">love at first sight.</span> Since then, I
                            have been pushing myself day by day to improve my skills, particularly in{" "}
                            <span className="text-primary">Frontend Development,</span> which is{" "}
                            <span className="text-primary">my true passion.</span>
                        </p>
                    </div>
                    <CtaButton
                        primary={{ label: "Find me on LinkedIn", link: "https://www.linkedin.com/in/arthurlbo/" }}
                        secondary={{ label: "Check out my GitHub", link: "https://www.github.com/arthurlbo" }}
                    />
                </div>
                <div className="relative h-[380px] w-full lg:w-[340px]">
                    <div className="absolute left-0 top-0 z-20 h-[380px] w-full rounded-[26px] bg-hover lg:w-[340px]" />
                    <div className="absolute right-0 top-5 z-10 h-[320px] w-full rounded-full bg-gradient-to-tr from-accent to-accent/5 blur-[80px] lg:w-[300px]" />
                </div>
            </div>
            <div className="flex w-full flex-col items-center gap-8 xl:flex-row">
                {topics.map((topic, index) => (
                    <Topics key={index} {...topic} />
                ))}
            </div>
        </section>
    );
};
