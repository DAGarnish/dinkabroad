import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Séjours pickleball à Barcelone | Vacances pickleball | Dink Abroad",
    template: "%s | Dink Abroad",
  },
  description:
    "Séjours de pickleball en petit groupe à Coma-ruga, à une heure de Barcelone en train. Coaching, tournois et hôtel 4★ en bord de mer sur la Costa Daurada.",
  applicationName: site.name,
  keywords: [
    "séjour pickleball Barcelone",
    "vacances pickleball Espagne",
    "stage pickleball Barcelone",
    "voyage pickleball Barcelone",
    "pickleball Costa Daurada",
    "Coma-ruga",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "fr_FR",
    url: "/fr",
    images: [ogImage("fr")],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  category: "travel",
  verification: { google: "StmSPnRfr8VUPZz44KRBoZ6XQyA5-b37MPmcFZaxhps" },
};

export const viewport: Viewport = {
  themeColor: "#0e2a2f",
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="fr">{children}</SiteShell>;
}
