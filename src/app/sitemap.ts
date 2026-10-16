import type { MetadataRoute } from "next";
import { pagePairs } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

// Every page in both languages, each listing its counterpart as an hreflang alternate.
export default function sitemap(): MetadataRoute.Sitemap {
  return pagePairs.flatMap((pair) => {
    const languages = { en: absoluteUrl(pair.en), es: absoluteUrl(pair.es) };
    const priority = pair.en === "/" ? 1 : 0.9;
    return [pair.en, pair.es].map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
