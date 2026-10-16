"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Lang, counterpart, ui } from "@/lib/i18n";

// Links to the same page in the other language, or that language's home page
// when a page has no translation (e.g. photo credits).
export function LanguageSwitcher({ lang, className = "" }: { lang: Lang; className?: string }) {
  const pathname = usePathname();
  const t = ui(lang).switcher;
  const pair = counterpart(pathname);
  const href = lang === "es" ? (pair?.en ?? "/") : (pair?.es ?? "/es");
  return (
    <Link href={href} hrefLang={t.hreflang} lang={t.hreflang} aria-label={t.aria} className={className}>
      {t.label}
    </Link>
  );
}
