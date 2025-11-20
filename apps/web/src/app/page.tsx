import { HomeHeading } from "@/features/home";
import { HomePictures } from "@/features/home/pictures/pictures";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <>
            <HomeHeading />
            <div className="bg-surface my-4 h-px w-full shrink-0" />
            <HomePictures />
        </>
    );
}
