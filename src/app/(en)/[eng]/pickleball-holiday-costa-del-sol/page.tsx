import Image from "next/image";
import Link from "next/link";
import terrace from "@/assets/images/mijas-pickleball-courts-terrace.jpg";
import match from "@/assets/images/mijas-pickleball-match.jpg";
import hero from "@/assets/images/mijas-pickleball-players-sierra.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { EnquirySection } from "@/components/sections";
import { Check, Container, SectionHeading } from "@/components/ui";
import { englishLang, spell } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

// English only for now, with no dates or prices yet: a register-your-interest page,
// so Google can find and index it before the trip launches.
const path = "/pickleball-holiday-costa-del-sol";

export const metadata = pageMetadata({
  title: "Pickleball Holiday Costa del Sol, Spain: Mijas near Málaga",
  absoluteTitle: true,
  description:
    "Coming soon: a small-group pickleball holiday on the Costa del Sol near Málaga, with coaching, a tournament and 8 floodlit courts. Register your interest.",
  path,
  image: {
    url: "/og-costa-del-sol.jpg",
    alt: "Pickleball players on blue courts in Mijas on the Costa del Sol, with the mountains under a clear blue sky",
  },
});

const venueFacts = [
  ["8 courts", "Dedicated pickleball courts, all floodlit, plus clay and hard tennis courts"],
  ["Since 1979", "A family-run club in the foothills of Mijas, now a home for pickleball on the coast"],
  ["Mountain views", "A shaded terrace overlooking the courts, away from the coastal wind, with the Sierra de Mijas behind"],
  ["Local players", "A friendly, established pickleball community to play with and against"],
];

const reasons = [
  {
    title: "Sunshine almost all year",
    text: "The Costa del Sol is one of Europe's sunniest coasts, with mild winters that make it perfect for pickleball when it's cold and grey at home.",
  },
  {
    title: "Easy to reach",
    text: "Málaga Airport has direct flights from across the UK and Europe, and the club is around 25 minutes away by car.",
  },
  {
    title: "Beaches & white villages",
    text: "Fuengirola's long sandy beaches are a short drive away, the white village of Mijas Pueblo sits on the hill above, and Málaga is close enough for a day out.",
  },
  {
    title: "The Dink Abroad formula",
    text: "Small groups, coaching by level, a tournament with the locals and afternoons that are yours. The same recipe as our Barcelona retreats.",
  },
];

const planned = [
  "Small group of max 16 players",
  "Morning coaching, grouped by level",
  "A friendly tournament with local players",
  "Open play on 8 floodlit courts",
  "Afternoons free for the beach, Mijas or Málaga",
  "A comfortable hotel close to the courts and the coast",
  "Personal support from the Dink Abroad team",
];

const faqs: FaqItem[] = [
  {
    question: "When does the Costa del Sol pickleball holiday start?",
    answer:
      "We're finalising dates and prices now. Register your interest below and you'll be the first to hear, before they're published.",
  },
  {
    question: "Where exactly will we play?",
    answer:
      "At the Algarrobo Pickleball & Tennis Country Club in Mijas (Málaga), in the foothills of the Sierra de Mijas just inland from Fuengirola. It has 8 floodlit pickleball courts and a terrace overlooking them.",
  },
  {
    question: "Which airport do I fly into?",
    answer:
      "Málaga Airport (AGP), which has direct flights from most UK and European airports. The club is around 25 minutes from the airport by car.",
  },
  {
    question: "What level do I need to be?",
    answer:
      "Every level will be welcome, from beginners to experienced 4.0+ players. As on our Barcelona retreats, coaching and match play will be grouped by level.",
  },
  {
    question: "How is it different from your Barcelona retreats?",
    answer:
      "Our Barcelona retreats are on the Costa Daurada, an hour south of Barcelona, with a beachfront hotel and outings to Sitges, Tarragona and Reus. The Costa del Sol trip is in Andalusia, near Málaga, with a milder winter, so it's a great choice for a pickleball holiday out of season.",
  },
];

export default async function CostaDelSolPage({ params }: { params: Promise<{ eng: string }> }) {
  const lang = englishLang((await params).eng);
  const s = (text: string) => spell(text, lang);
  const localFaqs = faqs.map((f) => ({ question: s(f.question), answer: s(f.answer) }));
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl(`${path}#webpage`),
              url: absoluteUrl(path),
              name: "Pickleball Holiday Costa del Sol | Dink Abroad",
              about: { "@id": absoluteUrl(`${path}#venue`) },
              isPartOf: { "@id": absoluteUrl("/#website") },
            },
            {
              "@type": "SportsActivityLocation",
              "@id": absoluteUrl(`${path}#venue`),
              name: "Algarrobo Pickleball & Tennis Country Club",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Urbanización Haza del Algarrobo",
                postalCode: "29650",
                addressLocality: "Mijas",
                addressRegion: "Málaga",
                addressCountry: "ES",
              },
              amenityFeature: ["8 pickleball courts", "Floodlit courts", "Tennis courts", "Terrace"].map((name) => ({
                "@type": "LocationFeatureSpecification",
                name,
                value: true,
              })),
            },
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Pickleball Holiday Costa del Sol", path },
            ]),
            faqSchema(localFaqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden text-cream">
        <Image
          src={hero}
          alt="Four pickleball players by the net on blue courts in Mijas, with the Sierra de Mijas under a clear blue sky"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/25" />
        <Container className="pt-36 pb-20 sm:pb-28">
          <nav aria-label="Breadcrumb" className="text-sm text-cream/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span aria-current="page">Costa del Sol</span>
          </nav>
          <p className="mt-8 animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">
            Coming soon · Costa del Sol · Mijas, near Málaga
          </p>
          <h1 className="mt-5 max-w-3xl animate-rise font-display text-5xl leading-[1.04] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            A pickleball {s("holiday")} on the <em className="font-normal">Costa del Sol</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms]">
            Our next destination: eight floodlit pickleball courts in the sunny foothills of Mijas, minutes from
            Fuengirola&rsquo;s beaches and Málaga airport. Dates and prices are coming soon. Register your interest and
            you&rsquo;ll be the first to hear.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2 text-sm">
            {["8 floodlit courts", "Max 16 players", "Near Málaga airport", "Sun almost all year"].map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 backdrop-blur">
                <Check className="text-ball" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#enquire"
              className="rounded-full bg-ball px-7 py-4 font-semibold text-ink transition hover:bg-white"
            >
              Register your interest
            </Link>
            <Link
              href="#barcelona"
              className="rounded-full border border-cream/40 px-7 py-4 font-semibold backdrop-blur transition hover:bg-cream/10"
            >
              Or play in Barcelona now
            </Link>
          </div>
        </Container>
      </section>

      {/* The venue */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Image
            src={terrace}
            alt="Pickleball players walking off a blue court at the club in Mijas, with the shaded terrace and mountains behind"
            title="The pickleball courts and terrace in Mijas"
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-xl"
          />
          <div>
            <SectionHeading
              eyebrow="The courts"
              title={
                <>
                  Eight pickleball courts under the <em className="font-normal">Sierra de Mijas</em>
                </>
              }
              intro={s(
                "We'll play at the Algarrobo Pickleball & Tennis Country Club in Mijas, a family-run club that has been part of the coast since 1979 and has embraced pickleball with a thriving local scene.",
              )}
            />
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {venueFacts.map(([k, v]) => (
                <div key={k} className="border-t border-line pt-4">
                  <dt className="font-display text-3xl text-sea">{k}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-stone">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Why the Costa del Sol */}
      <section className="bg-sand py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why the Costa del Sol?"
              title={s("Pickleball near Málaga, in the sun even in winter")}
              intro="Andalusia's coast has the weather, the flights and the pickleball scene. We're adding the small-group coaching, the tournament and the organisation."
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <h3 className="font-display text-xl">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone">{s(r.text)}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={match}
            alt="Players meeting at the net on a sunny morning on the pickleball courts in Mijas"
            placeholder="blur"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </Container>
      </section>

      {/* What we're planning */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow={s("The programme")}
            title="Your Costa del Sol pickleball holiday: what we're planning"
            intro={s(
              "We're shaping the trip now and will share the full programme, dates and prices with everyone on the interest list first.",
            )}
          />
          <div className="rounded-[2rem] bg-white p-8 ring-1 ring-line sm:p-12">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {planned.map((item) => (
                <li key={item} className="flex gap-3 leading-snug">
                  <Check className="mt-0.5 text-sea" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Barcelona, running now */}
      <section id="barcelona" className="scroll-mt-10 bg-ink py-20 text-cream sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <SectionHeading
            invert
            eyebrow="Can't wait?"
            title="Our Barcelona retreats are running now"
            intro="Small-group pickleball on the Costa Daurada, an hour from Barcelona, with a beachfront 4★ hotel."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/pickleball-holiday-barcelona"
              className="group rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/15 transition hover:bg-cream/15"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">Local Dink · 5 days</p>
              <p className="mt-3 font-display text-2xl">Pickleball holiday in Barcelona</p>
              <p className="mt-2 text-sm text-cream/70">For players from the UK and Europe.</p>
              <span className="mt-5 inline-block text-sm font-semibold group-hover:text-ball">Explore the trip →</span>
            </Link>
            <Link
              href="/pickleball-vacation-barcelona"
              className="group rounded-3xl bg-cream/10 p-7 ring-1 ring-cream/15 transition hover:bg-cream/15"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">Long-Haul Lob · 9 days</p>
              <p className="mt-3 font-display text-2xl">Pickleball vacation in Barcelona</p>
              <p className="mt-2 text-sm text-cream/70">For players from the USA and Canada.</p>
              <span className="mt-5 inline-block text-sm font-semibold group-hover:text-ball">Explore the trip →</span>
            </Link>
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Good to know" title={s("Costa del Sol pickleball holiday FAQs")} />
          <Faq items={localFaqs} />
        </Container>
      </section>

      <EnquirySection
        lang={lang}
        title="Be the first to hear about Costa del Sol dates"
        intro={s(
          "Register your interest with no commitment. We'll send you the programme, dates and prices personally as soon as they're ready, before they're published.",
        )}
        defaultRetreat="Costa del Sol"
        showDates={false}
      />
    </>
  );
}
