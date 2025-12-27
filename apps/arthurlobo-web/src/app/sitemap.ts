import type { MetadataRoute } from "next";

import { SEO_CONFIG } from "@/shared/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SEO_CONFIG.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: SEO_CONFIG.url + "/about",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: SEO_CONFIG.url + "/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: SEO_CONFIG.url + "/contact",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: SEO_CONFIG.url + "/guestbook",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: SEO_CONFIG.url + "/dashboard",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.4,
        },
    ];
}
