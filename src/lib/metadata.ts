import type { Metadata } from "next";
import { type Site, counterpart, languages } from "./i18n";
import { site } from "./site";

const ogAlt: Record<Site, string> = {
  en: "Pickleball retreats on the Barcelona coast: sunset over the palms at Coma-ruga beach",
  es: "Retiros de pickleball en la costa de Barcelona: puesta de sol sobre las palmeras de la playa de Coma-ruga",
  fr: "Séjours de pickleball sur la côte de Barcelone : coucher de soleil sur les palmiers de la plage de Coma-ruga",
  de: "Pickleball-Reisen an der Küste von Barcelona: Sonnenuntergang über den Palmen am Strand von Coma-ruga",
};

// Shared social-share image (public/og-image.jpg). Set explicitly on every page:
// a page's openGraph replaces its layout's, so an inherited image would be lost.
export function ogImage(siteLang: Site) {
  return { url: "/og-image.jpg", width: 1200, height: 630, alt: ogAlt[siteLang] };
}

// Child segments replace (not merge) the parent's openGraph object, so every page
// builds its full set here. Pages that exist in every language also get hreflang
// alternates pointing at each other.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  siteLang = "en",
  locale,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  siteLang?: Site;
  locale?: string;
}): Metadata {
  const set = counterpart(path);
  const image = ogImage(siteLang);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      ...(set && { languages: { ...set, "x-default": set.en } }),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale ?? languages.find((l) => l.site === siteLang)!.ogLocale,
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
