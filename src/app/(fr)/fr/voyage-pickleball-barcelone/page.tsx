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
import { longHaulLobFr } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Voyage pickleball à Barcelone : 9 jours de pickleball et de culture",
  description:
    "Un voyage pickleball de 9 jours à Barcelone : 6 jours de jeu, la Barcelone de Gaudí, Montserrat, Tarragone, le pays du cava et le flamenco depuis un hôtel 4★ en bord de mer. À partir de 3 500 €.",
  path: longHaulLobFr.href,
  siteLang: "fr",
});

const days = [
  {
    label: "Jour 1",
    title: "¡Bienvenidos!",
    text: "Transfert privé de l’aéroport de Barcelone-El Prat à notre hôtel en bord de mer à Coma-ruga. Installation, un après-midi de pickleball pour se dégourdir les jambes, puis réception de bienvenue avec le groupe.",
  },
  {
    label: "Jour 2",
    title: "Pickleball et Tarragone la romaine",
    text: "Une matinée de coaching et de jeu, puis un après-midi guidé à Tarragone, ville classée au patrimoine mondial dont l’amphithéâtre romain fait face à la Méditerranée.",
  },
  {
    label: "Jour 3",
    title: "La Barcelone de Gaudí",
    text: "Une journée complète à Barcelone en autocar privé. Visites guidées de l’impressionnante Sagrada Família et du coloré Park Güell, puis balade dans le quartier gothique, sur les Ramblas et au célèbre marché de la Boqueria.",
  },
  {
    label: "Jour 4",
    title: "Pickleball et Montserrat",
    text: "Pickleball le matin, puis direction les montagnes déchiquetées de Montserrat pour visiter le monastère bénédictin, qui abrite la Vierge noire, avec des vues à couper le souffle sur la Catalogne.",
  },
  {
    label: "Jour 5",
    title: "Jouez avec les locaux",
    text: "Le pickleball explose en Espagne. La séance du jour vous met sur le terrain avec des joueurs locaux, suivie d’un après-midi libre pour la plage, la piscine sur le toit ou le spa de l’hôtel.",
  },
  {
    label: "Jour 6",
    title: "Le pays du cava et Sitges",
    text: "Un court trajet en autocar jusqu’au Penedès pour une visite des vignes et une dégustation de vins et de cava dans un domaine de charme. Puis Sitges, la ville blanche en bord de mer chère aux artistes.",
  },
  {
    label: "Jour 7",
    title: "Pickleball et flamenco",
    text: "Une matinée sur le terrain, un après-midi libre et une soirée de flamenco avec places réservées : guitares, chant passionné et martèlement des danseurs.",
  },
  {
    label: "Jour 8",
    title: "Dernier match et fête d’adieu",
    text: "La dernière séance se termine par un tournoi amical. Le soir, nous nous retrouvons pour le dîner et la fête d’adieu « Hasta luego ».",
  },
  {
    label: "Jour 9",
    title: "Hasta luego",
    text: "Petit-déjeuner à l’hôtel et transfert vers Barcelone-El Prat pour votre vol retour. À la prochaine, les amis !",
  },
];

const included = [
  "8 nuits dans un hôtel 4★ en bord de mer",
  "6 jours de pickleball en plein air : coaching, jeu organisé et matchs avec des joueurs locaux (en anglais et en espagnol)",
  "Fruits frais et eau fraîche sur les terrains",
  "Transport aller-retour vers les terrains",
  "Petit-déjeuner buffet tous les matins",
  "4 repas de groupe soigneusement choisis",
  "Autocar privé de luxe pour les excursions",
  "Visites guidées de la Sagrada Família et du Park Güell",
  "Excursion au monastère de Montserrat",
  "Visite guidée de Tarragone la romaine",
  "Dégustation de vins et de cava dans le Penedès et visite de Sitges",
  "Guides locaux professionnels (en anglais ou en espagnol)",
  "Accompagnateur bilingue anglais-espagnol pendant tout le séjour",
  "Spectacle de flamenco",
  "Réception de bienvenue",
  "Dîner et fête d’adieu « Hasta luego »",
  "Transferts aller-retour depuis l’aéroport de Barcelone-El Prat",
];

const faqs: FaqItem[] = [
  {
    question: "Le séjour se déroule-t-il en français ?",
    answer:
      "Non. Nos coachs, notre accompagnateur et les guides locaux parlent anglais et espagnol, et le séjour se déroule dans ces deux langues. Sur le terrain, le pickleball s’apprend beaucoup par la démonstration, donc un anglais de base suffit généralement pour profiter pleinement du voyage. Si la langue vous préoccupe, dites-le-nous dans votre demande.",
  },
  {
    question: "Dans quel aéroport dois-je atterrir ?",
    answer:
      "Barcelone-El Prat (BCN), bien desservi depuis l’Amérique du Nord, en direct ou avec une escale. Notre transfert privé vous accueille le jour 1 et vous raccompagne le jour 9.",
  },
  {
    question: "Ai-je besoin d’un visa pour l’Espagne ?",
    answer:
      "Les citoyens canadiens et américains n’ont pas besoin de visa pour un court séjour touristique en Espagne. Votre passeport doit être valide au moins trois mois après la date de départ. Vérifiez toujours les conditions d’entrée à jour avant de partir.",
  },
  {
    question: "À quel niveau s’adresse ce voyage pickleball ?",
    answer:
      "À tous les niveaux, du joueur loisir au compétiteur 4.0+. Le coaching et le jeu organisé se font par niveau pour que chacun ait de bons matchs.",
  },
  {
    question: "Je voyage seul. Est-ce un problème ?",
    answer:
      "Pas du tout. Beaucoup de nos voyageurs viennent seuls. Choisissez la chambre individuelle pour avoir votre propre espace, et dès le premier soir vous aurez de nouveaux amis.",
  },
  {
    question: "Comment fonctionnent le paiement et l’acompte ?",
    answer:
      "Un acompte de 20 % vous réserve votre place et est déduit du prix total du voyage. Le solde est à régler 60 jours avant la date de départ. Tous les prix sont en euros.",
  },
];

export default function VoyagePickleballPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLobFr, {
              description:
                "Un voyage pickleball de 9 jours sur la côte de Barcelone avec 6 jours de jeu et des excursions guidées à Barcelone, Montserrat, Tarragone, dans le Penedès et à Sitges. Séjour en anglais et en espagnol.",
              touristType: "Joueurs de pickleball venant du Canada et d’Amérique du Nord",
              itinerary: days.map((d) => ({ name: `${d.label} : ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Accueil", path: "/fr" },
              { name: "Long-Haul Lob : voyage pickleball à Barcelone", path: longHaulLobFr.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={longHaulLobFr}
        lang="fr"
        eyebrow="Long-Haul Lob · voyage pickleball · Barcelone"
        title={
          <>
            Le voyage pickleball ultime à <em className="font-normal">Barcelone</em>
          </>
        }
        intro="Neuf jours inoubliables sur la côte méditerranéenne, près de Barcelone. Six jours de pickleball avec des joueurs locaux, les chefs-d’œuvre de Gaudí, Montserrat, Tarragone la romaine, le pays du cava et une soirée flamenco, depuis un hôtel 4★ en bord de mer."
        facts={["6 jours de pickleball", "4 excursions guidées", "Séjour en anglais et espagnol", "8 nuits, 4★ en bord de mer"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Où nous allons"
            title={
              <>
                Le pickleball au bord de la mer. Le meilleur de la <em className="font-normal">Catalogne</em>.
              </>
            }
            intro="Notre camp de base est Coma-ruga, sur la Costa Daurada. De là, notre autocar privé nous emmène découvrir le meilleur de la Catalogne, avec retour à la plage chaque soir."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Amphithéâtre romain de Tarragone au bord de la Méditerranée", name: "Tarragone", text: "Ruines romaines face à la mer" },
              { img: penedes, alt: "Vignobles vallonnés de la région viticole du Penedès", name: "Penedès", text: "Dégustation de vins et de cava" },
              { img: sitges, alt: "La plage et l’église de Sitges par une journée ensoleillée", name: "Sitges", text: "La ville balnéaire des artistes" },
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
            eyebrow="Itinéraire"
            title="Neuf jours, au rythme parfait"
            intro="Du pickleball six jours sur neuf, des excursions guidées et beaucoup de temps pour se détendre entre les deux."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} />
          </div>
          <p className="mt-10 text-sm text-stone">
            * L’ordre et les horaires des activités peuvent être ajustés pour offrir la meilleure expérience.
          </p>
        </Container>
      </section>

      <PricingSection
        retreat={longHaulLobFr}
        lang="fr"
        included={included}
        notIncluded="vols, pourboires, dépenses personnelles et repas autres que le petit-déjeuner quotidien et les 4 repas de groupe inclus."
        terms={[
          "Acompte : 20 % pour réserver votre place, déduit du prix total du voyage.",
          "Solde : à régler 60 jours avant la date de départ.",
          "Tous les prix sont en euros (EUR). Les montants en livres et en dollars sont indicatifs, au dernier taux de change.",
          "16 voyageurs maximum par voyage.",
          "Séjour encadré en anglais et en espagnol.",
        ]}
      />

      <ComaRugaSection lang="fr" />
      <HotelSection lang="fr" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Bon à savoir" title="Questions fréquentes sur le voyage" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="fr"
        title="Prêt pour le voyage pickleball de votre vie ?"
        intro="Demandez l’itinéraire complet, les dates et les disponibilités sans engagement. Nous vous répondrons personnellement sous 24 heures."
        defaultRetreat="Long-Haul Lob"
        defaultPhoneCode="+1"
      />
    </>
  );
}
