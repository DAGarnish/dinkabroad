import Image from "next/image";
import Link from "next/link";
import sunset from "@/assets/images/coma-ruga-sunset.jpg";
import courts from "@/assets/images/pickleball-courts.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ComaRugaSection, EnquirySection, HotelSection, RetreatCard } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import type { Currency } from "@/lib/fx";
import { pageMetadata } from "@/lib/metadata";
import { retreats } from "@/lib/retreats";
import { faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const homeMetadata = pageMetadata({
  title: "Pickleball Holiday & Camps in Barcelona, Spain | Dink Abroad",
  description:
    "Pickleball holidays, camps and retreats on the Barcelona coast in Spain. Max 16 players, morning coaching, a tournament and a beachfront 4★ hotel.",
  path: "/",
  absoluteTitle: true,
});

const pillars = [
  {
    title: "Coaching that levels you up",
    text: "Structured 90-minute sessions with certified coaches, tailored to your level, from first dink to tournament-ready.",
  },
  {
    title: "Small groups, big welcome",
    text: "Never more than 16 players, so you get real attention on court. Coming solo? You'll have new playing partners by lunchtime.",
  },
  {
    title: "Play the locals",
    text: "Pickleball is booming in Spain. Friendly tournaments and open play put you across the net from Catalan players.",
  },
  {
    title: "Sun, sea & Spain",
    text: "Mornings on court, afternoons by the Mediterranean. Barcelona, Sitges and Tarragona are all within easy reach.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Where are Dink Abroad pickleball retreats held?",
    answer:
      "All retreats are based in Coma-ruga on the Costa Daurada, Catalonia. It's one hour from central Barcelona by direct, scenic coastal train, and we stay at the beachfront 4-star Estival Maramar hotel.",
  },
  {
    question: "Which retreat is right for me?",
    answer:
      "Local Dink is a 5-day pickleball holiday (Friday to Tuesday) built for players flying in from the UK and Europe. Long-Haul Lob is a 9-day pickleball vacation for travellers from the USA and Canada, with the same Friday-to-Tuesday pickleball by the sea, then four nights in Barcelona with guided visits to Gaudí's sights, Montserrat and the Penedès, plus optional tours to Tarragona, Sitges and Reus.",
  },
  {
    question: "What level do I need to be?",
    answer:
      "Every level is welcome, from beginners to experienced 4.0+ players. Coaching sessions and play are grouped by level so everyone is challenged and has fun.",
  },
  {
    question: "Can I come on my own?",
    answer:
      "Absolutely. Many guests travel solo. With a maximum of 16 players, the group gels quickly on and off the court.",
  },
  {
    question: "Are flights included?",
    answer:
      "No. Flights are not included so you can travel from wherever suits you best. Airport transfers are included on the Long-Haul Lob. For the Local Dink, Coma-ruga is an easy train ride along the coast from Barcelona.",
  },
];

// The English homepage. Served by `page.tsx` in euros, and in pounds or dollars to UK and US visitors (see proxy.ts).
export function Home({ currency }: { currency: Currency }) {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/#webpage"),
              url: absoluteUrl("/"),
              name: "Pickleball Retreats Barcelona | Dink Abroad",
              about: { "@id": absoluteUrl("/#organization") },
              isPartOf: { "@id": absoluteUrl("/#website") },
            },
            {
              "@type": "ItemList",
              name: "Dink Abroad pickleball retreats",
              itemListElement: retreats.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(r.href),
                name: r.name,
              })),
            },
            ...retreats.map((r) =>
              tripSchema(r, { description: r.summary, touristType: r.audience }),
            ),
            hotelSchema,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-cream">
        <Image
          src={sunset}
          alt="Golden sunset over palm trees on the beach at Coma-ruga, Costa Daurada"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <Container className="w-full pt-36 pb-16 sm:pb-24">
          <p className="animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">
            Pickleball retreats · Barcelona coast
          </p>
          <h1 className="mt-6 max-w-4xl animate-rise font-display text-5xl leading-[1.02] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-7xl lg:text-[5.5rem]">
            Pickleball retreats on the <em className="font-normal">Barcelona</em> coast
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms] sm:text-xl">
            Small-group pickleball holidays in sunny Coma-ruga, a scenic hour by train from Barcelona.
            Expert coaching, friendly tournaments and a beachfront hotel. All you do is play.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="#retreats"
              className="rounded-full bg-ball px-7 py-4 font-semibold text-ink transition hover:bg-white"
            >
              Explore the retreats
            </Link>
            <Link
              href="#enquire"
              className="rounded-full border border-cream/40 px-7 py-4 font-semibold backdrop-blur transition hover:bg-cream/10"
            >
              Get all the info free
            </Link>
          </div>
          <ul className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-sm sm:grid-cols-4">
            {[
              ["Max 16", "players per retreat"],
              ["4★", "beachfront hotel"],
              ["1 hr", "by train from Barcelona"],
              ["Certified", "coaches"],
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
              eyebrow="Why Dink Abroad"
              title={
                <>
                  The pickleball trip you&rsquo;ll <em className="font-normal">still</em> be talking about next season
                </>
              }
              intro="We've taken everything players love about a great club weekend (good coaching, competitive games, new friends) and moved it to the Mediterranean. We handle the courts, coaches, hotel and transfers. You just bring your paddle."
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
              alt="Outdoor pickleball courts with blue playing surfaces and nets under a sunny sky"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -left-4 top-10 rotate-[-4deg] rounded-2xl bg-ball px-5 py-4 text-ink shadow-xl sm:-left-10">
              <p className="font-display text-3xl leading-none">Costa Daurada</p>
              <p className="mt-1 text-xs font-semibold tracking-wide uppercase">Spain&rsquo;s Golden Coast</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Retreats */}
      <section id="retreats" className="scroll-mt-10 bg-sand py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Choose your retreat"
            title="Two ways to play pickleball in Barcelona"
            intro="Whether you're hopping over from London for a long weekend or crossing the Atlantic for the trip of a lifetime, there's a Dink Abroad retreat for you."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {retreats.map((r) => (
              <RetreatCard key={r.slug} retreat={r} lang="en-GB" currency={currency} />
            ))}
          </div>
        </Container>
      </section>

      <ComaRugaSection lang="en-GB" />
      <HotelSection lang="en-GB" />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="en-GB"
        title="Ready to play pickleball by the sea?"
        intro="Tell us a little about you and we'll send the full programme, dates, pricing and availability, personally, within 24 hours."
      />
    </>
  );
}
