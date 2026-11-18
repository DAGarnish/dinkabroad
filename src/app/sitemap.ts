import type { MetadataRoute } from "next";
import { pageSets } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { getPosts } from "@/lib/blog";

// Every page in every language, each listing its translations as hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = pageSets.flatMap((set) => {
    const languages = Object.fromEntries(Object.entries(set).map(([lang, path]) => [lang, absoluteUrl(path)]));
    const priority = set.en === "/" ? 1 : 0.9;
    return Object.values(set).map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages },
    }));
  });
  // The blog is English only, so no hreflang alternates.
  const posts = getPosts();
  const blog = [
    { url: absoluteUrl("/blog"), lastModified: posts[0]?.date, changeFrequency: "weekly" as const, priority: 0.6 },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
  return [...pages, ...blog];
}
