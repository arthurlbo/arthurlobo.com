import Image from "next/image";
import Link from "next/link";

import SphereLeft from "@/assets/navigation/sphere-left.webp";
import SphereRight from "@/assets/navigation/sphere-right.webp";

/**
 * Cta card component of the main-nav.
 */
export const Cta = () => {
    return (
        <Link
            href="/contact"
            target="_blank"
            className="border-surface-500 hover:border-accent-500 group relative max-h-[200px] min-h-44 w-full flex-1 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300"
        >
            <Image
                src={SphereLeft}
                alt="Sphere Left"
                priority
                quality={100}
                width={188}
                className="infinite absolute -top-20 -left-20 z-0 h-auto rotate-180 transition-all duration-1000 group-hover:rotate-540"
            />

            <Image
                src={SphereRight}
                alt="Sphere Right"
                priority
                quality={100}
                width={188}
                className="infinite absolute -right-[90px] -bottom-[90px] z-0 h-auto rotate-180 duration-1000 group-hover:rotate-540"
            />

            <div className="flex h-full flex-col items-center justify-center gap-3">
                <span className="text-primary-100 z-10 text-[18px] font-bold">Let’s Connect</span>

                <span className="text-primary-200 z-10 max-w-60 text-center text-sm font-medium">
                    Reach out to discuss projects, opportunities, or tech ideas.
                </span>
            </div>
        </Link>
    );
};
