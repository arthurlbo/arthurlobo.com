import Image from "next/image";

import teste from "@/assets/timecapsule.webp";

export default function Home() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-primary">hello world</h1>
            <Image src={teste} alt="teste" width={584} height={416} />
        </div>
    );
}
