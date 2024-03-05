import Image from "next/image";

import dayjs from "dayjs";

import { IconCode, IconDiscountCheck, IconFlare, IconSchool } from "@tabler/icons-react";

import { CtaButtons, FadeInWhileInView, Title } from "@/components";

import { Topic, TopicProps } from "./topic";
import { BackgroundCell } from "./background-cell";

import Me from "@/assets/me.webp";

/**
 * Topics to be displayed on the about section.
 */
const topics: TopicProps[] = [
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

/**
 * About section.
 */
export const About = () => {
    const birthDate = "2003-07-01";
    const myAge = dayjs().diff(birthDate, "year");

    return (
        <section
            id="about"
            className="relative flex h-full w-full flex-col items-start gap-12 md:items-center lg:gap-32"
        >
            <BackgroundCell />

            <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-0">
                <div className="flex w-full flex-col items-start justify-center gap-12 lg:max-w-[540px] xl:max-w-[593px] xl:gap-16">
                    <div className="z-50 flex w-full flex-col items-start gap-7">
                        <FadeInWhileInView initial={{ y: -40 }} animate={{ y: 0 }}>
                            <Title label="About Me" icon={IconDiscountCheck} title="Arthur Carneiro Lobo" />
                        </FadeInWhileInView>

                        <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }}>
                            <p className="font-regular text-start text-xl text-secondary">
                                I am <span className="text-primary">{myAge} years</span> old and currently based in{" "}
                                <span className="text-primary">Brazil.</span> I began programming out of curiosity when
                                I was 17, and it was <span className="text-primary">love at first sight.</span> Since
                                then, I have been pushing myself day by day to improve my skills, particularly in{" "}
                                <span className="text-primary">Frontend Development,</span> which is{" "}
                                <span className="text-primary">my true passion.</span>
                            </p>
                        </FadeInWhileInView>
                    </div>

                    <FadeInWhileInView initial={{ y: 40 }} animate={{ y: 0 }} className="w-full">
                        <CtaButtons
                            primary={{ label: "Find me on LinkedIn", link: "https://www.linkedin.com/in/arthurlbo" }}
                            secondary={{ label: "Check out my GitHub", link: "https://www.github.com/arthurlbo" }}
                        />
                    </FadeInWhileInView>
                </div>

                <FadeInWhileInView initial={{ x: 40 }} animate={{ x: 0 }} className="w-full lg:w-auto">
                    <Image
                        src={Me}
                        alt="Arthur Carneiro Lobo"
                        className="z-50 h-auto max-h-[380px] w-full rounded-[26px] object-cover object-top md:object-center lg:max-h-[600px] lg:w-[300px] 2xl:w-[340px]"
                        priority
                    />
                </FadeInWhileInView>
            </div>

            <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }} className="w-full">
                <div className="flex w-full flex-col items-center gap-8 xl:flex-row">
                    {topics.map((topic, index) => (
                        <Topic key={index} {...topic} />
                    ))}
                </div>
            </FadeInWhileInView>
        </section>
    );
};
