import type { Metadata } from "next";
import { type Site, counterpart, languages } from "./i18n";
import { site } from "./site";

const ogAlt: Record<Site, string> = {
  en: "Pickleball retreats on the Barcelona coast: palm trees under a clear blue sky at Coma-ruga beach",
  es: "Retiros de pickleball en la costa de Barcelona: palmeras bajo un cielo azul despejado en la playa de Coma-ruga",
  fr: "Séjours de pickleball sur la côte de Barcelone : palmiers sous un ciel bleu limpide sur la plage de Coma-ruga",
  de: "Pickleball-Reisen an der Küste von Barcelona: Palmen unter strahlend blauem Himmel am Strand von Coma-ruga",
  nl: "Pickleballreizen aan de kust van Barcelona: palmbomen onder een strakblauwe lucht op het strand van Coma-ruga",
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
