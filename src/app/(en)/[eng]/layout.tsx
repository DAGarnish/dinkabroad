import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";
import { ENGLISH_VARIANTS, englishLang } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pickleball Holiday & Camps in Barcelona, Spain | Dink Abroad",
    template: "%s | Dink Abroad",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "pickleball retreat Barcelona",
    "pickleball holiday Barcelona",
    "pickleball trip Barcelona",
    "pickleball vacation Barcelona",
    "pickleball camp Barcelona",
    "pickleball holiday Spain",
    "Coma-ruga",
    "Costa Daurada",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    images: [ogImage("en")],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  category: "travel",
  verification: { google: "StmSPnRfr8VUPZz44KRBoZ6XQyA5-b37MPmcFZaxhps" },
};

export const viewport: Viewport = {
  themeColor: "#0e2a2f",
};

// US English by default, British English for en-GB browsers; see src/proxy.ts.
export function generateStaticParams() {
  return ENGLISH_VARIANTS.map((eng) => ({ eng }));
}

export default async function EnglishLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ eng: string }>;
}) {
  const { eng } = await params;
  // Only /uk and /us exist; any other first segment is not an English page.
  if (!(ENGLISH_VARIANTS as readonly string[]).includes(eng)) notFound();
  return <SiteShell lang={englishLang(eng)}>{children}</SiteShell>;
}
