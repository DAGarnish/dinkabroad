import Image from "next/image";
import Link from "next/link";
import sunset from "@/assets/images/coma-ruga-sunset.jpg";
import courts from "@/assets/images/pickleball-courts.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ComaRugaSection, EnquirySection, HotelSection, RetreatCard } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { retreatsFr } from "@/lib/retreats";
import { faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Séjours pickleball à Barcelone | Vacances pickleball | Dink Abroad",
  description:
    "Séjours et vacances de pickleball sur la côte de Barcelone. Coaching, tournois et hôtel 4★ en bord de mer à Coma-ruga, à une heure de Barcelone en train. 20 joueurs max.",
  path: "/fr",
  absoluteTitle: true,
  siteLang: "fr",
});

const pillars = [
  {
    title: "Un coaching qui fait progresser",
    text: "Des séances de 90 minutes avec des coachs diplômés, adaptées à votre niveau, du premier dink jusqu’à la compétition. Les séances se déroulent en anglais et en espagnol.",
  },
  {
    title: "Petit groupe, grand accueil",
    text: "Jamais plus de 20 joueurs, pour une vraie attention sur le terrain. Vous venez seul ? Vous aurez des partenaires de jeu avant le déjeuner.",
  },
  {
    title: "Affrontez les locaux",
    text: "Le pickleball explose en Espagne. Tournois amicaux et jeu libre vous placent de l’autre côté du filet face à des joueurs catalans.",
  },
  {
    title: "Soleil, mer et Méditerranée",
    text: "Le matin sur le terrain, l’après-midi au bord de la mer. Barcelone, Sitges et Tarragone sont à deux pas.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Où se déroulent les séjours de pickleball Dink Abroad ?",
    answer:
      "Tous nos séjours ont lieu à Coma-ruga, sur la Costa Daurada, en Catalogne. C’est à une heure du centre de Barcelone en train direct le long de la côte, et nous logeons à l’Estival Maramar, un 4 étoiles en bord de mer.",
  },
  {
    question: "Les coachs parlent-ils français ?",
    answer:
      "Non. Nos coachs et notre équipe sur place parlent anglais et espagnol, et les séances se déroulent dans ces deux langues. Le pickleball s’apprend beaucoup par la démonstration et la pratique, donc quelques bases d’anglais ou d’espagnol suffisent généralement pour suivre. Si la langue vous préoccupe, dites-le-nous dans votre demande.",
  },
  {
    question: "Quel séjour est fait pour moi ?",
    answer:
      "Local Dink, ce sont 5 jours de vacances pickleball (du vendredi au mardi), pensés pour les joueurs de France et d’Europe. Long-Haul Lob est un voyage de 9 jours pour ceux qui viennent d’Amérique du Nord, avec six jours de pickleball et des excursions guidées à Barcelone, Montserrat, Tarragone, dans le Penedès et à Sitges.",
  },
  {
    question: "Quel niveau faut-il avoir ?",
    answer:
      "Tous les niveaux sont les bienvenus, du débutant au joueur confirmé 4.0+. Les séances et les matchs sont organisés par niveau pour que chacun progresse et s’amuse.",
  },
  {
    question: "Puis-je venir seul ?",
    answer:
      "Bien sûr. Beaucoup de participants viennent seuls. Avec 20 joueurs maximum, le groupe se soude vite, sur le terrain comme en dehors.",
  },
  {
    question: "Les vols sont-ils inclus ?",
    answer:
      "Non. Les vols ne sont pas inclus, pour que vous puissiez partir d’où vous voulez. Les transferts aéroport sont inclus dans le Long-Haul Lob. Pour le Local Dink, Coma-ruga se rejoint facilement en train le long de la côte depuis Barcelone.",
  },
];

export default function AccueilPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/fr#webpage"),
              url: absoluteUrl("/fr"),
              name: "Séjours pickleball à Barcelone | Dink Abroad",
              inLanguage: "fr-FR",
              about: { "@id": absoluteUrl("/#organization") },
              isPartOf: { "@id": absoluteUrl("/#website") },
            },
            {
              "@type": "ItemList",
              name: "Séjours de pickleball Dink Abroad",
              itemListElement: retreatsFr.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(r.href),
                name: r.name,
              })),
            },
            ...retreatsFr.map((r) => tripSchema(r, { description: r.summary, touristType: r.audience })),
            hotelSchema,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-cream">
        <Image
          src={sunset}
          alt="Coucher de soleil doré sur les palmiers de la plage de Coma-ruga, sur la Costa Daurada"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <Container className="w-full pt-36 pb-16 sm:pb-24">
          <p className="animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">
            Séjours pickleball · Côte de Barcelone
          </p>
          <h1 className="mt-6 max-w-4xl animate-rise font-display text-5xl leading-[1.02] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-7xl lg:text-[5.5rem]">
            Séjours de pickleball sur la côte de <em className="font-normal">Barcelone</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms] sm:text-xl">
            Des vacances de pickleball en petit groupe dans la lumineuse Coma-ruga, à une heure de Barcelone par un
            train qui longe la mer. Coaching de qualité, tournois amicaux et hôtel en bord de mer. Vous n’avez plus
            qu’à jouer.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="#retreats"
              className="rounded-full bg-ball px-7 py-4 font-semibold text-ink transition hover:bg-white"
            >
              Découvrir les séjours
            </Link>
            <Link
              href="#enquire"
              className="rounded-full border border-cream/40 px-7 py-4 font-semibold backdrop-blur transition hover:bg-cream/10"
            >
              Recevez toutes les infos gratuitement
            </Link>
          </div>
          <ul className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-sm sm:grid-cols-4">
            {[
              ["20 max.", "joueurs par séjour"],
              ["4★", "hôtel en bord de mer"],
              ["1 h", "en train depuis Barcelone"],
              ["EN · ES", "coaching en anglais et espagnol"],
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
              eyebrow="Pourquoi Dink Abroad"
              title={
                <>
                  Le séjour pickleball dont vous parlerez <em className="font-normal">encore</em> la saison
                  prochaine
                </>
              }
              intro="Nous avons réuni tout ce que les joueurs aiment dans un bon week-end de club (un vrai coaching, des matchs disputés, de nouveaux amis) et l’avons transporté au bord de la Méditerranée. Nous gérons les terrains, les coachs, l’hôtel et les transferts. Vous n’avez qu’à apporter votre raquette."
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
              alt="Terrains de pickleball extérieurs aux surfaces bleues sous un ciel ensoleillé"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -left-4 top-10 rotate-[-4deg] rounded-2xl bg-ball px-5 py-4 text-ink shadow-xl sm:-left-10">
              <p className="font-display text-3xl leading-none">Costa Daurada</p>
              <p className="mt-1 text-xs font-semibold tracking-wide uppercase">La Côte dorée de Catalogne</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Retreats */}
      <section id="retreats" className="scroll-mt-10 bg-sand py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Choisissez votre séjour"
            title="Deux façons de jouer au pickleball à Barcelone"
            intro="Que vous cherchiez un long week-end au soleil ou le voyage d’une vie de l’autre côté de l’Atlantique, il y a un séjour Dink Abroad pour vous."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {retreatsFr.map((r) => (
              <RetreatCard key={r.slug} retreat={r} lang="fr" />
            ))}
          </div>
        </Container>
      </section>

      <ComaRugaSection lang="fr" />
      <HotelSection lang="fr" />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Bon à savoir" title="Questions fréquentes" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="fr"
        title="Prêt à jouer au pickleball au bord de la mer ?"
        intro="Parlez-nous un peu de vous et nous vous enverrons personnellement le programme complet, les dates, les tarifs et les disponibilités sous 24 heures."
        defaultPhoneCode="+33"
      />
    </>
  );
}
