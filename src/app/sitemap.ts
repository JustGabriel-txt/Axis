import type { MetadataRoute } from "next";
import { seo, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: seo.lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
