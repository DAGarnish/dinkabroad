import type { Metadata } from "next";
import { site } from "./site";

// Child segments replace (not merge) the parent's openGraph object, so every page
// builds its full set here.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  locale = site.locale,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  locale?: string;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale,
      url: path,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
