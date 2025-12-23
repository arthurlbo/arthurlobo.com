import { Separator } from "@repo/design-system/components";

import { HomeBento, HomeHeading, HomePictures } from "@/features/home";

export const dynamic = "force-static";

export default function Home() {
    return (
        <>
            <HomeHeading />
            <Separator className="my-4 hidden shrink-0 xl:flex" />
            <HomePictures />
            <HomeBento />
        </>
    );
}
