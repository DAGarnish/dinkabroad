import Link from "next/link";
import { type Lang, ui } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Header({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
        <Link href={t.home} aria-label={t.homeAria} className="rounded-sm">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="opacity-85 transition hover:opacity-100 hover:text-ball"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher
            lang={lang}
            className="hidden rounded-full border border-white/30 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10 sm:inline-flex"
          />
          <Link
            href="#enquire"
            className="rounded-full bg-ball px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-white"
          >
            {t.headerCta}
          </Link>
          <details className="group relative lg:hidden">
            <summary
              aria-label={t.openMenu}
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/30 [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-3 w-56 rounded-2xl bg-cream p-2 text-ink shadow-2xl ring-1 ring-black/5"
            >
              {t.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-sand"
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher
                lang={lang}
                className="mt-1 block rounded-xl border-t border-line px-4 py-3 text-sm font-medium hover:bg-sand"
              />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
