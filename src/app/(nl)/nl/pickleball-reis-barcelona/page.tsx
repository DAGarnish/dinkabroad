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
import { longHaulLobNl } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Pickleballreis Barcelona: 9 dagen pickleball en cultuur",
  description:
    "Een 9-daagse pickleballreis naar Barcelona: eerst pickleball aan zee, daarna het Barcelona van Gaudí, Montserrat, Tarragona, de cavastreek en flamenco. Vanaf € 3.500.",
  path: longHaulLobNl.href,
  siteLang: "nl",
});

const days = [
  {
    label: "Dag 1 · Vrijdag",
    title: "¡Bienvenidos!",
    text: "Privétransfer van het vliegveld Barcelona-El Prat naar ons hotel aan het strand in Coma-ruga. Even landen, afkoelen in de infinity pool en dan door naar de welkomstborrel met de groep.",
  },
  {
    label: "Dag 2 · Zaterdag",
    title: "Training & vrij spel",
    text: "Je eerste training van 90 minuten, gevolgd door vrij spel. Pickleball is altijd ’s ochtends, dus de middag is van jou: het strand, het zwembad of een kort treinritje naar Sitges.",
  },
  {
    label: "Dag 3 · Zondag",
    title: "Pickleball & Romeins Tarragona",
    text: "De tweede training en wedstrijden tegen steeds andere tegenstanders, daarna een middag met gids in Tarragona, UNESCO-werelderfgoed, waar het Romeinse amfitheater uitkijkt over de Middellandse Zee.",
  },
  {
    label: "Dag 4 · Maandag",
    title: "Laatste training & toernooi",
    text: "Je derde training, daarna een gezellig maar fanatiek toernooi met medereizigers en spelers uit de buurt. Geniet nog van een laatste middag op het strand voordat we de kust verlaten.",
  },
  {
    label: "Dag 5 · Dinsdag",
    title: "Langs de kust naar Barcelona",
    text: "Onze privébus rijdt naar Barcelona, met een tussenstop in de Penedès voor een rondleiding door de wijngaarden en een wijn- en cavaproeverij bij een kleine wijnmakerij. Daarna check je in bij ons 4★-hotel in Barcelona, je uitvalsbasis voor de rest van de reis.",
  },
  {
    label: "Dag 6 · Woensdag",
    title: "Het Barcelona van Gaudí",
    text: "Een hele dag Barcelona ontdekken. Rondleidingen door de indrukwekkende Sagrada Família en het kleurrijke Park Güell, daarna een wandeling door de Gotische wijk, over de Ramblas en langs de beroemde markt La Boqueria.",
  },
  {
    label: "Dag 7 · Donderdag",
    title: "Montserrat & flamenco",
    text: "Een dagtocht naar de grillige bergen van Montserrat en het benedictijnenklooster met de Zwarte Madonna, met een adembenemend uitzicht over Catalonië. Terug in Barcelona wacht een avond vol flamenco met gereserveerde plaatsen.",
  },
  {
    label: "Dag 8 · Vrijdag",
    title: "Vrije dag & afscheidsfeest",
    text: "Een vrije dag om Barcelona op je eigen tempo te ontdekken. ’s Avonds komen we samen voor het afscheidsdiner en het ‘Hasta luego’-feest.",
  },
  {
    label: "Dag 9 · Zaterdag",
    title: "Hasta luego",
    text: "Ontbijt in het hotel en een korte transfer naar het vliegveld Barcelona-El Prat voor je vlucht naar huis. Tot de volgende keer, amigos!",
  },
];

const included = [
  "4 nachten in een 4★-hotel aan het strand in Coma-ruga",
  "4 nachten in een vergelijkbaar 4★-hotel in Barcelona",
  "3 × 90 minuten training met gecertificeerde coaches (in het Engels en Spaans)",
  "Vrij spel en een gezellig toernooi met spelers uit de buurt",
  "Vers fruit en koud water op de banen",
  "Elke ochtend een ontbijtbuffet",
  "4 zorgvuldig gekozen groepsmaaltijden",
  "Luxe privétouringcar voor de excursies en de rit naar Barcelona",
  "Rondleiding door Romeins Tarragona",
  "Wijn- en cavaproeverij in de Penedès",
  "Rondleidingen door de Sagrada Família en Park Güell",
  "Excursie naar het klooster van Montserrat",
  "Professionele lokale gidsen (in het Engels of Spaans)",
  "Tweetalige reisleiding (Engels-Spaans) tijdens de hele reis",
  "Flamencovoorstelling",
  "Welkomstborrel",
  "Afscheidsdiner en ‘Hasta luego’-feest",
  "Transfers van en naar het vliegveld Barcelona-El Prat",
];

const faqs: FaqItem[] = [
  {
    question: "Is de reis in het Nederlands?",
    answer:
      "Nee. Onze coaches, de reisleiding en de lokale gidsen spreken Engels en Spaans, en de reis is in die twee talen. Op de baan leer je pickleball vooral door voordoen, dus een basiskennis van het Engels is meestal genoeg om volop van de reis te genieten. Twijfel je vanwege de taal? Laat het ons gerust weten in je aanvraag.",
  },
  {
    question: "Op welk vliegveld moet ik landen?",
    answer:
      "Barcelona-El Prat (BCN), goed bereikbaar vanaf onder meer Amsterdam, Eindhoven, Rotterdam en Brussel. Onze privétransfer haalt je op dag 1 op en brengt je op dag 9 weer terug.",
  },
  {
    question: "Heb ik een visum nodig?",
    answer:
      "Inwoners van de EU hebben geen visum nodig; een geldige identiteitskaart of geldig paspoort is genoeg. Voor andere nationaliteiten gelden eigen regels. Controleer voor vertrek altijd de actuele inreisvoorwaarden.",
  },
  {
    question: "Voor welk niveau is deze pickleballreis?",
    answer:
      "Voor alle niveaus, van recreatieve spelers tot ervaren 4.0+-spelers. Training en georganiseerd spel worden op niveau ingedeeld, zodat iedereen goede wedstrijden speelt.",
  },
  {
    question: "Ik reis alleen. Is dat een probleem?",
    answer:
      "Helemaal niet. Veel van onze gasten reizen alleen. Kies voor een eenpersoonskamer als je een eigen plek wilt, en uiterlijk op de eerste avond heb je nieuwe vrienden.",
  },
  {
    question: "Hoe werken betaling en aanbetaling?",
    answer:
      "Een aanbetaling van 20% legt je plek vast en wordt verrekend met de reissom. Het restbedrag betaal je 60 dagen voor vertrek. Alle prijzen zijn in euro.",
  },
  {
    question: "Waar verblijven we?",
    answer:
      "In twee hotels. De eerste vier nachten verblijf je in het Estival Maramar, een 4★-hotel aan het strand in Coma-ruga, waar we spelen. Op dag 5 brengt onze privébus jou en je bagage langs de kust naar een vergelijkbaar 4★-hotel in Barcelona voor de laatste vier nachten vol bezienswaardigheden.",
  },
];

export default function PickleballReisPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLobNl, {
              description:
                "Een 9-daagse pickleballreis door Catalonië: training en een toernooi aan de kust bij Barcelona, daarna vier nachten in Barcelona, met begeleide bezoeken aan de Sagrada Família, Park Güell, Montserrat, Tarragona en de Penedès. Reis in het Engels en Spaans.",
              touristType: "Pickleballspelers die van verder weg komen",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Home", path: "/nl" },
              { name: "Long-Haul Lob: pickleballreis naar Barcelona", path: longHaulLobNl.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={longHaulLobNl}
        lang="nl"
        eyebrow="Long-Haul Lob · Pickleballreis · Barcelona"
        title={
          <>
            De ultieme pickleballreis naar <em className="font-normal">Barcelona</em>
          </>
        }
        intro="Negen onvergetelijke dagen in Catalonië. Je begint met pickleball aan zee aan de Costa Daurada en reist daarna langs de kust naar Barcelona voor de meesterwerken van Gaudí, Montserrat en een flamenco-avond, met Romeins Tarragona en de cavastreek onderweg."
        facts={["3 trainingen + toernooi", "4 begeleide excursies", "Reis in het Engels & Spaans", "4 nachten strand + 4 nachten Barcelona"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Waar je naartoe gaat"
            title={
              <>
                Pickleball aan zee. Het beste van <em className="font-normal">Catalonië</em>.
              </>
            }
            intro="We beginnen in Coma-ruga aan de Costa Daurada, met vier nachten pickleball aan zee. Op dinsdag reizen we langs de kust naar een 4★-hotel in Barcelona voor de bezienswaardigheden van de stad."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Romeins amfitheater van Tarragona aan de Middellandse Zee", name: "Tarragona", text: "Romeinse ruïnes aan zee" },
              { img: penedes, alt: "Glooiende wijngaarden in de wijnstreek Penedès", name: "Penedès", text: "Wijn- & cavaproeverij" },
              { img: sitges, alt: "Strand en kerk van Sitges op een zonnige dag", name: "Sitges", text: "Het kustplaatsje van de kunstenaars" },
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
            eyebrow="Reisschema"
            title="Negen dagen, perfect afgestemd"
            intro="Van vrijdag tot dinsdag elke ochtend pickleball aan zee, daarna tot zaterdag Barcelona en zijn bezienswaardigheden."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} />
          </div>
          <p className="mt-10 text-sm text-stone">
            * Volgorde en tijden van de activiteiten kunnen worden aangepast voor de beste ervaring.
          </p>
        </Container>
      </section>

      <PricingSection
        retreat={longHaulLobNl}
        lang="nl"
        included={included}
        notIncluded="vluchten, fooien, persoonlijke uitgaven en maaltijden buiten het dagelijkse ontbijt en de 4 inbegrepen groepsmaaltijden."
        terms={[
          "Aanbetaling: 20% legt je plek vast en wordt verrekend met de reissom.",
          "Restbetaling: 60 dagen voor vertrek.",
          "Alle prijzen in euro (EUR). Bedragen in ponden en dollars zijn indicaties tegen de actuele wisselkoers.",
          "Max. 16 reizigers per reis.",
          "Reis in het Engels en Spaans.",
        ]}
      />

      <ComaRugaSection lang="nl" />
      <HotelSection lang="nl" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Goed om te weten" title="Veelgestelde vragen over de reis" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="nl"
        title="Klaar voor de pickleballreis van je leven?"
        intro="Vraag vrijblijvend het volledige reisschema, de data en de beschikbaarheid aan. We nemen binnen 24 uur persoonlijk contact met je op."
        defaultRetreat="Long-Haul Lob"
        defaultPhoneCode="+31"
      />
    </>
  );
}
