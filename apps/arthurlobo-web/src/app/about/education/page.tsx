import { Metadata } from "next";

import FiskLogo from "@/assets/about/education/fisk.webp";
import UpLogo from "@/assets/about/education/up.webp";

import { IMilestoneCardProps, Milestones } from "@/features/about";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Education",
};

const EDUCATION_MILESTONES: IMilestoneCardProps[] = [
    {
        value: "1",
        title: "Software Engineering",
        organization: {
            name: "Positivo University",
            link: "https://www.up.edu.br/",
            logo: UpLogo,
        },
        tags: ["Bachelor's Degree"],
        period: "Jul 2022 - Jul 2026",
        location: "Curitiba, Paraná, Brazil",
    },
    {
        value: "2",
        title: "English Language Certification",
        organization: {
            name: "Fisk",
            link: "https://www.fisk.com.br/",
            logo: FiskLogo,
        },
        tags: ["Certification", "MET B2"],
        period: "May 2018 - Jul 2021",
        location: "Curitiba, Paraná, Brazil",
    },
];

export default function Education() {
    return <Milestones items={EDUCATION_MILESTONES} />;
}
