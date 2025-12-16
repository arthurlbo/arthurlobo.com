import { HomeBentoGrid, HomeHeading, HomePictures } from "@/features/home";

export const dynamic = "force-static";

export default function Home() {
    return (
        <>
            <HomeHeading />
            <div className="bg-surface-500 my-4 hidden h-px w-full shrink-0 xl:flex" />
            <HomePictures />
            <HomeBentoGrid />
        </>
    );
}
