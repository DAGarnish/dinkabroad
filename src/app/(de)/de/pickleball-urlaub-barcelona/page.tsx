import Image from "next/image";
import courts from "@/assets/images/pickleball-courts.jpg";
import sitges from "@/assets/images/sitges.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  ComaRugaSection,
  EnquirySection,
  HotelSection,
  Itinerary,
  PageHero,
  PricingSection,
} from "@/components/sections";
import { ExternalLink, TownLink } from "@/components/TownLink";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { localDinkDe } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { hotel } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pickleball-Urlaub Barcelona: 5-Tage-Camp ab 999 €",
  absoluteTitle: true,
  description:
    "5 Tage Pickleball-Camp bei Barcelona: Training am Vormittag, Turnier, 4★-Strandhotel und Ausflüge nach Sitges und Tarragona. Max. 16 Spieler. Ab 999 €.",
  path: localDinkDe.href,
  siteLang: "de",
});

const reasons = [
  {
    title: "Zertifizierte Trainer",
    text: "Zwei 90-minütige Einheiten mit zertifizierten Trainern, nach Niveau eingeteilt, damit jeder gefordert und gefördert wird. Trainiert wird auf Englisch und Spanisch.",
  },
  {
    title: "Ein lockeres Turnier",
    text: "Ein freundschaftliches, aber umkämpftes Turnier gegen Ihre Mitreisenden und katalanische Spieler. Geschichten für den Heimatverein garantiert.",
  },
  {
    title: "4★-Hotel direkt am Strand",
    text: (
      <>
        Vier Nächte im <ExternalLink href={hotel.url}>Estival Maramar</ExternalLink>
        , am luxuriösen Ende der 4-Sterne-Kategorie und direkt am Strand von Coma-ruga, mit täglichem Frühstück, Infinity-Pool und Spa.
      </>
    ),
  },
  {
    title: "Vormittags auf dem Court",
    text: "Training und Turnier finden immer am Vormittag statt. So bleiben die Nachmittage frei, um die Küste zu entdecken oder am Strand oder Infinity-Pool zu entspannen.",
  },
  {
    title: "Kleine Gruppe, max. 16",
    text: "Persönliche Betreuung durch die Trainer und viele neue Spielpartner. Ideal, wenn Sie allein reisen.",
  },
  {
    title: "Ausflüge am Nachmittag",
    text: (
      <>
        <TownLink town="sitges" lang="de">Sitges</TownLink>,{" "}
        <TownLink town="tarragona" lang="de">Tarragona</TownLink> und{" "}
        <TownLink town="reus" lang="de">Reus</TownLink> sind nur eine kurze Zugfahrt entfernt, ganz einfach auf eigene Faust.
      </>
    ),
  },
];

const days = [
  {
    label: "Tag 1 · Freitag",
    title: "Ankunft & Aufwärmen",
    text: "Reisen Sie nach Coma-ruga, eine Stunde mit dem Zug die Küste entlang von Barcelona. Einchecken, im Infinity-Pool abkühlen und die Gruppe kennenlernen, mit freiem Spiel auf den Courts am Nachmittag zum Aufwärmen.",
  },
  {
    label: "Tag 2 · Samstag",
    title: "Training & freies Spiel",
    text: "Ihre erste 90-minütige Trainingseinheit, danach freies Spiel. Der Nachmittag gehört Ihnen: Strand oder eine kurze Zugfahrt nach Sitges.",
  },
  {
    label: "Tag 3 · Sonntag",
    title: "Ab in die Praxis",
    text: "Die zweite Trainingseinheit, danach viele Matches gegen wechselnde Gegner, um das Gelernte zu festigen. Am Nachmittag ist das römische Tarragona nur eine kurze Zugfahrt entfernt.",
  },
  {
    label: "Tag 4 · Montag",
    title: "Turniertag",
    text: "Stellen Sie Ihr Können in einem lockeren, aber umkämpften Turnier mit Mitreisenden und Spielern aus der Region unter Beweis. Den letzten Nachmittag verbringen Sie in Reus oder am Strand.",
  },
  {
    label: "Tag 5 · Dienstag",
    title: "Freies Spiel & hasta pronto",
    text: "Ein letztes Frühstück am Meer und optionales freies Spiel vor der Heimreise. Abschied von neuen Freunden, bis bald wieder auf dem Court.",
  },
];

const included = [
  "4 Nächte im 4★-Hotel Estival Maramar direkt am Strand (Zweibett- oder Einzelzimmer)",
  "Tägliches Frühstück",
  "2 × 90 Minuten Training mit zertifizierten Trainern (auf Englisch und Spanisch)",
  "1 lockeres Turnier mit Mitreisenden und Einheimischen",
  "Freies Spiel auf den Courts",
  "Kleine Gruppe mit max. 16 Spielern",
  "Persönliche Betreuung durch das Dink-Abroad-Team",
];

const faqs: FaqItem[] = [
  {
    question: "Sprechen die Trainer Deutsch?",
    answer:
      "Nein. Unsere Trainer und unser Team vor Ort sprechen Englisch und Spanisch, und das Training findet in diesen beiden Sprachen statt. Pickleball lernt man vor allem durch Vormachen und Spielen, daher reichen Grundkenntnisse in Englisch oder Spanisch in der Regel aus. Wenn Sie wegen der Sprache unsicher sind, schreiben Sie es uns einfach in Ihrer Anfrage.",
  },
  {
    question: "Für welches Spielniveau ist dieser Pickleball-Urlaub?",
    answer:
      "Für jedes Niveau, von Spielern, die gerade erst einen Schläger in der Hand hatten, bis zu erfahrenen 4.0+-Spielern. Training und Matches werden nach Niveau eingeteilt, damit alle die passende Herausforderung haben.",
  },
  {
    question: "Kann ich allein kommen?",
    answer:
      "Ja, das machen viele. Die Gruppe ist auf 16 Spieler begrenzt, Sie finden also schnell Anschluss, auf und neben dem Court. Lieber ein eigenes Zimmer? Das Einzelzimmer kostet 1.399 € pro Person.",
  },
  {
    question: "Sind die Flüge inklusive?",
    answer:
      "Flüge sind nicht inklusive, Sie können also von jedem Flughafen in Deutschland, Österreich, der Schweiz oder Europa anreisen. Landen Sie am Freitag in Barcelona und fliegen Sie am Dienstag zurück. Flughafentransfers sind nicht inklusive, aber Coma-ruga ist mit dem Zug entlang der Küste leicht zu erreichen, und wir helfen Ihnen bei der Planung.",
  },
  {
    question: "Was ist inklusive und was nicht?",
    answer:
      "Inklusive: 4 Nächte im Zweibett- oder Einzelzimmer, tägliches Frühstück, 2 Trainingseinheiten, ein Turnier und freies Spiel. Nicht inklusive: Flüge, Flughafentransfers, Mittag- und Abendessen, Getränke und Reiseversicherung.",
  },
  {
    question: "Wie und wann bezahle ich?",
    answer:
      "Wenn Sie die Infos erhalten und sich entschieden haben, sichert eine Anzahlung Ihren Platz; der Restbetrag ist vor der Abreise fällig. Die vollständigen Buchungsbedingungen schicken wir Ihnen mit den Infos.",
  },
  {
    question: "Muss ich meinen eigenen Schläger mitbringen?",
    answer:
      "Bringen Sie gern Ihren Lieblingsschläger mit. Wenn Sie keinen haben, sagen Sie uns in Ihrer Anfrage Bescheid und wir helfen Ihnen weiter.",
  },
];

export default function PickleballUrlaubPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(localDinkDe, {
              description:
                "5 Tage Pickleball-Urlaub an der Küste von Barcelona mit Training auf Englisch und Spanisch, einem Turnier und einem 4-Sterne-Strandhotel mit Frühstück.",
              touristType: "Pickleball-Spieler aus Deutschland, Österreich, der Schweiz und Europa",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Startseite", path: "/de" },
              { name: "Local Dink: Pickleball-Urlaub in Barcelona", path: localDinkDe.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={localDinkDe}
        lang="de"
        eyebrow="Local Dink · Pickleball-Urlaub · Barcelona"
        title={
          <>
            5 Tage Pickleball, Sonne &amp; <em className="font-normal">Meer</em> bei Barcelona
          </>
        }
        intro="Das ultimative Pickleball-Wochenende für Spieler aus Deutschland, Österreich, der Schweiz und ganz Europa. Freitag bis Dienstag an der Costa Daurada: zertifizierte Trainer, ein Turnier gegen Einheimische und ein 4★-Hotel direkt am Strand. Sie müssen nur noch spielen."
        facts={["Max. 16 Teilnehmer", "4★-Hotel direkt am Strand", "Training auf Englisch & Spanisch", "Vormittags auf dem Court"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Warum diese Pickleball-Reise?"
            title="Alles organisiert. Sie spielen nur."
            intro="Eine Pickleball-Reise an die Küste von Barcelona, die sich wie ein Vereinswochenende anfühlt, nur sonniger. Das macht Local Dink besonders."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-cream p-8">
                <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Das Programm"
              title="Freitag bis Dienstag, perfekt ausbalanciert"
              intro="Vormittags Training, Matches und ein Turnier. Nachmittags echte Erholung am Mittelmeer."
            />
            <div className="mt-12 pl-4">
              <Itinerary days={days} />
            </div>
          </div>
          <div className="space-y-6 lg:pt-20">
            <Image
              src={courts}
              alt="Pickleball-Plätze im Freien mit spielbereiten Netzen"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <Image
              src={sitges}
              alt="Der Strand und die Altstadt von Sitges, nur ein kurzes Stück die Küste entlang"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <p className="text-sm text-stone">
              Ideen für den Nachmittag: <TownLink town="sitges" lang="de">Sitges</TownLink>,{" "}
              <TownLink town="tarragona" lang="de">Tarragona</TownLink> und{" "}
              <TownLink town="reus" lang="de">Reus</TownLink> sind nur eine kurze Zugfahrt entfernt, ganz einfach auf eigene Faust.
            </p>
          </div>
        </Container>
      </section>

      <PricingSection
        retreat={localDinkDe}
        lang="de"
        included={included}
        notIncluded="Flüge, Flughafentransfers, Mittag- und Abendessen, Getränke und Reiseversicherung."
        terms={[
          "Alle Preise in Euro (EUR). Beträge in Pfund und Dollar sind Richtwerte zum aktuellen Wechselkurs.",
          "Training auf Englisch und Spanisch.",
          "Max. 16 Spieler pro Reise.",
        ]}
      />

      <ComaRugaSection lang="de" />
      <HotelSection lang="de" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen zum Pickleball-Urlaub" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="de"
        title="Bereit für Ihren Pickleball-Urlaub in Barcelona?"
        intro="Fordern Sie unverbindlich alle Infos an: Programm, Termine, Preise und Verfügbarkeit. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen."
        defaultRetreat="Local Dink"
        defaultPhoneCode="+49"
      />
    </>
  );
}
