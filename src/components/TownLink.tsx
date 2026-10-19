import type { ReactNode } from "react";
import { type Lang, siteOf } from "@/lib/i18n";

// Official tourism sites for the afternoon trip ideas. Only Sitges has a page per language.
const towns = {
  sitges: (site: string) => `https://www.sitgesanytime.com/${site}/`,
  tarragona: () => "https://www.tarragonaturisme.cat/",
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
