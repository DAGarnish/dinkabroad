import Link from "next/link";
import { type Lang, ui } from "@/lib/i18n";
import { hotel } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Footer({ lang }: { lang: Lang }) {
  const t = ui(lang).footer;
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo className="text-cream" />
          <p className="mt-5 text-sm leading-relaxed">{t.about}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">{t.retreats}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {t.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">{t.baseCamp}</h2>
          <address className="mt-4 text-sm leading-relaxed not-italic">
            {hotel.name}
            <br />
            {hotel.street}
            <br />
            {hotel.postcode} {hotel.locality}, {t.country}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/60 sm:flex-row sm:justify-between sm:px-8">
          <p>{t.rights}</p>
          <div className="flex gap-6">
            <LanguageSwitcher lang={lang} className="hover:text-white" />
            <Link href="/photo-credits" className="hover:text-white">
              {t.credits}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
