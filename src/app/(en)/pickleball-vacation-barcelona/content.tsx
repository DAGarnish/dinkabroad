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
import type { Currency } from "@/lib/fx";
import { pageMetadata } from "@/lib/metadata";
import { longHaulLob } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const vacationMetadata = pageMetadata({
  title: "Barcelona Pickleball Vacation: 9-Day Pickleball Trip from the USA",
  description:
    "A 9-day Barcelona pickleball vacation for American players: pickleball by the sea, then Gaudí's Barcelona, Montserrat, cava country and flamenco, with optional tours to Tarragona and Sitges. From €3,500.",
  path: longHaulLob.href,
  locale: "en_US",
});

const days = [
  {
    label: "Day 1 · Friday",
    title: "Arrival & warm-up",
    text: "Private transfer from Barcelona–El Prat airport to our beachfront hotel in Coma-ruga. Check in and warm up with open play in the afternoon, then join the group for a warm “Bienvenidos” welcome reception.",
  },
  {
    label: "Day 2 · Saturday",
    title: "Coaching & open play",
    text: "Your first 90-minute coaching session, followed by open play. The afternoon is yours: the beach, the pool or our optional tour to Sitges.",
  },
  {
    label: "Day 3 · Sunday",
    title: "Coaching & optional Tarragona tour",
    text: "Coaching session number two and match play against different opponents. In the afternoon, join our optional guided tour of Tarragona, a UNESCO World Heritage city whose Roman amphitheater looks straight out over the Mediterranean.",
  },
  {
    label: "Day 4 · Monday",
    title: "Tournament day",
    text: "A fun, competitive tournament with your fellow travelers and local players. In the afternoon, relax on the beach or join our optional tour to Vilanova i la Geltrú.",
  },
  {
    label: "Day 5 · Tuesday",
    title: "Up the coast to Barcelona",
    text: "Optional open play in the morning before we leave the coast. Then our private coach heads for Barcelona, stopping in the Penedès for a guided vineyard visit and a wine and cava tasting at a boutique estate. Then check in to our 4★ hotel in Barcelona, your base for the rest of the trip.",
  },
  {
    label: "Day 6 · Wednesday",
    title: "Gaudí's Barcelona",
    text: "A full day exploring Barcelona. Guided tours of the awe-inspiring Sagrada Família and colorful Park Güell, then a stroll through the Gothic Quarter, Las Ramblas and the famous La Boqueria market.",
  },
  {
    label: "Day 7 · Thursday",
    title: "Montserrat & flamenco",
    text: "A day trip into the jagged mountains of Montserrat to visit the Benedictine monastery, home of the revered Black Madonna, with breathtaking views across Catalonia. Back in Barcelona, an evening of fiery flamenco with reserved seats.",
  },
  {
    label: "Day 8 · Friday",
    title: "Free day & farewell fiesta",
    text: "A free day to explore Barcelona at your own pace. In the evening we gather for the “Hasta Luego Fiesta” farewell dinner and party.",
  },
  {
    label: "Day 9 · Saturday",
    title: "Hasta luego",
    text: "Breakfast at the hotel and a short transfer to Barcelona–El Prat for your flight home. Until next time, amigos.",
  },
];

const included = [
  "4 nights in a beachfront 4★ hotel in Coma-ruga",
  "4 nights in an equivalent 4★ hotel in Barcelona",
  "2 × 90-minute coaching sessions with certified coaches",
  "Open play and a fun tournament with local players",
  "Fresh fruit and cold water at the courts",
  "Buffet breakfast every morning",
  "4 carefully selected group meals",
  "Private deluxe motor coach for day trips and the move to Barcelona",
  "Penedès wine & cava tasting",
  "Guided tours of the Sagrada Família and Park Güell",
  "Day trip to Montserrat Monastery",
  "Professional local guides on every excursion",
  "Bilingual tour director throughout",
  "Flamenco performance",
  "“Bienvenidos” welcome reception",
  "“Hasta Luego Fiesta” farewell dinner and party",
  "Airport transfers to and from Barcelona–El Prat",
];

const faqs: FaqItem[] = [
  {
    question: "Which airport should I fly into?",
    answer:
      "Fly into Barcelona–El Prat (BCN), which has nonstop service from several US cities. Our private transfer meets you on Day 1 and takes you back on Day 9.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "US and Canadian citizens don't need a visa for short tourist stays in Spain. Your passport should be valid for at least three months beyond your departure date. Please check the latest entry requirements before you travel.",
  },
  {
    question: "What level of pickleball player is this vacation for?",
    answer:
      "All levels, from recreational players to experienced 4.0+ competitors. Instruction and organized play are grouped by level so everyone gets great games.",
  },
  {
    question: "I'm traveling solo. Is that OK?",
    answer:
      "Absolutely. Many of our guests travel on their own. Choose the single-room option for your own private room, and you'll have new friends by the first evening.",
  },
  {
    question: "How do payment and deposits work?",
    answer:
      "A 20% deposit reserves your place and is applied to the total trip price. The remaining balance is due 60 days before the trip start date. Prices are set in euros.",
  },
  {
    question: "Where do we stay?",
    answer:
      "In two hotels. The first four nights are at the Estival Maramar, a beachfront 4★ hotel in Coma-ruga where we play. On Day 5 our private coach takes you and your luggage up the coast to an equivalent 4★ hotel in Barcelona for the last four nights of sightseeing.",
  },
];

// Served by `page.tsx` in euros, and in pounds or dollars to UK and US visitors (see proxy.ts).
export function LongHaulLob({ currency }: { currency: Currency }) {
  return (
    // The site defaults to en-GB; this page is written for American travelers.
    <div lang="en-US">
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLob, {
              description:
                "A 9-day pickleball vacation in Catalonia: coaching and a tournament on the Barcelona coast, then four nights in Barcelona, with guided visits to the Sagrada Família, Park Güell, Montserrat and the Penedès.",
              touristType: "Pickleball players from the USA and Canada",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Long-Haul Lob: Barcelona Pickleball Vacation", path: longHaulLob.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={longHaulLob}
        lang="en-US"
        currency={currency}
        eyebrow="Long-Haul Lob · pickleball vacation · Barcelona"
        title={
          <>
            The ultimate pickleball vacation in <em className="font-normal">Barcelona</em>
          </>
        }
        intro="Nine unforgettable days in Catalonia. Start with pickleball by the sea on the Golden Coast, then move up the coast to Barcelona for Gaudí's masterpieces, Montserrat and a night of flamenco, with a cava tasting along the way."
        facts={["2 coaching sessions + tournament", "3 guided day trips", "Bilingual tour director", "4 nights beach + 4 nights Barcelona"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Where we're going"
            title={
              <>
                Pickleball by the sea. <em className="font-normal">Catalonia</em> at its finest.
              </>
            }
            intro="We start in Coma-ruga on the Costa Daurada, Spain's Golden Coast, with four nights of pickleball by the sea. On Tuesday we move up the coast to a 4★ hotel in Barcelona for the city's sights."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Roman amphitheater of Tarragona beside the Mediterranean", name: "Tarragona", text: "Optional tour: Roman ruins by the sea" },
              { img: penedes, alt: "Rolling vineyards in the Penedès wine region", name: "Penedès", text: "Wine & cava tasting" },
              { img: sitges, alt: "The beach and church of Sitges on a sunny day", name: "Sitges", text: "Optional tour: artists' seaside town" },
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
            eyebrow="Itinerary"
            title="Nine days, perfectly paced"
            intro="Pickleball by the sea every morning from Friday to Tuesday, then Barcelona and its sights until Saturday."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} lang="en-US" />
          </div>
          <p className="mt-10 text-sm text-stone">
            * The order and timing of activities may be adjusted for the best experience.
          </p>
        </Container>
      </section>

      <PricingSection
        retreat={longHaulLob}
        lang="en-US"
        currency={currency}
        included={included}
        notIncluded="airfare, optional tours to Sitges, Tarragona and Vilanova i la Geltrú, tips, personal expenses, and meals other than daily breakfast and the 4 included group meals."
        terms={[
          "Deposit: 20% reserves your place and is applied to the total trip price.",
          "Final payment: the balance is due 60 days before the trip start date.",
          "Prices are set in euros (EUR). Dollar and pound amounts are converted at the latest exchange rate, so they change with it.",
          "Limited to 16 travelers per trip.",
        ]}
      />

      <ComaRugaSection lang="en-US" />
      <HotelSection lang="en-US" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Good to know" title="Pickleball vacation FAQs" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="en-US"
        title="Ready for the pickleball trip of a lifetime?"
        intro="Request the full itinerary, dates and availability with no obligation. We'll get back to you personally within 24 hours."
        defaultRetreat="Long-Haul Lob"
        defaultPhoneCode="+1"
      />
    </div>
  );
}
