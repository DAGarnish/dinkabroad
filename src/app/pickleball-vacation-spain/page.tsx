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
import { longHaulLob } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Pickleball Vacation in Spain: 9-Day Barcelona Coast Pickleball Trip",
  description:
    "A 9-day pickleball vacation in Spain for American players: 6 days of pickleball, Barcelona, Montserrat, Tarragona, cava country and flamenco from a beachfront 4★ hotel. From €3,950.",
  path: longHaulLob.href,
});

const days = [
  {
    label: "Day 1",
    title: "¡Bienvenidos!",
    text: "Private transfer from Barcelona–El Prat airport to our beachfront hotel in Coma-ruga. Settle in, stretch your legs with an afternoon of pickleball, then join the group for a warm “Bienvenidos” welcome reception.",
  },
  {
    label: "Day 2",
    title: "Pickleball & Roman Tarragona",
    text: "A morning of instruction and play, then a guided afternoon in Tarragona, a UNESCO World Heritage city whose Roman amphitheater looks straight out over the Mediterranean.",
  },
  {
    label: "Day 3",
    title: "Gaudí's Barcelona",
    text: "A full day in Barcelona by private coach. Guided tours of the awe-inspiring Sagrada Família and colorful Park Güell, then a stroll through the Gothic Quarter, Las Ramblas and the famous La Boqueria market.",
  },
  {
    label: "Day 4",
    title: "Pickleball & Montserrat",
    text: "Morning pickleball, then into the jagged mountains of Montserrat to visit the Benedictine monastery, home of the revered Black Madonna, with breathtaking views across Catalonia.",
  },
  {
    label: "Day 5",
    title: "Play with the locals",
    text: "Pickleball is booming in Spain. Today's session puts you on court with local players, followed by a free afternoon for the beach, the rooftop pool or the hotel spa.",
  },
  {
    label: "Day 6",
    title: "Cava country & Sitges",
    text: "A short coach ride to the Penedès for a guided vineyard visit and a wine and cava tasting at a boutique estate. Then on to Sitges, the whitewashed seaside town beloved by artists.",
  },
  {
    label: "Day 7",
    title: "Pickleball & flamenco",
    text: "A morning on court, an afternoon at leisure, and an evening of fiery flamenco with reserved seats: guitars, passionate vocals and the rhythmic stomp of the dancers.",
  },
  {
    label: "Day 8",
    title: "Final match & farewell fiesta",
    text: "Our last session ends with a friendly tournament. In the evening we gather for the “Hasta Luego Fiesta” farewell dinner and party.",
  },
  {
    label: "Day 9",
    title: "Hasta luego",
    text: "Breakfast at the hotel and transfer to Barcelona–El Prat for your flight home. Until next time, amigos.",
  },
];

const included = [
  "8 nights in a beachfront 4★ hotel",
  "6 days of organized outdoor pickleball: instruction, organized play and games with local players",
  "Fresh fruit and cold water at the courts",
  "Transportation to and from the courts",
  "Buffet breakfast every morning",
  "4 carefully selected group meals",
  "Private deluxe motor coach for day trips",
  "Guided tours of the Sagrada Família and Park Güell",
  "Day trip to Montserrat Monastery",
  "Guided visit to Roman Tarragona",
  "Penedès wine & cava tasting and a visit to Sitges",
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
      "A 20% deposit reserves your place and is applied to the total trip price. The remaining balance is due 60 days before the trip start date. Prices are in euros; hover over or tap any price to see it in pounds and US dollars.",
  },
  {
    question: "Why is the trip based in Coma-ruga rather than central Barcelona?",
    answer:
      "You get the best of both: a relaxed beachfront base with space to play, a rooftop pool and spa, plus easy access to Barcelona, an hour away by scenic coastal train or private coach.",
  },
];

export default function LongHaulLobPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLob, {
              description:
                "A 9-day pickleball vacation on the Barcelona coast with 6 days of pickleball and guided day trips to Barcelona, Montserrat, Tarragona, the Penedès and Sitges.",
              touristType: "Pickleball players from the USA and Canada",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Long-Haul Lob: Pickleball Vacation in Spain", path: longHaulLob.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={longHaulLob}
        eyebrow="Long-Haul Lob · pickleball vacation · Spain"
        title={
          <>
            The ultimate pickleball vacation in <em className="font-normal">Spain</em>
          </>
        }
        intro="Nine unforgettable days on the Mediterranean coast near Barcelona. Six days of pickleball with local players, Gaudí's masterpieces, Montserrat, Roman Tarragona, cava country and a night of flamenco, all from a beachfront 4★ base."
        facts={["6 days of pickleball", "4 guided day trips", "Bilingual tour director", "8 nights, beachfront 4★"]}
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
            intro="Our home base is Coma-ruga on the Costa Daurada, Spain's Golden Coast. From there, our private coach takes us to the very best of Catalonia, always returning to the beach in the evening."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Roman amphitheater of Tarragona beside the Mediterranean", name: "Tarragona", text: "Roman ruins by the sea" },
              { img: penedes, alt: "Rolling vineyards in the Penedès wine region", name: "Penedès", text: "Wine & cava tasting" },
              { img: sitges, alt: "The beach and church of Sitges on a sunny day", name: "Sitges", text: "Artists' seaside town" },
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
            intro="Pickleball is scheduled on six days, with guided excursions and plenty of time to relax in between."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} />
          </div>
          <p className="mt-10 text-sm text-stone">
            * The order and timing of activities may be adjusted for the best experience.
          </p>
        </Container>
      </section>

      <PricingSection
        retreat={longHaulLob}
        included={included}
        notIncluded="airfare, tips, personal expenses, and meals other than daily breakfast and the 4 included group meals."
        terms={[
          "Deposit: 20% reserves your place and is applied to the total trip price.",
          "Final payment: the balance is due 60 days before the trip start date.",
          "All prices are in euros (EUR). Hover over or tap a price to see it in GBP and USD.",
        ]}
      />

      <ComaRugaSection />
      <HotelSection />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Good to know" title="Pickleball vacation FAQs" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        title="Ready for the pickleball trip of a lifetime?"
        intro="Request the full itinerary, dates and availability with no obligation. We'll get back to you personally within 24 hours."
        defaultRetreat="Long-Haul Lob"
        defaultPhoneCode="+1"
      />
    </>
  );
}
