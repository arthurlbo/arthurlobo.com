import { HomeBentoGrid, HomeHeading, HomePictures } from "@/features/home";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <>
            <HomeHeading />
            <div className="bg-surface my-4 h-px w-full shrink-0" />
            <HomePictures />
            <HomeBentoGrid />
        </>
    );
}
