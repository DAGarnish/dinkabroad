import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

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

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en-GB">{children}</SiteShell>;
}
