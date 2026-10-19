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
    "Eine 9-tägige Pickleball-Reise nach Barcelona: Pickleball am Meer, danach Gaudís Barcelona, Montserrat, die Cava-Region und ein Konzert im Palau de la Música Catalana, mit optionalen Ausflügen nach Tarragona und Sitges. Ab 2.999 €.",
  path: longHaulLobDe.href,
  siteLang: "de",
});

const days = [
  {
    label: "Tag 1 · Freitag",
    title: "Ankunft & Aufwärmen",
    text: "Privattransfer vom Flughafen Barcelona-El Prat zu unserem Strandhotel in Coma-ruga. Einchecken und am Nachmittag beim freien Spiel aufwärmen, dann zum Willkommensempfang mit der Gruppe.",
  },
  {
    label: "Tag 2 · Samstag",
    title: "Training & freies Spiel",
    text: "Ihre erste 90-minütige Trainingseinheit, danach freies Spiel. Der Nachmittag gehört Ihnen: Strand, Pool oder unser optionaler Ausflug nach Sitges.",
  },
  {
    label: "Tag 3 · Sonntag",
    title: "Training & optionaler Ausflug nach Tarragona",
    text: "Die zweite Trainingseinheit und Matches gegen wechselnde Gegner. Am Nachmittag können Sie an unserer optionalen Führung durch Tarragona teilnehmen, UNESCO-Weltkulturerbe, dessen römisches Amphitheater direkt aufs Mittelmeer blickt.",
  },
  {
    label: "Tag 4 · Montag",
    title: "Turniertag",
    text: "Ein lockeres, aber umkämpftes Turnier mit Mitreisenden und Spielern aus der Region. Am Nachmittag entspannen Sie am Strand oder kommen mit auf unseren optionalen Ausflug nach Vilanova i la Geltrú.",
  },
  {
    label: "Tag 5 · Dienstag",
    title: "Die Küste hinauf nach Barcelona",
    text: "Am Vormittag optionales freies Spiel, bevor wir die Küste verlassen. Dann fährt unser Privatbus nach Barcelona, mit einem Halt im Penedès für eine Weinbergführung mit Wein- und Cava-Verkostung auf einem kleinen Weingut. Dann checken Sie in unserem 4★-Hotel in Barcelona ein, Ihrem Standort für den Rest der Reise.",
  },
  {
    label: "Tag 6 · Mittwoch",
    title: "Gaudís Barcelona",
    text: "Ein ganzer Tag in Barcelona. Führungen durch die beeindruckende Sagrada Família und den farbenfrohen Park Güell, danach ein Bummel durch das Gotische Viertel, über die Ramblas und den berühmten Markt La Boqueria.",
  },
  {
    label: "Tag 7 · Donnerstag",
    title: "Montserrat & Palau de la Música",
    text: "Ein Ausflug in die zerklüfteten Berge von Montserrat zum Benediktinerkloster mit der Schwarzen Madonna und atemberaubendem Blick über Katalonien. Zurück in Barcelona erwartet Sie ein Konzert mit reservierten Plätzen im Palau de la Música Catalana, dem prachtvollen Jugendstil-Konzertsaal und UNESCO-Welterbe.",
  },
  {
    label: "Tag 8 · Freitag",
    title: "Freier Tag & Abschiedsfiesta",
    text: "Ein freier Tag, um Barcelona in Ihrem eigenen Tempo zu entdecken. Am Abend treffen wir uns zum Abschiedsessen und zur „Hasta luego“-Fiesta.",
  },
  {
    label: "Tag 9 · Samstag",
    title: "Hasta luego",
    text: "Frühstück im Hotel und ein kurzer Transfer zum Flughafen Barcelona-El Prat für Ihren Heimflug. Bis zum nächsten Mal, amigos!",
  },
];

const included = [
  "4 Nächte in einem 4★-Hotel direkt am Strand in Coma-ruga",
  "4 Nächte in einem gleichwertigen 4★-Hotel in Barcelona",
  "2 × 90 Minuten Training mit zertifizierten Trainern (auf Englisch und Spanisch)",
  "Freies Spiel und ein lockeres Turnier mit Einheimischen",
  "Frisches Obst und kaltes Wasser auf den Courts",
  "Frühstücksbuffet jeden Morgen",
  "4 sorgfältig ausgewählte Gruppenessen",
  "Privater Luxusreisebus für die Ausflüge und die Fahrt nach Barcelona",
  "Wein- und Cava-Verkostung im Penedès",
  "Führungen durch die Sagrada Família und den Park Güell",
  "Ausflug zum Kloster Montserrat",
  "Professionelle örtliche Guides (auf Englisch oder Spanisch)",
  "Zweisprachige Reiseleitung (Englisch-Spanisch) während der ganzen Reise",
  "Konzert im Palau de la Música Catalana",
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
  {
    question: "Wo übernachten wir?",
    answer:
      "In zwei Hotels. Die ersten vier Nächte verbringen Sie im Estival Maramar, einem 4★-Hotel direkt am Strand von Coma-ruga, wo wir spielen. An Tag 5 bringt unser Privatbus Sie und Ihr Gepäck die Küste hinauf in ein gleichwertiges 4★-Hotel in Barcelona für die letzten vier Nächte mit Sightseeing.",
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
                "Eine 9-tägige Pickleball-Reise durch Katalonien: Training und ein Turnier an der Küste von Barcelona, danach vier Nächte in Barcelona mit Führungen zur Sagrada Família, zum Park Güell, nach Montserrat und ins Penedès. Reise auf Englisch und Spanisch.",
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
        intro="Neun unvergessliche Tage in Katalonien. Zuerst Pickleball am Meer an der Costa Daurada, dann die Küste hinauf nach Barcelona für Gaudís Meisterwerke, Montserrat und ein Konzert im Palau de la Música Catalana, mit einer Cava-Verkostung unterwegs."
        facts={["2 Trainingseinheiten + Turnier", "3 geführte Ausflüge", "Reise auf Englisch & Spanisch", "4 Nächte Strand + 4 Nächte Barcelona"]}
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
            intro="Wir starten in Coma-ruga an der Costa Daurada mit vier Nächten Pickleball am Meer. Am Dienstag geht es die Küste hinauf in ein 4★-Hotel in Barcelona für die Sehenswürdigkeiten der Stadt."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Römisches Amphitheater von Tarragona am Mittelmeer", name: "Tarragona", text: "Optionaler Ausflug: römische Ruinen am Meer" },
              { img: penedes, alt: "Hügelige Weinberge in der Weinregion Penedès", name: "Penedès", text: "Wein- & Cava-Verkostung" },
              { img: sitges, alt: "Strand und Kirche von Sitges an einem sonnigen Tag", name: "Sitges", text: "Optionaler Ausflug: der Küstenort der Künstler" },
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
            intro="Von Freitag bis Dienstag jeden Vormittag Pickleball am Meer, danach Barcelona und seine Sehenswürdigkeiten bis Samstag."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} lang="de" />
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
        notIncluded="Flüge, optionale Ausflüge nach Sitges, Tarragona und Vilanova i la Geltrú, Trinkgelder, persönliche Ausgaben und Mahlzeiten außer dem täglichen Frühstück und den 4 inklusiven Gruppenessen."
        terms={[
          "Anzahlung: 20 % sichern Ihren Platz und werden auf den Reisepreis angerechnet.",
          "Restzahlung: fällig 60 Tage vor Reisebeginn.",
          "Alle Preise in Euro (EUR). Beträge in Pfund und Dollar sind Richtwerte zum aktuellen Wechselkurs.",
          "Max. 16 Reisende pro Reise.",
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
