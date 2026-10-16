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
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { localDinkDe } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Pickleball-Urlaub Barcelona: 5-tägige Pickleball-Reise ab 1.050 €",
  description:
    "5 Tage Pickleball-Urlaub an der Küste von Barcelona: Training, lockeres Turnier, 4★-Hotel direkt am Strand, Mittagessen und Transfers. Ab 1.050 € pro Person.",
  path: localDinkDe.href,
  siteLang: "de",
});

const reasons = [
  {
    title: "Zertifizierte Trainer",
    text: "Drei 90-minütige Einheiten mit zertifizierten Trainern, nach Niveau eingeteilt, damit jeder gefordert und gefördert wird. Trainiert wird auf Englisch und Spanisch.",
  },
  {
    title: "Ein lockeres Turnier",
    text: "Ein freundschaftliches, aber umkämpftes Turnier gegen Ihre Mitreisenden und katalanische Spieler. Geschichten für den Heimatverein garantiert.",
  },
  {
    title: "4★-Hotel direkt am Strand",
    text: "Vier Nächte im Estival Maramar, direkt am Strand von Coma-ruga, mit Pool auf dem Dach und Spa.",
  },
  {
    title: "Frühstück, Mittagessen & Transfers",
    text: "Tägliches Frühstück, vier großzügige spanische Mittagessen und Flughafentransfers hin und zurück: Alles ist organisiert.",
  },
  {
    title: "Kleine Gruppe, max. 20",
    text: "Persönliche Betreuung durch die Trainer und viele neue Spielpartner. Ideal, wenn Sie allein reisen.",
  },
  {
    title: "Freizeit zum Entdecken",
    text: "Die Nachmittage gehören Ihnen: Strand, Spa oder ein Abstecher entlang der Küste nach Sitges oder Barcelona.",
  },
];

const days = [
  {
    label: "Tag 1 · Freitag",
    title: "Ankunft & erste Einheit",
    text: "Wir holen Sie am Flughafen Barcelona ab und bringen Sie ins Hotel am Strand. Nach dem gemeinsamen Mittagessen geht es direkt auf den Court zur ersten 90-minütigen Trainingseinheit.",
  },
  {
    label: "Tag 2 · Samstag",
    title: "Training & freies Spiel",
    text: "Die zweite 90-minütige Einheit, danach freies Spiel. Am Nachmittag haben Sie die Wahl: optionaler Ausflug, mehr Zeit auf dem Court oder einfach entspannen am Pool auf dem Dach.",
  },
  {
    label: "Tag 3 · Sonntag",
    title: "Ab in die Praxis",
    text: "Die dritte Trainingseinheit am Vormittag, danach viele Matches gegen wechselnde Gegner, um das Gelernte zu festigen.",
  },
  {
    label: "Tag 4 · Montag",
    title: "Turniertag",
    text: "Stellen Sie Ihr Können in einem lockeren, aber umkämpften Turnier mit Mitreisenden und Spielern aus der Region unter Beweis. Der perfekte Abschluss Ihrer Zeit auf dem Court.",
  },
  {
    label: "Tag 5 · Dienstag",
    title: "Hasta pronto",
    text: "Ein letztes Frühstück am Meer, Abschied von neuen Freunden und Transfer zurück zum Flughafen.",
  },
];

const included = [
  "4 Nächte im 4★-Hotel Estival Maramar direkt am Strand (Zweibett- oder Einzelzimmer)",
  "Tägliches Frühstück und 4 großzügige spanische Mittagessen",
  "3 × 90 Minuten Training mit zertifizierten Trainern (auf Englisch und Spanisch)",
  "1 lockeres Turnier mit Mitreisenden und Einheimischen",
  "Freies Spiel auf den Courts",
  "Flughafentransfers in Barcelona, hin und zurück",
  "Kleine Gruppe mit max. 20 Spielern",
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
      "Ja, das machen viele. Die Gruppe ist auf 20 Spieler begrenzt, Sie finden also schnell Anschluss, auf und neben dem Court. Lieber ein eigenes Zimmer? Das Einzelzimmer kostet 1.650 € pro Person.",
  },
  {
    question: "Sind die Flüge inklusive?",
    answer:
      "Flüge sind nicht inklusive, Sie können also von jedem Flughafen in Deutschland, Österreich, der Schweiz oder Europa anreisen. Landen Sie am Freitag in Barcelona-El Prat und fliegen Sie am Dienstag zurück; die Flughafentransfers sind inklusive.",
  },
  {
    question: "Was ist inklusive und was nicht?",
    answer:
      "Inklusive: 4 Nächte im Zweibett- oder Einzelzimmer, tägliches Frühstück, 4 Mittagessen, 3 Trainingseinheiten, ein Turnier, freies Spiel und Flughafentransfers. Nicht inklusive: Flüge, Abendessen, Getränke, Reiseversicherung und optionale Ausflüge.",
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
                "5 Tage Pickleball-Urlaub an der Küste von Barcelona mit Training auf Englisch und Spanisch, einem Turnier, einem 4-Sterne-Strandhotel, Mittagessen und Flughafentransfers.",
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
        facts={["Max. 20 Teilnehmer", "4★-Hotel direkt am Strand", "Training auf Englisch & Spanisch", "Transfers inklusive"]}
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
              intro="Fünf Tage zwischen Training, Matches, Turnier und echter Erholung am Mittelmeer."
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
            <p className="text-sm text-stone">Optionaler Nachmittagsausflug: Sitges liegt gleich die Küste entlang.</p>
          </div>
        </Container>
      </section>

      <PricingSection
        retreat={localDinkDe}
        lang="de"
        included={included}
        notIncluded="Flüge, Abendessen, Getränke, Reiseversicherung und optionale Ausflüge."
        terms={[
          "Alle Preise in Euro (EUR). Beträge in Pfund und Dollar sind Richtwerte zum aktuellen Wechselkurs.",
          "Training auf Englisch und Spanisch.",
          "Max. 20 Spieler pro Reise.",
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
