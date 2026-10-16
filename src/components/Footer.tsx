import Link from "next/link";
import { Logo } from "./Logo";
import { hotel } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo className="text-cream" />
          <p className="mt-5 text-sm leading-relaxed">
            Small-group pickleball retreats in Coma-ruga on the Costa Daurada, one hour by scenic
            train from Barcelona.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">Retreats</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/pickleball-holiday-barcelona" className="hover:text-white">
                Local Dink: pickleball holiday (UK & Europe)
              </Link>
            </li>
            <li>
              <Link href="/pickleball-vacation-spain" className="hover:text-white">
                Long-Haul Lob: pickleball vacation (USA & Canada)
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">Base camp</h2>
          <address className="mt-4 text-sm leading-relaxed not-italic">
            {hotel.name}
            <br />
            {hotel.street}
            <br />
            {hotel.postcode} {hotel.locality}, Spain
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/60 sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 Dink Abroad. All rights reserved.</p>
          <Link href="/photo-credits" className="hover:text-white">
            Photo credits
          </Link>
        </div>
      </div>
    </footer>
  );
}
