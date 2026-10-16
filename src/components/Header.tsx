import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "/pickleball-holiday-barcelona", label: "Local Dink" },
  { href: "/pickleball-vacation-spain", label: "Long-Haul Lob" },
  { href: "/#coma-ruga", label: "Coma-ruga" },
  { href: "/#hotel", label: "The hotel" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
        <Link href="/" aria-label="Dink Abroad home" className="rounded-sm">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {nav.map((item) => (
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
          <Link
            href="#enquire"
            className="rounded-full bg-ball px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-white"
          >
            Get the info
          </Link>
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open menu"
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
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-sand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
