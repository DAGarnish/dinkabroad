import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pickleball Retreats Barcelona | Pickleball Holidays & Vacations | Dink Abroad",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <JsonLd data={{ "@graph": [organizationSchema, websiteSchema] }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
