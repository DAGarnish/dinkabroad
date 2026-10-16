import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";

// With separate English, Spanish, French and German root layouts there is no single layout to
// build a 404 from, so unmatched URLs get this self-contained page.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Page not found | Dink Abroad",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-svh items-center justify-center bg-ink px-6 text-center text-cream">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-ball uppercase">404</p>
          <h1 className="mt-4 font-display text-4xl">This page is out of bounds</h1>
          <p className="mt-3 text-cream/70">Esta página no existe. · Cette page n’existe pas. · Diese Seite gibt es nicht.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-full bg-ball px-6 py-3 font-semibold text-ink">
              Home
            </Link>
            <Link href="/es" className="rounded-full border border-cream/40 px-6 py-3 font-semibold">
              Inicio
            </Link>
            <Link href="/fr" className="rounded-full border border-cream/40 px-6 py-3 font-semibold">
              Accueil
            </Link>
            <Link href="/de" className="rounded-full border border-cream/40 px-6 py-3 font-semibold">
              Startseite
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
