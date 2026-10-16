import type { MetadataRoute } from "next";
import { retreats } from "@/lib/retreats";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...retreats.map((r) => ({
      url: absoluteUrl(r.href),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
