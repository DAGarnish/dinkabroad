import type { ReactNode } from "react";
import { type Lang, siteOf } from "@/lib/i18n";

// Tarragona's Roman amphitheatre on Spain's official tourism site (no Dutch version, so NL gets English).
const amphitheatre: Record<string, string> = {
  es: "https://www.spain.info/es/lugares-interes/anfiteatro-romano/",
  fr: "https://www.spain.info/fr/curiosites/amphitheatre-romain/",
  de: "https://www.spain.info/de/highlights/roemisches-anfitheater/",
};

// Tourism pages for the afternoon trip ideas. Vilanova's site has no language versions.
const towns = {
  sitges: (site: string) => `https://www.sitgesanytime.com/${site}/`,
  tarragona: (site: string) => amphitheatre[site] ?? "https://www.spain.info/en/places-of-interest/roman-amphitheatre/",
  vilanova: () => "https://www.vilanovaturisme.cat/",
};

export function TownLink({ town, lang, children }: { town: keyof typeof towns; lang: Lang; children: ReactNode }) {
  return <ExternalLink href={towns[town](siteOf(lang))}>{children}</ExternalLink>;
}

// An underlined link that opens in a new tab.
export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-terracotta/50 underline-offset-2 transition hover:text-terracotta"
    >
      {children}
    </a>
  );
}

const townNames = /(Sitges|Tarragona|Tarragone|Vilanova i la Geltrú)/;

// Turns the town names in a plain string into TownLinks, so itinerary text can stay a string for the schema.
export function linkTowns(text: string, lang: Lang) {
  return text.split(townNames).map((part, i) => {
    if (i % 2 === 0) return part;
    const town = part === "Sitges" ? "sitges" : part.startsWith("Tarragon") ? "tarragona" : "vilanova";
    return (
      <TownLink key={i} town={town} lang={lang}>
        {part}
      </TownLink>
    );
  });
}
