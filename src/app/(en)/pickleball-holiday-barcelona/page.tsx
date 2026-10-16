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
import { localDink } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Pickleball Holiday Barcelona: 5-Day Pickleball Retreat from £890",
  description:
    "A 5-day pickleball holiday on the Barcelona coast for UK & European players. Coaching, a fun tournament, a beachfront 4★ hotel, lunches and transfers. From £890 p.p.",
  path: localDink.href,
});

const reasons = [
  {
    title: "Coaching with certified pros",
    text: "Three 90-minute sessions with certified coaches, grouped by level so every player is stretched and supported.",
  },
  {
    title: "One fun tournament",
    text: "A friendly but competitive tournament against your fellow travellers and local Catalan players. Bragging rights guaranteed.",
  },
  {
    title: "Beachfront 4★ hotel",
    text: "Four nights at the Estival Maramar, right on Coma-ruga beach, with a rooftop pool and spa.",
  },
  {
    title: "Breakfast, lunch & transfers",
    text: "Daily breakfast, four generous Spanish lunches and return airport transfers are all taken care of.",
  },
  {
    title: "Small group, max 20",
    text: "Personal attention from the coaches and plenty of new playing partners. Perfect if you're coming solo.",
  },
  {
    title: "Free time to explore",
    text: "Afternoons are yours: the beach, the spa, or a hop up the coast to Sitges or Barcelona.",
  },
];

const days = [
  {
    label: "Day 1 · Friday",
    title: "Arrival & first session",
    text: "We collect you from Barcelona airport and bring you to the hotel on the beach. After lunch together, it's straight onto court for your first 90-minute coaching session.",
  },
  {
    label: "Day 2 · Saturday",
    title: "Coaching & free play",
    text: "A second 90-minute coaching session, followed by open play. In the afternoon, choose between an optional excursion, more time on court or simply relaxing by the rooftop pool.",
  },
  {
    label: "Day 3 · Sunday",
    title: "Put it into practice",
    text: "Morning coaching session number three, then plenty of match play against different opponents to lock in what you've learned.",
  },
  {
    label: "Day 4 · Monday",
    title: "Tournament day",
    text: "Test your skills in a fun, competitive tournament with your fellow travellers and local players. The perfect way to finish your time on court together.",
  },
  {
    label: "Day 5 · Tuesday",
    title: "Hasta pronto",
    text: "A final breakfast by the sea, goodbyes to new friends and your transfer back to the airport.",
  },
];

const included = [
  "4 nights at the beachfront 4★ Estival Maramar (twin or single room)",
  "Daily breakfast and 4 generous Spanish lunches",
  "3 × 90-minute coaching sessions with certified coaches",
  "1 fun tournament with fellow travellers and locals",
  "Free play on the courts",
  "Return airport transfers from Barcelona",
  "Small group of max 20 players",
  "Personal support from the Dink Abroad team",
];

const faqs: FaqItem[] = [
  {
    question: "What level is this pickleball holiday for?",
    answer:
      "Every level, from players who have only just picked up a paddle to experienced 4.0+ players. Coaching and match play are grouped by level so everyone gets the right challenge.",
  },
  {
    question: "Can I come alone?",
    answer:
      "Yes, and lots of people do. The group is capped at 20 players, so you'll quickly make friends on and off the court. Prefer your own room? Single rooms are £1,390 per person.",
  },
  {
    question: "Are flights included?",
    answer:
      "Flights aren't included, so you can fly from whichever UK or European airport suits you. Fly into Barcelona El Prat on Friday and out on Tuesday; return airport transfers are included.",
  },
  {
    question: "What is and isn't included?",
    answer:
      "Included: 4 nights' accommodation in a twin or single room, daily breakfast, 4 lunches, 3 coaching sessions, a tournament, free play and airport transfers. Not included: flights, dinners, drinks, travel insurance and optional excursions.",
  },
  {
    question: "How and when do I pay?",
    answer:
      "Once you've requested the info and decided to join, a deposit secures your place and the balance is due before departure. We'll send the full booking terms with your info pack.",
  },
  {
    question: "Do I need to bring my own paddle?",
    answer:
      "Bring your own paddle if you have one you love. If you don't, just let us know when you enquire and we'll help you sort one out.",
  },
];

export default function LocalDinkPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(localDink, {
              description:
                "A 5-day pickleball holiday on the Barcelona coast with coaching, a tournament, a beachfront 4-star hotel, lunches and airport transfers.",
              touristType: "Pickleball players from the UK and Europe",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Local Dink: Pickleball Holiday Barcelona", path: localDink.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={localDink}
        lang="en-GB"
        eyebrow="Local Dink · pickleball holiday · Barcelona coast"
        title={
          <>
            5 days of pickleball, sun &amp; <em className="font-normal">sea</em> near Barcelona
          </>
        }
        intro="The ultimate pickleball long weekend for players from the UK and Europe. Friday to Tuesday on the Costa Daurada: certified coaches, a tournament with the locals and a beachfront 4★ hotel. All you do is play."
        facts={["Max 20 participants", "Beachfront 4★ hotel", "Certified coaches", "Transfers included"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Why this pickleball retreat?"
            title="Everything sorted. You just play."
            intro="A pickleball trip to Barcelona's coast that feels like a club weekend away, only sunnier. Here's what makes Local Dink special."
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
              eyebrow="The programme"
              title="Friday to Tuesday, perfectly balanced"
              intro="Five days split between coaching, match play, a tournament and real downtime by the Mediterranean."
            />
            <div className="mt-12 pl-4">
              <Itinerary days={days} />
            </div>
          </div>
          <div className="space-y-6 lg:pt-20">
            <Image
              src={courts}
              alt="Outdoor pickleball courts with nets ready for play"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <Image
              src={sitges}
              alt="The beach and old town of Sitges, a short trip along the coast"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <p className="text-sm text-stone">Optional afternoon trip: Sitges is just along the coast.</p>
          </div>
        </Container>
      </section>

      <PricingSection
        retreat={localDink}
        lang="en-GB"
        included={included}
        notIncluded="flights, dinners, drinks, travel insurance and optional excursions."
        terms={[
          "All prices are in pounds sterling (GBP). Euro and dollar amounts are approximate, at the latest exchange rate.",
          "Limited to 20 players per retreat.",
        ]}
      />

      <ComaRugaSection lang="en-GB" />
      <HotelSection lang="en-GB" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Good to know" title="Pickleball holiday FAQs" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="en-GB"
        title="Ready for your pickleball holiday in Barcelona?"
        intro="Request all the info with no strings attached: programme, dates, pricing and availability. We'll get back to you personally within 24 hours."
        defaultRetreat="Local Dink"
        defaultPhoneCode="+44"
      />
    </>
  );
}
