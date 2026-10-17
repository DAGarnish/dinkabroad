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
import { localDinkNl } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Pickleballvakantie Barcelona: 5-daagse pickleballreis vanaf € 1.100",
  description:
    "5 dagen pickleballvakantie aan de kust van Barcelona: training, een gezellig toernooi, een 4★-hotel aan het strand, lunches en transfers. Vanaf € 1.100 per persoon.",
  path: localDinkNl.href,
  siteLang: "nl",
});

const reasons = [
  {
    title: "Gecertificeerde coaches",
    text: "Drie trainingen van 90 minuten met gecertificeerde coaches, op niveau ingedeeld zodat iedereen uitgedaagd wordt en vooruitgaat. De training is in het Engels en Spaans.",
  },
  {
    title: "Een gezellig toernooi",
    text: "Een vriendschappelijk maar fanatiek toernooi tegen je medereizigers en Catalaanse spelers. Verhalen voor je club thuis gegarandeerd.",
  },
  {
    title: "4★-hotel aan het strand",
    text: "Vier nachten in het Estival Maramar, direct aan het strand van Coma-ruga, met een zwembad op het dak en een spa.",
  },
  {
    title: "Ontbijt, lunch & transfers",
    text: "Elke dag ontbijt, vier uitgebreide Spaanse lunches en transfers van en naar het vliegveld: alles is geregeld.",
  },
  {
    title: "Kleine groep, max. 20",
    text: "Persoonlijke aandacht van de coaches en veel nieuwe speelpartners. Ideaal als je alleen reist.",
  },
  {
    title: "Vrije tijd om te ontdekken",
    text: "De middagen zijn van jou: strand, spa of een uitstapje langs de kust naar Sitges of Barcelona.",
  },
];

const days = [
  {
    label: "Dag 1 · Vrijdag",
    title: "Aankomst & eerste training",
    text: "We halen je op van het vliegveld van Barcelona en brengen je naar het hotel aan het strand. Na een gezamenlijke lunch ga je meteen de baan op voor de eerste training van 90 minuten.",
  },
  {
    label: "Dag 2 · Zaterdag",
    title: "Training & vrij spel",
    text: "De tweede training van 90 minuten, gevolgd door vrij spel. ’s Middags heb je de keuze: een optionele excursie, meer tijd op de baan of gewoon relaxen bij het zwembad op het dak.",
  },
  {
    label: "Dag 3 · Zondag",
    title: "In de praktijk",
    text: "De derde training in de ochtend, daarna volop wedstrijden tegen steeds andere tegenstanders om het geleerde vast te zetten.",
  },
  {
    label: "Dag 4 · Maandag",
    title: "Toernooidag",
    text: "Laat zien wat je kunt in een gezellig maar fanatiek toernooi met medereizigers en spelers uit de buurt. De perfecte afsluiter van je tijd op de baan.",
  },
  {
    label: "Dag 5 · Dinsdag",
    title: "Hasta pronto",
    text: "Een laatste ontbijt aan zee, afscheid van nieuwe vrienden en de transfer terug naar het vliegveld.",
  },
];

const included = [
  "4 nachten in het 4★-hotel Estival Maramar aan het strand (twin- of eenpersoonskamer)",
  "Elke dag ontbijt en 4 uitgebreide Spaanse lunches",
  "3 × 90 minuten training met gecertificeerde coaches (in het Engels en Spaans)",
  "1 gezellig toernooi met medereizigers en locals",
  "Vrij spel op de banen",
  "Transfers van en naar het vliegveld van Barcelona",
  "Kleine groep van max. 20 spelers",
  "Persoonlijke begeleiding door het Dink Abroad-team",
];

const faqs: FaqItem[] = [
  {
    question: "Spreken de coaches Nederlands?",
    answer:
      "Nee. Onze coaches en ons team ter plaatse spreken Engels en Spaans, en de training wordt in die twee talen gegeven. Pickleball leer je vooral door voordoen en spelen, dus een basiskennis van het Engels is meestal genoeg. Twijfel je vanwege de taal? Laat het ons gerust weten in je aanvraag.",
  },
  {
    question: "Voor welk niveau is deze pickleballvakantie?",
    answer:
      "Voor elk niveau, van spelers die net hun eerste paddle hebben vastgehouden tot ervaren 4.0+-spelers. Training en wedstrijden worden op niveau ingedeeld, zodat iedereen de juiste uitdaging heeft.",
  },
  {
    question: "Kan ik alleen komen?",
    answer:
      "Ja, en veel mensen doen dat. De groep is beperkt tot 20 spelers, dus je maakt snel vrienden, op en naast de baan. Liever een eigen kamer? Een eenpersoonskamer kost € 1.700 per persoon.",
  },
  {
    question: "Zijn de vluchten inbegrepen?",
    answer:
      "Vluchten zijn niet inbegrepen, dus je kunt vertrekken vanaf elk vliegveld in Nederland, België of de rest van Europa. Land op vrijdag op Barcelona-El Prat en vlieg op dinsdag terug; de transfers van en naar het vliegveld zijn inbegrepen.",
  },
  {
    question: "Wat is wel en niet inbegrepen?",
    answer:
      "Inbegrepen: 4 nachten in een twin- of eenpersoonskamer, elke dag ontbijt, 4 lunches, 3 trainingen, een toernooi, vrij spel en transfers van en naar het vliegveld. Niet inbegrepen: vluchten, diners, drankjes, reisverzekering en optionele excursies.",
  },
  {
    question: "Hoe en wanneer betaal ik?",
    answer:
      "Als je de info hebt ontvangen en besluit mee te gaan, legt een aanbetaling je plek vast; het restbedrag betaal je vóór vertrek. De volledige boekingsvoorwaarden sturen we mee met de info.",
  },
  {
    question: "Moet ik mijn eigen paddle meenemen?",
    answer:
      "Neem gerust je favoriete paddle mee. Heb je er geen? Laat het ons weten in je aanvraag en we helpen je verder.",
  },
];

export default function PickleballVakantiePage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(localDinkNl, {
              description:
                "5 dagen pickleballvakantie aan de kust van Barcelona met training in het Engels en Spaans, een toernooi, een 4-sterrenhotel aan het strand, lunches en transfers van en naar het vliegveld.",
              touristType: "Pickleballspelers uit Nederland, België en de rest van Europa",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Home", path: "/nl" },
              { name: "Local Dink: pickleballvakantie in Barcelona", path: localDinkNl.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={localDinkNl}
        lang="nl"
        eyebrow="Local Dink · Pickleballvakantie · Barcelona"
        title={
          <>
            5 dagen pickleball, zon &amp; <em className="font-normal">zee</em> bij Barcelona
          </>
        }
        intro="Het ultieme pickleballweekend voor spelers uit Nederland, België en de rest van Europa. Vrijdag tot dinsdag aan de Costa Daurada: gecertificeerde coaches, een toernooi tegen de locals en een 4★-hotel aan het strand. Jij hoeft alleen nog te spelen."
        facts={["Max. 20 deelnemers", "4★-hotel aan het strand", "Training in het Engels & Spaans", "Transfers inbegrepen"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Waarom deze pickleballreis?"
            title="Alles geregeld. Jij speelt alleen."
            intro="Een pickleballreis naar de kust van Barcelona die voelt als een clubweekend, maar dan zonniger. Dit maakt Local Dink bijzonder."
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
              eyebrow="Het programma"
              title="Vrijdag tot dinsdag, perfect in balans"
              intro="Vijf dagen met training, wedstrijden, een toernooi en echte ontspanning aan de Middellandse Zee."
            />
            <div className="mt-12 pl-4">
              <Itinerary days={days} />
            </div>
          </div>
          <div className="space-y-6 lg:pt-20">
            <Image
              src={courts}
              alt="Pickleballbanen in de buitenlucht met speelklare netten"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <Image
              src={sitges}
              alt="Het strand en de oude stad van Sitges, een klein stukje verderop langs de kust"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <p className="text-sm text-stone">Optioneel middaguitje: Sitges ligt een stukje verderop langs de kust.</p>
          </div>
        </Container>
      </section>

      <PricingSection
        retreat={localDinkNl}
        lang="nl"
        included={included}
        notIncluded="vluchten, diners, drankjes, reisverzekering en optionele excursies."
        terms={[
          "Alle prijzen in euro (EUR). Bedragen in ponden en dollars zijn indicaties tegen de actuele wisselkoers.",
          "Training in het Engels en Spaans.",
          "Max. 20 spelers per reis.",
        ]}
      />

      <ComaRugaSection lang="nl" />
      <HotelSection lang="nl" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Goed om te weten" title="Veelgestelde vragen over de pickleballvakantie" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="nl"
        title="Klaar voor je pickleballvakantie in Barcelona?"
        intro="Vraag vrijblijvend alle info aan: programma, data, prijzen en beschikbaarheid. We nemen binnen 24 uur persoonlijk contact met je op."
        defaultRetreat="Local Dink"
        defaultPhoneCode="+31"
      />
    </>
  );
}
