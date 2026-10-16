import type { MetadataRoute } from "next";
import { pageSets } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

// Every page in every language, each listing its translations as hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  return pageSets.flatMap((set) => {
    const languages = Object.fromEntries(Object.entries(set).map(([lang, path]) => [lang, absoluteUrl(path)]));
    const priority = set.en === "/" ? 1 : 0.9;
    return Object.values(set).map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
