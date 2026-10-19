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
import { ExternalLink, TownLink } from "@/components/TownLink";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { localDinkFr } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { hotel } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Stage de pickleball à Barcelone : 5 jours dès 999 €",
  absoluteTitle: true,
  description:
    "Stage de pickleball de 5 jours près de Barcelone : coaching le matin, tournoi, hôtel 4★ en bord de mer et excursions à Sitges et Tarragone. Dès 999 €.",
  path: localDinkFr.href,
  siteLang: "fr",
});

const reasons = [
  {
    title: "Des coachs diplômés",
    text: "Deux séances de 90 minutes avec des coachs diplômés, par niveau, pour que chacun progresse. Les séances se déroulent en anglais et en espagnol.",
  },
  {
    title: "Un tournoi amical",
    text: "Un tournoi convivial mais disputé, face à vos compagnons de voyage et à des joueurs catalans. Les souvenirs (et la fierté) sont garantis.",
  },
  {
    title: "Hôtel 4★ en bord de mer",
    text: (
      <>
        Quatre nuits à l’<ExternalLink href={hotel.url}>Estival Maramar</ExternalLink>
        , dans le haut de gamme des 4 étoiles, directement sur la plage de Coma-ruga, avec petit-déjeuner tous les jours, piscine à débordement et spa.
      </>
    ),
  },
  {
    title: "Le matin sur le terrain",
    text: "Le coaching et le tournoi ont toujours lieu le matin : vos après-midi sont libres pour explorer la côte ou vous détendre sur la plage ou au bord de la piscine à débordement.",
  },
  {
    title: "Petit groupe, 16 max.",
    text: "Une vraie attention de la part des coachs et plein de nouveaux partenaires de jeu. Idéal si vous venez seul.",
  },
  {
    title: "Escapades l’après-midi",
    text: (
      <>
        <TownLink town="sitges" lang="fr">Sitges</TownLink>,{" "}
        <TownLink town="tarragona" lang="fr">Tarragone</TownLink> et{" "}
        <TownLink town="reus" lang="fr">Reus</TownLink> sont à quelques minutes de train, faciles à découvrir par vous-même.
      </>
    ),
  },
];

const days = [
  {
    label: "Jour 1 · Vendredi",
    title: "Arrivée et échauffement",
    text: "Rejoignez Coma-ruga, à une heure de Barcelone en train le long de la côte. Installation, baignade dans la piscine à débordement et rencontre avec le groupe, avec du jeu libre sur les terrains l’après-midi pour vous échauffer.",
  },
  {
    label: "Jour 2 · Samedi",
    title: "Coaching et jeu libre",
    text: "Votre première séance de coaching de 90 minutes, puis jeu libre. L’après-midi est à vous : la plage ou un court trajet en train jusqu’à Sitges.",
  },
  {
    label: "Jour 3 · Dimanche",
    title: "Place à la pratique",
    text: "Deuxième séance de coaching, puis de nombreux matchs contre différents adversaires pour ancrer ce que vous avez appris. L’après-midi, Tarragone la romaine est à un court trajet en train.",
  },
  {
    label: "Jour 4 · Lundi",
    title: "Jour de tournoi",
    text: "Mettez vos progrès à l’épreuve lors d’un tournoi amical et disputé avec vos compagnons de voyage et des joueurs locaux. Passez le dernier après-midi à Reus ou à la plage.",
  },
  {
    label: "Jour 5 · Mardi",
    title: "Jeu libre et hasta pronto",
    text: "Un dernier petit-déjeuner face à la mer et du jeu libre en option avant le retour à la maison. Au revoir à vos nouveaux amis, et à bientôt sur le terrain.",
  },
];

const included = [
  "4 nuits à l’Estival Maramar 4★, en bord de mer (chambre twin ou individuelle)",
  "Petit-déjeuner tous les jours",
  "2 séances de coaching de 90 minutes avec des coachs diplômés (en anglais et en espagnol)",
  "1 tournoi amical avec les autres voyageurs et des joueurs locaux",
  "Jeu libre sur les terrains",
  "Petit groupe de 16 joueurs maximum",
  "Accompagnement personnalisé de l’équipe Dink Abroad",
];

const faqs: FaqItem[] = [
  {
    question: "Les coachs parlent-ils français ?",
    answer:
      "Non. Nos coachs et notre équipe sur place parlent anglais et espagnol, et les séances se déroulent dans ces deux langues. Le pickleball s’apprend beaucoup par la démonstration et la pratique, donc quelques bases d’anglais ou d’espagnol suffisent généralement pour suivre. Si la langue vous préoccupe, dites-le-nous dans votre demande.",
  },
  {
    question: "Pour quel niveau sont ces vacances pickleball ?",
    answer:
      "Tous les niveaux, de celles et ceux qui viennent de prendre une raquette aux joueurs confirmés 4.0+. Le coaching et les matchs sont organisés par niveau pour que chacun ait le bon défi.",
  },
  {
    question: "Puis-je venir seul ?",
    answer:
      "Oui, et beaucoup le font. Le groupe est limité à 16 joueurs, vous vous ferez vite des amis sur le terrain comme en dehors. Vous préférez votre propre chambre ? La chambre individuelle est à 1 399 € par personne.",
  },
  {
    question: "Les vols sont-ils inclus ?",
    answer:
      "Les vols ne sont pas inclus, vous pouvez donc partir de l’aéroport qui vous convient en France ou en Europe. Arrivez à Barcelone le vendredi et repartez le mardi. Les transferts aéroport ne sont pas inclus, mais Coma-ruga se rejoint facilement en train le long de la côte, et nous vous aidons à préparer le trajet.",
  },
  {
    question: "Qu’est-ce qui est inclus ou non ?",
    answer:
      "Inclus : 4 nuits en chambre twin ou individuelle, petit-déjeuner tous les jours, 2 séances de coaching, un tournoi et le jeu libre. Non inclus : vols, transferts aéroport, déjeuners, dîners, boissons et assurance voyage.",
  },
  {
    question: "Comment et quand payer ?",
    answer:
      "Une fois les infos reçues et votre décision prise, un acompte vous réserve votre place et le solde est à régler avant le départ. Nous vous envoyons les conditions de réservation complètes avec votre dossier d’information.",
  },
  {
    question: "Dois-je apporter ma propre raquette ?",
    answer:
      "Apportez votre raquette si vous en avez une que vous adorez. Sinon, signalez-le-nous dans votre demande et nous vous aiderons à en trouver une.",
  },
];

export default function VacancesPickleballPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(localDinkFr, {
              description:
                "Des vacances de pickleball de 5 jours sur la côte de Barcelone avec coaching en anglais et en espagnol, un tournoi et un hôtel 4 étoiles en bord de mer avec petit-déjeuner.",
              touristType: "Joueurs de pickleball de France et d’Europe",
              itinerary: days.map((d) => ({ name: `${d.label} : ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Accueil", path: "/fr" },
              { name: "Local Dink : vacances pickleball à Barcelone", path: localDinkFr.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={localDinkFr}
        lang="fr"
        eyebrow="Local Dink · vacances pickleball · Barcelone"
        title={
          <>
            5 jours de pickleball, de soleil et de <em className="font-normal">mer</em> près de Barcelone
          </>
        }
        intro="Le long week-end pickleball idéal pour les joueurs de France et d’Europe. Du vendredi au mardi sur la Costa Daurada : des coachs diplômés, un tournoi face aux locaux et un hôtel 4★ en bord de mer. Vous n’avez plus qu’à jouer."
        facts={["16 participants max.", "Hôtel 4★ en bord de mer", "Coaching en anglais et espagnol", "Le matin sur le terrain"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Pourquoi ce séjour pickleball ?"
            title="Tout est prévu. Vous n’avez qu’à jouer."
            intro="Un séjour pickleball sur la côte de Barcelone qui ressemble à un week-end de club, en plus ensoleillé. Voici ce qui rend Local Dink unique."
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
              eyebrow="Le programme"
              title="Du vendredi au mardi, parfaitement équilibré"
              intro="Le matin, coaching, matchs et tournoi. L’après-midi, vraie détente au bord de la Méditerranée."
            />
            <div className="mt-12 pl-4">
              <Itinerary days={days} />
            </div>
          </div>
          <div className="space-y-6 lg:pt-20">
            <Image
              src={courts}
              alt="Terrains de pickleball extérieurs avec les filets prêts pour le jeu"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <Image
              src={sitges}
              alt="La plage et la vieille ville de Sitges, à quelques kilomètres le long de la côte"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <p className="text-sm text-stone">
              Idées pour l’après-midi : <TownLink town="sitges" lang="fr">Sitges</TownLink>,{" "}
              <TownLink town="tarragona" lang="fr">Tarragone</TownLink> et{" "}
              <TownLink town="reus" lang="fr">Reus</TownLink> sont à un court trajet en train, faciles à visiter par vous-même.
            </p>
          </div>
        </Container>
      </section>

      <PricingSection
        retreat={localDinkFr}
        lang="fr"
        included={included}
        notIncluded="vols, transferts aéroport, déjeuners, dîners, boissons et assurance voyage."
        terms={[
          "Tous les prix sont en euros (EUR). Les montants en livres et en dollars sont indicatifs, au dernier taux de change.",
          "Coaching en anglais et en espagnol.",
          "16 joueurs maximum par séjour.",
        ]}
      />

      <ComaRugaSection lang="fr" />
      <HotelSection lang="fr" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Bon à savoir" title="Questions fréquentes sur les vacances pickleball" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="fr"
        title="Prêt pour vos vacances pickleball à Barcelone ?"
        intro="Demandez toutes les infos sans engagement : programme, dates, tarifs et disponibilités. Nous vous répondrons personnellement sous 24 heures."
        defaultRetreat="Local Dink"
        defaultPhoneCode="+33"
      />
    </>
  );
}
