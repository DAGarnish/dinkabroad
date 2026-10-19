import Image from "next/image";
import Link from "next/link";
import sunset from "@/assets/images/coma-ruga-sunset.jpg";
import courts from "@/assets/images/pickleball-courts.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ComaRugaSection, EnquirySection, HotelSection, RetreatCard } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { retreatsNl } from "@/lib/retreats";
import { faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pickleballreizen Barcelona | Pickleballvakantie in Spanje | Dink Abroad",
  description:
    "Pickleballreizen en pickleballvakanties aan de kust van Barcelona. Training, toernooien en een 4★-strandhotel in Coma-ruga, een uur met de trein vanaf Barcelona. Max. 16 spelers.",
  path: "/nl",
  absoluteTitle: true,
  siteLang: "nl",
});

const pillars = [
  {
    title: "Training die je beter maakt",
    text: "Trainingen van 90 minuten met gecertificeerde coaches, afgestemd op jouw niveau, van je eerste dink tot toernooiklaar. De training is in het Engels en Spaans.",
  },
  {
    title: "Kleine groepen, warm welkom",
    text: "Nooit meer dan 16 spelers, dus je krijgt echte aandacht op de baan. Kom je alleen? Voor de lunch heb je al nieuwe speelpartners.",
  },
  {
    title: "Spelen tegen de locals",
    text: "Pickleball is booming in Spanje. Gezellige toernooien en vrij spel zetten je aan het net tegenover Catalaanse spelers.",
  },
  {
    title: "Zon, zee & Spanje",
    text: "’s Ochtends op de baan, ’s middags aan de Middellandse Zee. Barcelona, Sitges en Tarragona liggen allemaal dichtbij.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Waar vinden de pickleballreizen van Dink Abroad plaats?",
    answer:
      "Alle reizen vinden plaats in Coma-ruga aan de Costa Daurada in Catalonië. Met de directe trein langs de kust ben je in een uur in het centrum van Barcelona. We verblijven in het Estival Maramar, een 4-sterrenhotel aan het strand.",
  },
  {
    question: "Spreken de coaches Nederlands?",
    answer:
      "Nee. Onze coaches en ons team ter plaatse spreken Engels en Spaans, en de trainingen worden in die twee talen gegeven. Pickleball leer je vooral door voordoen en spelen, dus een basiskennis van het Engels is meestal genoeg. Twijfel je vanwege de taal? Laat het ons gerust weten in je aanvraag.",
  },
  {
    question: "Welke reis past bij mij?",
    answer:
      "Local Dink is een pickleballvakantie van 5 dagen (vrijdag tot dinsdag) voor spelers uit Nederland, België en de rest van Europa. Long-Haul Lob is een reis van 9 dagen met hetzelfde pickleballprogramma aan zee van vrijdag tot dinsdag, en daarna vier nachten in Barcelona met begeleide bezoeken aan Gaudí, Montserrat en de Penedès, plus optionele excursies naar Tarragona, Sitges en Vilanova i la Geltrú.",
  },
  {
    question: "Welk niveau heb ik nodig?",
    answer:
      "Alle niveaus zijn welkom, van beginners tot ervaren 4.0+-spelers. Trainingen en wedstrijden worden op niveau ingedeeld, zodat iedereen uitgedaagd wordt en plezier heeft.",
  },
  {
    question: "Kan ik alleen komen?",
    answer:
      "Zeker. Veel gasten reizen alleen. Met maximaal 16 spelers groeit de groep snel naar elkaar toe, op en naast de baan.",
  },
  {
    question: "Zijn de vluchten inbegrepen?",
    answer:
      "Nee. Vluchten zijn niet inbegrepen, zodat je kunt vertrekken van waar het jou het beste uitkomt. Bij de Long-Haul Lob zijn transfers van en naar het vliegveld inbegrepen. Voor de Local Dink bereik je Coma-ruga makkelijk met de trein langs de kust vanaf Barcelona.",
  },
];

export default function NlHomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/nl#webpage"),
              url: absoluteUrl("/nl"),
              name: "Pickleballreizen Barcelona | Dink Abroad",
              inLanguage: "nl-NL",
              about: { "@id": absoluteUrl("/#organization") },
              isPartOf: { "@id": absoluteUrl("/#website") },
            },
            {
              "@type": "ItemList",
              name: "Pickleballreizen van Dink Abroad",
              itemListElement: retreatsNl.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(r.href),
                name: r.name,
              })),
            },
            ...retreatsNl.map((r) => tripSchema(r, { description: r.summary, touristType: r.audience })),
            hotelSchema,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-cream">
        <Image
          src={sunset}
          alt="Gouden zonsondergang boven de palmbomen op het strand van Coma-ruga aan de Costa Daurada"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <Container className="w-full pt-36 pb-16 sm:pb-24">
          <p className="animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">
            Pickleballreizen · Kust van Barcelona
          </p>
          <h1 className="mt-6 max-w-4xl animate-rise font-display text-5xl leading-[1.02] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-7xl lg:text-[5.5rem]">
            Pickleballreizen aan de kust van <em className="font-normal">Barcelona</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms] sm:text-xl">
            Pickleballvakanties in kleine groepen in het zonnige Coma-ruga, een uur met de trein langs de kust vanaf
            Barcelona. Topcoaching, gezellige toernooien en een hotel aan het strand. Jij hoeft alleen nog te spelen.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="#retreats"
              className="rounded-full bg-ball px-7 py-4 font-semibold text-ink transition hover:bg-white"
            >
              Ontdek de reizen
            </Link>
            <Link
              href="#enquire"
              className="rounded-full border border-cream/40 px-7 py-4 font-semibold backdrop-blur transition hover:bg-cream/10"
            >
              Ontvang gratis alle info
            </Link>
          </div>
          <ul className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-sm sm:grid-cols-4">
            {[
              ["Max. 16", "spelers per reis"],
              ["4★", "hotel aan het strand"],
              ["1 uur", "met de trein vanaf Barcelona"],
              ["EN · ES", "training in het Engels & Spaans"],
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
              eyebrow="Waarom Dink Abroad"
              title={
                <>
                  De pickleballreis waar je <em className="font-normal">volgend</em> seizoen nog over praat
                </>
              }
              intro="We hebben alles wat spelers zo leuk vinden aan een goed clubweekend (goede training, spannende wedstrijden, nieuwe vrienden) naar de Middellandse Zee verplaatst. Wij regelen de banen, de coaches, het hotel en de transfers. Jij neemt alleen je paddle mee."
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
              alt="Pickleballbanen in de buitenlucht met blauwe speelvlakken en netten in de zon"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -left-4 top-10 rotate-[-4deg] rounded-2xl bg-ball px-5 py-4 text-ink shadow-xl sm:-left-10">
              <p className="font-display text-3xl leading-none">Costa Daurada</p>
              <p className="mt-1 text-xs font-semibold tracking-wide uppercase">De Gouden Kust van Catalonië</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Retreats */}
      <section id="retreats" className="scroll-mt-10 bg-sand py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Kies je reis"
            title="Twee manieren om pickleball te spelen in Barcelona"
            intro="Of je nu een lang weekend de zon in wilt of kiest voor de grote reis met cultuur en excursies: er is een Dink Abroad-reis die bij je past."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {retreatsNl.map((r) => (
              <RetreatCard key={r.slug} retreat={r} lang="nl" />
            ))}
          </div>
        </Container>
      </section>

      <ComaRugaSection lang="nl" />
      <HotelSection lang="nl" />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Goed om te weten" title="Veelgestelde vragen" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="nl"
        title="Klaar voor pickleball aan zee?"
        intro="Vertel ons iets over jezelf en we sturen je binnen 24 uur persoonlijk het volledige programma, de data, prijzen en beschikbaarheid."
        defaultPhoneCode="+31"
      />
    </>
  );
}
