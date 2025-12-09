import { HomeBentoGrid, HomeHeading, HomePictures } from "@/features/home";

export const dynamic = "force-static";

export default function Home() {
    return (
        <>
            <HomeHeading />
            <div className="bg-border-400 my-4 h-px w-full shrink-0" />
            <HomePictures />
            <HomeBentoGrid />
        </>
    );
}
