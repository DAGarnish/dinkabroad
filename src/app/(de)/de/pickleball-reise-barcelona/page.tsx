import Image from "next/image";
import penedes from "@/assets/images/penedes-vineyards.jpg";
import sitges from "@/assets/images/sitges.jpg";
import tarragona from "@/assets/images/tarragona-amphitheatre.jpg";
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
import { longHaulLobDe } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Pickleball-Reise Barcelona: 9 Tage Pickleball und Kultur",
  description:
    "Eine 9-tägige Pickleball-Reise nach Barcelona: 6 Tage Pickleball, Gaudís Barcelona, Montserrat, Tarragona, die Cava-Region und Flamenco von einem 4★-Strandhotel aus. Ab 3.500 €.",
  path: longHaulLobDe.href,
  siteLang: "de",
});

const days = [
  {
    label: "Tag 1",
    title: "¡Bienvenidos!",
    text: "Privattransfer vom Flughafen Barcelona-El Prat zu unserem Strandhotel in Coma-ruga. Ankommen, die Beine bei einem Nachmittag Pickleball lockern und dann zum Willkommensempfang mit der Gruppe.",
  },
  {
    label: "Tag 2",
    title: "Pickleball & das römische Tarragona",
    text: "Ein Vormittag mit Training und Spiel, danach ein geführter Nachmittag in Tarragona, UNESCO-Weltkulturerbe, dessen römisches Amphitheater direkt aufs Mittelmeer blickt.",
  },
  {
    label: "Tag 3",
    title: "Gaudís Barcelona",
    text: "Ein ganzer Tag in Barcelona im Privatbus. Führungen durch die beeindruckende Sagrada Família und den farbenfrohen Park Güell, danach ein Bummel durch das Gotische Viertel, über die Ramblas und den berühmten Markt La Boqueria.",
  },
  {
    label: "Tag 4",
    title: "Pickleball & Montserrat",
    text: "Pickleball am Vormittag, dann hinauf in die zerklüfteten Berge von Montserrat zum Benediktinerkloster mit der Schwarzen Madonna und atemberaubendem Blick über Katalonien.",
  },
  {
    label: "Tag 5",
    title: "Spielen mit Einheimischen",
    text: "Pickleball boomt in Spanien. Heute stehen Sie mit Spielern aus der Region auf dem Court, danach ist der Nachmittag frei für Strand, Dachpool oder das Hotel-Spa.",
  },
  {
    label: "Tag 6",
    title: "Cava-Region & Sitges",
    text: "Eine kurze Busfahrt ins Penedès zur Weinbergführung mit Wein- und Cava-Verkostung auf einem kleinen Weingut. Anschließend nach Sitges, dem weißen Küstenort, den Künstler seit jeher lieben.",
  },
  {
    label: "Tag 7",
    title: "Pickleball & Flamenco",
    text: "Ein Vormittag auf dem Court, ein freier Nachmittag und ein Abend voller Flamenco mit reservierten Plätzen: Gitarren, leidenschaftlicher Gesang und das rhythmische Stampfen der Tänzer.",
  },
  {
    label: "Tag 8",
    title: "Letztes Match & Abschiedsfiesta",
    text: "Die letzte Einheit endet mit einem lockeren Turnier. Am Abend treffen wir uns zum Abschiedsessen und zur „Hasta luego“-Fiesta.",
  },
  {
    label: "Tag 9",
    title: "Hasta luego",
    text: "Frühstück im Hotel und Transfer zum Flughafen Barcelona-El Prat für Ihren Heimflug. Bis zum nächsten Mal, amigos!",
  },
];

const included = [
  "8 Nächte in einem 4★-Hotel direkt am Strand",
  "6 Tage Pickleball im Freien: Training, organisiertes Spiel und Matches mit Einheimischen (auf Englisch und Spanisch)",
  "Frisches Obst und kaltes Wasser auf den Courts",
  "Transport zu den Courts und zurück",
  "Frühstücksbuffet jeden Morgen",
  "4 sorgfältig ausgewählte Gruppenessen",
  "Privater Luxusreisebus für die Ausflüge",
  "Führungen durch die Sagrada Família und den Park Güell",
  "Ausflug zum Kloster Montserrat",
  "Führung durch das römische Tarragona",
  "Wein- und Cava-Verkostung im Penedès und Besuch in Sitges",
  "Professionelle örtliche Guides (auf Englisch oder Spanisch)",
  "Zweisprachige Reiseleitung (Englisch-Spanisch) während der ganzen Reise",
  "Flamenco-Vorstellung",
  "Willkommensempfang",
  "Abschiedsessen und „Hasta luego“-Fiesta",
  "Flughafentransfers ab/bis Barcelona-El Prat",
];

const faqs: FaqItem[] = [
  {
    question: "Findet die Reise auf Deutsch statt?",
    answer:
      "Nein. Unsere Trainer, die Reiseleitung und die örtlichen Guides sprechen Englisch und Spanisch, und die Reise findet in diesen beiden Sprachen statt. Auf dem Court lernt man Pickleball vor allem durch Vormachen, daher reichen Grundkenntnisse in Englisch in der Regel aus, um die Reise voll zu genießen. Wenn Sie wegen der Sprache unsicher sind, schreiben Sie es uns einfach in Ihrer Anfrage.",
  },
  {
    question: "Welchen Flughafen sollte ich ansteuern?",
    answer:
      "Barcelona-El Prat (BCN), gut erreichbar von vielen Städten in Deutschland, Österreich und der Schweiz. Unser Privattransfer holt Sie an Tag 1 ab und bringt Sie an Tag 9 zurück.",
  },
  {
    question: "Brauche ich ein Visum?",
    answer:
      "Staatsangehörige der EU und der Schweiz brauchen kein Visum; ein gültiger Personalausweis oder Reisepass genügt. Für andere Nationalitäten gelten eigene Regeln. Prüfen Sie vor der Abreise immer die aktuellen Einreisebestimmungen.",
  },
  {
    question: "Für welches Spielniveau ist diese Pickleball-Reise?",
    answer:
      "Für alle Niveaus, von Freizeitspielern bis zu erfahrenen 4.0+-Spielern. Training und organisiertes Spiel werden nach Niveau eingeteilt, damit alle gute Matches haben.",
  },
  {
    question: "Ich reise allein. Ist das ein Problem?",
    answer:
      "Überhaupt nicht. Viele unserer Gäste reisen allein. Wählen Sie das Einzelzimmer für Ihren eigenen Rückzugsort, und spätestens am ersten Abend haben Sie neue Freunde.",
  },
  {
    question: "Wie funktionieren Zahlung und Anzahlung?",
    answer:
      "Eine Anzahlung von 20 % sichert Ihren Platz und wird auf den Reisepreis angerechnet. Der Restbetrag ist 60 Tage vor Reisebeginn fällig. Alle Preise in Euro.",
  },
];

export default function PickleballReisePage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLobDe, {
              description:
                "Eine 9-tägige Pickleball-Reise an der Küste von Barcelona mit 6 Tagen Pickleball und geführten Ausflügen nach Barcelona, Montserrat, Tarragona, ins Penedès und nach Sitges. Reise auf Englisch und Spanisch.",
              touristType: "Pickleball-Spieler mit weiter Anreise oder mehr Zeit",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Startseite", path: "/de" },
              { name: "Long-Haul Lob: Pickleball-Reise nach Barcelona", path: longHaulLobDe.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={longHaulLobDe}
        lang="de"
        eyebrow="Long-Haul Lob · Pickleball-Reise · Barcelona"
        title={
          <>
            Die ultimative Pickleball-Reise nach <em className="font-normal">Barcelona</em>
          </>
        }
        intro="Neun unvergessliche Tage an der Mittelmeerküste bei Barcelona. Sechs Tage Pickleball mit Einheimischen, Gaudís Meisterwerke, Montserrat, das römische Tarragona, die Cava-Region und ein Flamenco-Abend, alles von einem 4★-Hotel direkt am Strand aus."
        facts={["6 Tage Pickleball", "4 geführte Ausflüge", "Reise auf Englisch & Spanisch", "8 Nächte, 4★ am Strand"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Wohin es geht"
            title={
              <>
                Pickleball am Meer. Das Beste von <em className="font-normal">Katalonien</em>.
              </>
            }
            intro="Unser Basislager ist Coma-ruga an der Costa Daurada. Von dort bringt uns unser Privatbus zu den Höhepunkten Kataloniens, und abends geht es immer zurück an den Strand."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Römisches Amphitheater von Tarragona am Mittelmeer", name: "Tarragona", text: "Römische Ruinen am Meer" },
              { img: penedes, alt: "Hügelige Weinberge in der Weinregion Penedès", name: "Penedès", text: "Wein- & Cava-Verkostung" },
              { img: sitges, alt: "Strand und Kirche von Sitges an einem sonnigen Tag", name: "Sitges", text: "Der Küstenort der Künstler" },
            ].map((p) => (
              <figure key={p.name} className="group relative overflow-hidden rounded-[2rem]">
                <Image
                  src={p.img}
                  alt={p.alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 text-cream">
                  <span className="block font-display text-3xl">{p.name}</span>
                  <span className="text-sm text-cream/80">{p.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading
            eyebrow="Reiseverlauf"
            title="Neun Tage, perfekt getaktet"
            intro="An sechs Tagen steht Pickleball auf dem Programm, dazu geführte Ausflüge und viel Zeit zum Entspannen."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} />
          </div>
          <p className="mt-10 text-sm text-stone">
            * Reihenfolge und Zeiten der Aktivitäten können für das beste Erlebnis angepasst werden.
          </p>
        </Container>
      </section>

      <PricingSection
        retreat={longHaulLobDe}
        lang="de"
        included={included}
        notIncluded="Flüge, Trinkgelder, persönliche Ausgaben und Mahlzeiten außer dem täglichen Frühstück und den 4 inklusiven Gruppenessen."
        terms={[
          "Anzahlung: 20 % sichern Ihren Platz und werden auf den Reisepreis angerechnet.",
          "Restzahlung: fällig 60 Tage vor Reisebeginn.",
          "Alle Preise in Euro (EUR). Beträge in Pfund und Dollar sind Richtwerte zum aktuellen Wechselkurs.",
          "Reise auf Englisch und Spanisch.",
        ]}
      />

      <ComaRugaSection lang="de" />
      <HotelSection lang="de" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen zur Reise" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="de"
        title="Bereit für die Pickleball-Reise Ihres Lebens?"
        intro="Fordern Sie unverbindlich den kompletten Reiseverlauf, Termine und Verfügbarkeit an. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen."
        defaultRetreat="Long-Haul Lob"
        defaultPhoneCode="+49"
      />
    </>
  );
}
