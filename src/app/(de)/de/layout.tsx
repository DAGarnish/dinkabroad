import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pickleball-Camp & Urlaub in Barcelona, Spanien | Dink Abroad",
    template: "%s | Dink Abroad",
  },
  description:
    "Pickleball-Reisen in kleinen Gruppen in Coma-ruga, eine Stunde mit dem Zug von Barcelona. Training, Turniere und ein 4★-Hotel direkt am Strand an der Costa Daurada.",
  applicationName: site.name,
  keywords: [
    "Pickleball Urlaub Barcelona",
    "Pickleball Reise Spanien",
    "Pickleball Camp Barcelona",
    "Pickleball Urlaub Spanien",
    "Pickleball Costa Daurada",
    "Coma-ruga",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "de_DE",
    url: "/de",
    images: [ogImage("de")],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  category: "travel",
  verification: { google: "StmSPnRfr8VUPZz44KRBoZ6XQyA5-b37MPmcFZaxhps" },
};

export const viewport: Viewport = {
  themeColor: "#0e2a2f",
};

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
