import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pickleballvakantie in Barcelona, Spanje | Dink Abroad",
    template: "%s | Dink Abroad",
  },
  description:
    "Pickleballreizen in kleine groepen in Coma-ruga, een uur met de trein vanaf Barcelona. Training, toernooien en een 4★-hotel aan het strand aan de Costa Daurada.",
  applicationName: site.name,
  keywords: [
    "pickleball vakantie Barcelona",
    "pickleball reis Spanje",
    "pickleball kamp Barcelona",
    "pickleball vakantie Spanje",
    "pickleball Costa Daurada",
    "Coma-ruga",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "nl_NL",
    url: "/nl",
    images: [ogImage("nl")],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  category: "travel",
  verification: { google: "StmSPnRfr8VUPZz44KRBoZ6XQyA5-b37MPmcFZaxhps" },
};

export const viewport: Viewport = {
  themeColor: "#0e2a2f",
};

export default function DutchLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="nl">{children}</SiteShell>;
}
