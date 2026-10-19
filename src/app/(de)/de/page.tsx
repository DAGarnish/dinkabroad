import Image from "next/image";
import Link from "next/link";
import sunset from "@/assets/images/coma-ruga-sunset.jpg";
import courts from "@/assets/images/pickleball-courts.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ComaRugaSection, EnquirySection, HotelSection, RetreatCard } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { retreatsDe } from "@/lib/retreats";
import { faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pickleball-Reisen Barcelona | Pickleball-Urlaub in Spanien | Dink Abroad",
  description:
    "Pickleball-Reisen und Pickleball-Urlaub an der Küste von Barcelona. Training, Turniere und ein 4★-Strandhotel in Coma-ruga, eine Stunde mit dem Zug von Barcelona. Max. 16 Spieler.",
  path: "/de",
  absoluteTitle: true,
  siteLang: "de",
});

const pillars = [
  {
    title: "Training, das Sie weiterbringt",
    text: "90-minütige Einheiten mit zertifizierten Trainern, abgestimmt auf Ihr Niveau, vom ersten Dink bis zur Turnierreife. Trainiert wird auf Englisch und Spanisch.",
  },
  {
    title: "Kleine Gruppen, großes Willkommen",
    text: "Nie mehr als 16 Spieler, damit Sie auf dem Court echte Aufmerksamkeit bekommen. Allein unterwegs? Bis zum Mittagessen haben Sie neue Spielpartner.",
  },
  {
    title: "Gegen Einheimische spielen",
    text: "Pickleball boomt in Spanien. Lockere Turniere und freies Spiel bringen Sie mit katalanischen Spielern ans Netz.",
  },
  {
    title: "Sonne, Meer & Mittelmeer",
    text: "Vormittags auf dem Court, nachmittags am Meer. Barcelona, Sitges und Tarragona sind ganz nah.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Wo finden die Pickleball-Reisen von Dink Abroad statt?",
    answer:
      "Alle Reisen finden in Coma-ruga an der Costa Daurada in Katalonien statt. Mit dem Direktzug entlang der Küste ist man in einer Stunde im Zentrum von Barcelona. Wir wohnen im Estival Maramar, einem 4-Sterne-Hotel direkt am Strand.",
  },
  {
    question: "Sprechen die Trainer Deutsch?",
    answer:
      "Nein. Unsere Trainer und unser Team vor Ort sprechen Englisch und Spanisch, und die Trainingseinheiten finden in diesen beiden Sprachen statt. Pickleball lernt man vor allem durch Vormachen und Spielen, daher reichen Grundkenntnisse in Englisch oder Spanisch in der Regel aus. Wenn Sie wegen der Sprache unsicher sind, schreiben Sie es uns einfach in Ihrer Anfrage.",
  },
  {
    question: "Welche Reise passt zu mir?",
    answer:
      "Local Dink ist ein 5-tägiger Pickleball-Urlaub (Freitag bis Dienstag) für Spieler aus Deutschland, Österreich, der Schweiz und ganz Europa. Long-Haul Lob ist eine 9-tägige Reise mit demselben Pickleball am Meer von Freitag bis Dienstag, danach vier Nächte in Barcelona mit Führungen zu Gaudís Sehenswürdigkeiten, nach Montserrat, Tarragona und ins Penedès.",
  },
  {
    question: "Welches Spielniveau brauche ich?",
    answer:
      "Alle Niveaus sind willkommen, von Anfängern bis zu erfahrenen 4.0+-Spielern. Training und Spiele werden nach Niveau eingeteilt, damit alle gefordert werden und Spaß haben.",
  },
  {
    question: "Kann ich allein kommen?",
    answer:
      "Auf jeden Fall. Viele Gäste reisen allein. Bei maximal 16 Spielern wächst die Gruppe auf und neben dem Court schnell zusammen.",
  },
  {
    question: "Sind die Flüge inklusive?",
    answer:
      "Nein. Flüge sind nicht inklusive, damit Sie von dort anreisen können, wo es für Sie am besten passt. Beim Long-Haul Lob sind Flughafentransfers inklusive. Für den Local Dink erreichen Sie Coma-ruga ganz einfach mit dem Zug entlang der Küste von Barcelona.",
  },
];

export default function StartseitePage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/de#webpage"),
              url: absoluteUrl("/de"),
              name: "Pickleball-Reisen Barcelona | Dink Abroad",
              inLanguage: "de-DE",
              about: { "@id": absoluteUrl("/#organization") },
              isPartOf: { "@id": absoluteUrl("/#website") },
            },
            {
              "@type": "ItemList",
              name: "Pickleball-Reisen von Dink Abroad",
              itemListElement: retreatsDe.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(r.href),
                name: r.name,
              })),
            },
            ...retreatsDe.map((r) => tripSchema(r, { description: r.summary, touristType: r.audience })),
            hotelSchema,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-cream">
        <Image
          src={sunset}
          alt="Goldener Sonnenuntergang über den Palmen am Strand von Coma-ruga an der Costa Daurada"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <Container className="w-full pt-36 pb-16 sm:pb-24">
          <p className="animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">
            Pickleball-Reisen · Küste von Barcelona
          </p>
          <h1 className="mt-6 max-w-4xl animate-rise font-display text-5xl leading-[1.02] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-7xl lg:text-[5.5rem]">
            Pickleball-Reisen an der Küste von <em className="font-normal">Barcelona</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms] sm:text-xl">
            Pickleball-Urlaub in kleinen Gruppen im sonnigen Coma-ruga, eine Stunde mit dem Zug entlang der Küste
            von Barcelona entfernt. Erstklassiges Training, lockere Turniere und ein Hotel direkt am Strand. Sie
            müssen nur noch spielen.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="#retreats"
              className="rounded-full bg-ball px-7 py-4 font-semibold text-ink transition hover:bg-white"
            >
              Reisen entdecken
            </Link>
            <Link
              href="#enquire"
              className="rounded-full border border-cream/40 px-7 py-4 font-semibold backdrop-blur transition hover:bg-cream/10"
            >
              Kostenlos alle Infos erhalten
            </Link>
          </div>
          <ul className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-sm sm:grid-cols-4">
            {[
              ["Max. 16", "Spieler pro Reise"],
              ["4★", "Hotel direkt am Strand"],
              ["1 Std.", "mit dem Zug von Barcelona"],
              ["EN · ES", "Training auf Englisch & Spanisch"],
            ].map(([k, v]) => (
              <li key={v}>
                <span className="block font-display text-2xl">{k}</span>
                <span className="text-cream/70">{v}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Warum Dink Abroad"
              title={
                <>
                  Die Pickleball-Reise, von der Sie <em className="font-normal">noch</em> nächste Saison erzählen
                </>
              }
              intro="Wir haben alles, was Spieler an einem guten Vereinswochenende lieben (gutes Training, umkämpfte Spiele, neue Freunde), ans Mittelmeer verlegt. Wir kümmern uns um Courts, Trainer, Hotel und Transfers. Sie bringen nur Ihren Schläger mit."
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={courts}
              alt="Pickleball-Plätze im Freien mit blauen Spielflächen und Netzen bei Sonnenschein"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -left-4 top-10 rotate-[-4deg] rounded-2xl bg-ball px-5 py-4 text-ink shadow-xl sm:-left-10">
              <p className="font-display text-3xl leading-none">Costa Daurada</p>
              <p className="mt-1 text-xs font-semibold tracking-wide uppercase">Kataloniens Goldküste</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Retreats */}
      <section id="retreats" className="scroll-mt-10 bg-sand py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Wählen Sie Ihre Reise"
            title="Zwei Arten, in Barcelona Pickleball zu spielen"
            intro="Ob verlängertes Wochenende in der Sonne oder die große Reise mit Kultur und Ausflügen: Es gibt die passende Dink-Abroad-Reise für Sie."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {retreatsDe.map((r) => (
              <RetreatCard key={r.slug} retreat={r} lang="de" />
            ))}
          </div>
        </Container>
      </section>

      <ComaRugaSection lang="de" />
      <HotelSection lang="de" />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="de"
        title="Bereit für Pickleball am Meer?"
        intro="Erzählen Sie uns ein wenig über sich, und wir schicken Ihnen innerhalb von 24 Stunden persönlich das komplette Programm, Termine, Preise und Verfügbarkeit."
        defaultPhoneCode="+49"
      />
    </>
  );
}
