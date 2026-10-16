import type { Metadata } from "next";
import { counterpart } from "./i18n";
import { site } from "./site";

// Shared social-share image (public/og-image.jpg). Set explicitly on every page:
// a page's openGraph replaces its layout's, so an inherited image would be lost.
export function ogImage(spanish: boolean) {
  return {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: spanish
      ? "Retiros de pickleball en la costa de Barcelona: puesta de sol sobre las palmeras de la playa de Coma-ruga"
      : "Pickleball retreats on the Barcelona coast: sunset over the palms at Coma-ruga beach",
  };
}

// Child segments replace (not merge) the parent's openGraph object, so every page
// builds its full set here. Pages that exist in both languages also get hreflang
// alternates pointing at each other.
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
  const pair = counterpart(path);
  const image = ogImage(locale === "es_ES");
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      ...(pair && { languages: { en: pair.en, es: pair.es, "x-default": pair.en } }),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale,
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
