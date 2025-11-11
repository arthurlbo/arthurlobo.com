import { LinkButton } from "@/shared/components";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const dynamic = "force-static";

export default function Home() {
    return (
        <main className="text-primary flex flex-col items-center gap-6 text-center">
            <h1 className="text-2xl font-bold">Hello Dev 🥳</h1>

            <p className="max-w-md">
                This is a modern Full-stack monorepo template designed to accelerate your web development workflow.
            </p>

            <div className="mt-2 flex items-center gap-2">
                <LinkButton
                    href="https://github.com/arthurlbo/fullstack-monorepo-template"
                    label="Explore Documentation"
                    icon={IconBrandGithub}
                    className="border-border hover:bg-border text-primary border bg-transparent"
                />
                <LinkButton
                    href="https://www.linkedin.com/in/arthurlbo/"
                    label="Who Am I?"
                    icon={IconBrandLinkedin}
                    className="text-primary bg-emerald-500/80 hover:bg-emerald-500"
                />
            </div>
        </main>
    );
}
