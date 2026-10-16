import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Retiros de pickleball en Barcelona | Vacaciones de pickleball | Dink Abroad",
    template: "%s | Dink Abroad",
  },
  description:
    "Retiros de pickleball en grupos reducidos en Coma-ruga, a una hora de Barcelona en tren. Entrenamientos, torneos y un hotel 4★ en primera línea de playa en la Costa Daurada.",
  applicationName: site.name,
  keywords: [
    "retiro de pickleball Barcelona",
    "vacaciones de pickleball Barcelona",
    "viaje de pickleball Barcelona",
    "campus de pickleball",
    "pickleball Costa Daurada",
    "Coma-ruga",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "es_ES",
    url: "/es",
    images: [ogImage("es")],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  category: "travel",
  verification: { google: "StmSPnRfr8VUPZz44KRBoZ6XQyA5-b37MPmcFZaxhps" },
};

export const viewport: Viewport = {
  themeColor: "#0e2a2f",
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
