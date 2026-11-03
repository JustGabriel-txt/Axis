import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // Libera buscadores e assistentes de IA (GPTBot, ClaudeBot, PerplexityBot etc.)
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
