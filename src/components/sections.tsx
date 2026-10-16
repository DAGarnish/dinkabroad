import Image from "next/image";
import Link from "next/link";
import bay from "@/assets/images/coma-ruga-bay.jpg";
import seafront from "@/assets/images/coma-ruga-seafront.jpg";
import { type Retreat, formatPrice } from "@/lib/retreats";
import { EnquiryForm } from "./EnquiryForm";
import { Check, Container, Eyebrow, SectionHeading } from "./ui";

export function PageHero({
  retreat,
  eyebrow,
  title,
  intro,
  facts,
}: {
  retreat: Retreat;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  facts: string[];
}) {
  const from = retreat.prices[0];
  return (
    <section className="relative isolate overflow-hidden text-cream">
      <Image
        src={retreat.image}
        alt={retreat.imageAlt}
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
      <Container className="grid gap-12 pt-36 pb-20 sm:pb-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-cream/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span aria-current="page">{retreat.name}</span>
          </nav>
          <p className="mt-8 animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">{eyebrow}</p>
          <h1 className="mt-5 animate-rise font-display text-5xl leading-[1.04] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms]">
            {intro}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2 text-sm">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 backdrop-blur">
                <Check className="text-ball" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-cream/95 p-8 text-ink shadow-2xl backdrop-blur">
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">{retreat.name}</p>
          <p className="mt-2 text-sm text-stone">{retreat.duration}</p>
          <p className="mt-6 text-xs tracking-widest text-stone uppercase">Complete package from</p>
          <p className="font-display text-6xl tracking-tight">{formatPrice(from)}</p>
          <p className="mt-1 text-sm text-stone">{from.note}</p>
          <Link
            href="#enquire"
            className="mt-6 block rounded-full bg-terracotta px-6 py-4 text-center font-semibold text-white transition hover:bg-terracotta-dark"
          >
            Get all the info free
          </Link>
          <Link href="#pricing" className="mt-3 block text-center text-sm font-medium text-sea hover:underline">
            See what&rsquo;s included
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function PricingSection({
  retreat,
  included,
  notIncluded,
  terms,
}: {
  retreat: Retreat;
  included: string[];
  notIncluded: string;
  terms?: string[];
}) {
  return (
    <section id="pricing" className="scroll-mt-10 bg-sand py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading eyebrow="Pricing" title="What does it cost?" />
          <div className="mt-10 space-y-4">
            {retreat.prices.map((price) => (
              <div key={price.label} className="rounded-3xl bg-ink p-8 text-cream shadow-xl">
                <p className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">{price.label}</p>
                <p className="mt-3 font-display text-6xl tracking-tight">{formatPrice(price)}</p>
                <p className="mt-2 text-sm text-cream/70">{price.note}</p>
              </div>
            ))}
          </div>
          {terms && (
            <ul className="mt-8 space-y-2 text-sm text-stone">
              {terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-[2rem] bg-cream p-8 ring-1 ring-line sm:p-12">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">Included</h3>
          <div className="mt-6">
            <Included items={included} />
          </div>
          <p className="mt-10 border-t border-line pt-6 text-sm text-stone">
            <strong className="font-semibold text-ink">Not included:</strong> {notIncluded}
          </p>
          <Link
            href="#enquire"
            className="mt-8 inline-flex rounded-full bg-terracotta px-7 py-4 font-semibold text-white transition hover:bg-terracotta-dark"
          >
            Yes, send me all the info
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function RetreatCard({ retreat }: { retreat: Retreat }) {
  const from = retreat.prices[0];
  return (
    <Link
      href={retreat.href}
      className="group relative flex min-h-[34rem] flex-col justify-end overflow-hidden rounded-[2rem] text-cream shadow-xl"
    >
      <Image
        src={retreat.image}
        alt={retreat.imageAlt}
        placeholder="blur"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/0" />
      <div className="relative p-7 sm:p-10">
        <p className="inline-flex rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur">
          {retreat.audience}
        </p>
        <h3 className="mt-4 font-display text-5xl tracking-tight">{retreat.name}</h3>
        <p className="mt-2 text-sm font-medium text-ball">{retreat.duration}</p>
        <p className="mt-4 max-w-md leading-relaxed text-cream/85">{retreat.summary}</p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {retreat.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <Check className="text-ball" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/20 pt-6">
          <p>
            <span className="block text-xs tracking-widest text-cream/70 uppercase">From</span>
            <span className="font-display text-4xl">{formatPrice(from)}</span>
            <span className="ml-1 text-sm text-cream/70">p.p.</span>
          </p>
          <span className="rounded-full bg-cream px-5 py-3 text-sm font-semibold text-ink transition group-hover:bg-ball">
            Explore the trip →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ComaRugaSection() {
  return (
    <section id="coma-ruga" className="scroll-mt-10 py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <Image
            src={bay}
            alt="The bay at Coma-ruga with calm turquoise water and the town behind the beach"
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
          <div className="absolute -bottom-8 left-6 right-6 rounded-2xl bg-ink p-6 text-cream shadow-2xl sm:left-auto sm:right-[-1.5rem] sm:w-80">
            <p className="text-xs font-semibold tracking-[0.2em] text-ball uppercase">Getting here</p>
            <ol className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span>Barcelona Sants</span>
                <span className="text-cream/60">depart</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Along the Garraf coast</span>
                <span className="text-cream/60">≈ 1 hr, direct</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sant Vicenç de Calders</span>
                <span className="text-cream/60">arrive</span>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="The destination"
            title={
              <>
                Coma-ruga: Barcelona&rsquo;s <em className="font-normal">quieter</em> coast
              </>
            }
            intro="Coma-ruga sits on the Costa Daurada (the Golden Coast), with wide sandy beaches, palm-lined promenades and a relaxed Catalan pace. You get the sun and sea without the city crowds, and Barcelona is still close enough for a day out."
          />
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["1 hour", "Direct, scenic train from central Barcelona, hugging the coastline"],
              ["Beachfront", "Our hotel is steps from the sand on Coma-ruga beach"],
              ["30 km", "To Roman Tarragona, a UNESCO World Heritage city"],
              ["Penedès", "Catalonia's cava country is right on the doorstep"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line pt-4">
                <dt className="font-display text-3xl text-sea">{k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-stone">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

const hotelFeatures = [
  ["Right on the beach", "Step straight from the hotel onto the sand of Coma-ruga beach."],
  ["Rooftop pool", "An adults-only rooftop pool and lounge with views over the Mediterranean."],
  ["Spa & wellness", "Sauna, steam room, hydrotherapy and massages for tired pickleball legs."],
  ["Two restaurants", "A Mediterranean buffet and an à la carte restaurant for dinner."],
  ["Balcony rooms", "Bright, spacious, air-conditioned rooms, many with sea views."],
  ["Fitness centre", "Warm up, cool down or squeeze in an extra session."],
];

export function HotelSection() {
  return (
    <section id="hotel" className="scroll-mt-10 bg-sand py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Your base"
            title={
              <>
                Estival Maramar, a beachfront <em className="font-normal">4★</em> hotel
              </>
            }
            intro="A modern, beautifully kept hotel on the seafront at Coma-ruga, rated “Superb” by more than 900 guests on Booking.com. After a morning on court, the rooftop pool is calling."
          />
          <Image
            src={seafront}
            alt="Hotels and palm trees along the seafront at Coma-ruga beach"
            placeholder="blur"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="aspect-[16/10] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {hotelFeatures.map(([title, text]) => (
            <div key={title} className="bg-cream p-8">
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-stone">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EnquirySection({
  title,
  intro,
  defaultRetreat,
  defaultPhoneCode,
}: {
  title: string;
  intro: string;
  defaultRetreat?: "Local Dink" | "Long-Haul Lob";
  defaultPhoneCode?: string;
}) {
  return (
    <section id="enquire" className="scroll-mt-10 relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[36rem] rounded-full bg-sea/40 blur-3xl"
      />
      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow invert>Limited spots · max 20 players</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/75">{intro}</p>
          <ul className="mt-8 space-y-3 text-cream/90">
            {[
              "Full programme, dates and pricing",
              "Personal reply within 24 hours",
              "No commitment, no spam",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Check className="text-ball" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <EnquiryForm defaultRetreat={defaultRetreat} defaultPhoneCode={defaultPhoneCode} />
      </Container>
    </section>
  );
}

export function Included({ items, note }: { items: string[]; note?: string }) {
  return (
    <div>
      <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-snug">
            <Check className="mt-0.5 text-sea" />
            {item}
          </li>
        ))}
      </ul>
      {note && <p className="mt-6 text-sm text-stone">{note}</p>}
    </div>
  );
}

export function Itinerary({ days }: { days: { label: string; title: string; text: string }[] }) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-10">
      {days.map((day, i) => (
        <li key={day.label} className="relative">
          <span className="absolute -left-[3.6rem] flex size-9 items-center justify-center rounded-full bg-ink font-display text-cream ring-8 ring-cream">
            {i + 1}
          </span>
          <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">{day.label}</p>
          <h3 className="mt-1 font-display text-2xl">{day.title}</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-stone">{day.text}</p>
        </li>
      ))}
    </ol>
  );
}
