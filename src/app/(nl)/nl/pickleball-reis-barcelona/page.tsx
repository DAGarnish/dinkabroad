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
    "Een 9-daagse pickleballreis naar Barcelona: 6 dagen pickleball, het Barcelona van Gaudí, Montserrat, Tarragona, de cavastreek en flamenco vanuit een 4★-strandhotel. Vanaf € 3.500.",
  path: longHaulLobNl.href,
  siteLang: "nl",
});

const days = [
  {
    label: "Dag 1",
    title: "¡Bienvenidos!",
    text: "Privétransfer van het vliegveld Barcelona-El Prat naar ons hotel aan het strand in Coma-ruga. Even landen, de benen losmaken met een middagje pickleball en dan door naar de welkomstborrel met de groep.",
  },
  {
    label: "Dag 2",
    title: "Pickleball & Romeins Tarragona",
    text: "Een ochtend vol training en spel, gevolgd door een middag met gids in Tarragona, UNESCO-werelderfgoed, waar het Romeinse amfitheater uitkijkt over de Middellandse Zee.",
  },
  {
    label: "Dag 3",
    title: "Het Barcelona van Gaudí",
    text: "Een hele dag Barcelona met een privébus. Rondleidingen door de indrukwekkende Sagrada Família en het kleurrijke Park Güell, daarna een wandeling door de Gotische wijk, over de Ramblas en langs de beroemde markt La Boqueria.",
  },
  {
    label: "Dag 4",
    title: "Pickleball & Montserrat",
    text: "’s Ochtends pickleball, daarna de grillige bergen van Montserrat in naar het benedictijnenklooster met de Zwarte Madonna en een adembenemend uitzicht over Catalonië.",
  },
  {
    label: "Dag 5",
    title: "Spelen met de locals",
    text: "Pickleball is booming in Spanje. Vandaag sta je op de baan met spelers uit de buurt, daarna is de middag vrij voor het strand, het zwembad op het dak of de spa van het hotel.",
  },
  {
    label: "Dag 6",
    title: "Cavastreek & Sitges",
    text: "Een korte busrit naar de Penedès voor een rondleiding door de wijngaarden en een wijn- en cavaproeverij bij een kleine wijnmakerij. Daarna door naar Sitges, het witte kustplaatsje waar kunstenaars altijd al van hielden.",
  },
  {
    label: "Dag 7",
    title: "Pickleball & flamenco",
    text: "Een ochtend op de baan, een vrije middag en een avond vol flamenco met gereserveerde plaatsen: gitaren, vurige zang en het ritmische stampen van de dansers.",
  },
  {
    label: "Dag 8",
    title: "Laatste wedstrijd & afscheidsfeest",
    text: "De laatste sessie eindigt met een gezellig toernooi. ’s Avonds komen we samen voor het afscheidsdiner en het ‘Hasta luego’-feest.",
  },
  {
    label: "Dag 9",
    title: "Hasta luego",
    text: "Ontbijt in het hotel en transfer naar het vliegveld Barcelona-El Prat voor je vlucht naar huis. Tot de volgende keer, amigos!",
  },
];

const included = [
  "8 nachten in een 4★-hotel aan het strand",
  "6 dagen pickleball in de buitenlucht: training, georganiseerd spel en wedstrijden met locals (in het Engels en Spaans)",
  "Vers fruit en koud water op de banen",
  "Vervoer van en naar de banen",
  "Elke ochtend een ontbijtbuffet",
  "4 zorgvuldig gekozen groepsmaaltijden",
  "Luxe privétouringcar voor de excursies",
  "Rondleidingen door de Sagrada Família en Park Güell",
  "Excursie naar het klooster van Montserrat",
  "Rondleiding door Romeins Tarragona",
  "Wijn- en cavaproeverij in de Penedès en bezoek aan Sitges",
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
];

export default function PickleballReisPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLobNl, {
              description:
                "Een 9-daagse pickleballreis aan de kust van Barcelona met 6 dagen pickleball en begeleide excursies naar Barcelona, Montserrat, Tarragona, de Penedès en Sitges. Reis in het Engels en Spaans.",
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
        intro="Negen onvergetelijke dagen aan de Middellandse Zee bij Barcelona. Zes dagen pickleball met de locals, de meesterwerken van Gaudí, Montserrat, Romeins Tarragona, de cavastreek en een flamenco-avond, allemaal vanuit een 4★-hotel aan het strand."
        facts={["6 dagen pickleball", "4 begeleide excursies", "Reis in het Engels & Spaans", "8 nachten, 4★ aan het strand"]}
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
            intro="Onze uitvalsbasis is Coma-ruga aan de Costa Daurada. Van daaruit brengt onze privébus ons naar de hoogtepunten van Catalonië, en ’s avonds gaan we altijd terug naar het strand."
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
            intro="Zes dagen staat pickleball op het programma, met daarnaast begeleide excursies en volop tijd om te ontspannen."
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
