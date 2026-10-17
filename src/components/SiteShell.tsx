import { Fraunces, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { type Lang, language } from "@/lib/i18n";
import { organizationSchema, websiteSchema } from "@/lib/schema";

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

// The <html> document shared by the English, Spanish, French, German and Dutch root layouts.
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={language(lang).htmlLang} className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <JsonLd data={{ "@graph": [organizationSchema, websiteSchema] }} />
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
      <GoogleAnalytics gaId="G-1KLBNS3SJ1" />
    </html>
  );
}
