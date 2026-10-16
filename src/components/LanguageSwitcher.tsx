"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Lang, counterpart, languages, siteOf, ui } from "@/lib/i18n";

// EN · ES · FR, each linking to the same page in that language, or that
// language's home page when a page has no translation (e.g. photo credits).
export function LanguageSwitcher({ lang, className = "" }: { lang: Lang; className?: string }) {
  const pathname = usePathname();
  const current = siteOf(lang);
  const set = counterpart(pathname);
  return (
    <nav aria-label={ui(lang).switcherAria} className={`flex items-center gap-1 ${className}`}>
      {languages.map((l) => (
        <Link
          key={l.site}
          href={set?.[l.site] ?? ui(l.site === "en" ? "en-GB" : l.site).home}
          hrefLang={l.site}
          lang={l.site}
          title={l.label}
          aria-current={l.site === current ? "page" : undefined}
          className={`rounded-full px-2 py-1 transition ${
            l.site === current ? "font-semibold opacity-100" : "opacity-60 hover:opacity-100"
          }`}
        >
          {l.short}
        </Link>
      ))}
    </nav>
  );
}
