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
  title: "Voyage pickleball à Barcelone : 9 jours dès 2 999 €",
  absoluteTitle: true,
  description:
    "Dès 2 999 € : voyage pickleball de 9 jours en Espagne. Stage et tournoi au bord de la mer, puis Gaudí, Montserrat et le Palau de la Música Catalana.",
  path: longHaulLobFr.href,
  siteLang: "fr",
});

const days = [
  {
    label: "Jour 1 · Vendredi",
    title: "Arrivée et échauffement",
    text: "Transfert privé de l’aéroport de Barcelone-El Prat à notre hôtel en bord de mer à Coma-ruga. Installation et échauffement avec du jeu libre l’après-midi, puis réception de bienvenue avec le groupe.",
  },
  {
    label: "Jour 2 · Samedi",
    title: "Coaching et jeu libre",
    text: "Votre première séance de coaching de 90 minutes, puis jeu libre. L’après-midi est à vous, entre la plage, la piscine ou notre excursion en option à Sitges.",
  },
  {
    label: "Jour 3 · Dimanche",
    title: "Coaching et excursion en option à Tarragone",
    text: "Deuxième séance de coaching et matchs contre différents adversaires. L’après-midi, rejoignez notre visite guidée en option de Tarragone, ville classée au patrimoine mondial dont l’amphithéâtre romain fait face à la Méditerranée.",
  },
  {
    label: "Jour 4 · Lundi",
    title: "Jour de tournoi",
    text: "Un tournoi amical et disputé avec vos compagnons de voyage et des joueurs locaux. L’après-midi, détendez-vous à la plage ou rejoignez notre excursion en option à Reus, ville natale de Gaudí et capitale du vermouth catalan.",
  },
  {
    label: "Jour 5 · Mardi",
    title: "Cap sur Barcelone",
    text: "Jeu libre en option le matin avant de quitter la côte. Puis notre autocar privé remonte la côte vers Barcelone, avec une halte dans le Penedès pour une visite guidée des vignes et une dégustation de vins et de cava dans un domaine de charme. Installation dans notre hôtel 4★ à Barcelone, votre base pour la suite du voyage.",
  },
  {
    label: "Jour 6 · Mercredi",
    title: "La Barcelone de Gaudí",
    text: "Une journée complète pour découvrir Barcelone. Visites guidées de l’impressionnante Sagrada Família et du coloré Park Güell, puis balade dans le quartier gothique, sur les Ramblas et au célèbre marché de la Boqueria.",
  },
  {
    label: "Jour 7 · Jeudi",
    title: "Montserrat et Palau de la Música",
    text: "Excursion dans les montagnes déchiquetées de Montserrat pour visiter le monastère bénédictin, qui abrite la Vierge noire, avec des vues à couper le souffle sur la Catalogne. De retour à Barcelone, un concert avec places réservées au Palau de la Música Catalana, éblouissante salle moderniste inscrite au patrimoine mondial de l’UNESCO.",
  },
  {
    label: "Jour 8 · Vendredi",
    title: "Journée libre et fête d’adieu",
    text: "Une journée libre pour découvrir Barcelone à votre rythme. Le soir, nous nous retrouvons pour le dîner et la fête d’adieu « Hasta luego ».",
  },
  {
    label: "Jour 9 · Samedi",
    title: "Hasta luego",
    text: "Petit-déjeuner à l’hôtel et court transfert vers Barcelone-El Prat pour votre vol retour. À la prochaine, les amis !",
  },
];

const included = [
  "4 nuits dans un hôtel 4★ en bord de mer à Coma-ruga",
  "4 nuits dans un hôtel 4★ équivalent à Barcelone",
  "2 séances de coaching de 90 minutes avec des coachs diplômés (en anglais et en espagnol)",
  "Jeu libre et tournoi amical avec des joueurs locaux",
  "Fruits frais et eau fraîche sur les terrains",
  "Petit-déjeuner buffet tous les matins",
  "4 repas de groupe soigneusement choisis",
  "Autocar privé de luxe pour les excursions et le trajet vers Barcelone",
  "Dégustation de vins et de cava dans le Penedès",
  "Visites guidées de la Sagrada Família et du Park Güell",
  "Excursion au monastère de Montserrat",
  "Guides locaux professionnels (en anglais ou en espagnol)",
  "Accompagnateur bilingue anglais-espagnol pendant tout le séjour",
  "Concert au Palau de la Música Catalana",
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
  {
    question: "Où logeons-nous ?",
    answer:
      "Dans deux hôtels. Les quatre premières nuits à l’Estival Maramar, un hôtel 4★ en bord de mer à Coma-ruga, où nous jouons. Le jour 5, notre autocar privé vous emmène, vous et vos bagages, vers un hôtel 4★ équivalent à Barcelone pour les quatre dernières nuits consacrées aux visites.",
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
                "Un voyage pickleball de 9 jours en Catalogne : coaching et tournoi sur la côte de Barcelone, puis quatre nuits à Barcelone, avec visites guidées de la Sagrada Família, du Park Güell, de Montserrat et du Penedès. Séjour en anglais et en espagnol.",
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
        intro="Neuf jours inoubliables en Catalogne. D’abord du pickleball au bord de la mer sur la Costa Daurada, puis cap sur Barcelone pour les chefs-d’œuvre de Gaudí, Montserrat et un concert au Palau de la Música Catalana, avec une dégustation de cava en chemin."
        facts={["2 séances de coaching + tournoi", "3 excursions guidées", "Séjour en anglais et espagnol", "4 nuits plage + 4 nuits Barcelone"]}
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
            intro="Nous commençons à Coma-ruga, sur la Costa Daurada, avec quatre nuits de pickleball au bord de la mer. Le mardi, nous remontons la côte jusqu’à un hôtel 4★ à Barcelone pour découvrir la ville."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Amphithéâtre romain de Tarragone au bord de la Méditerranée", name: "Tarragone", text: "Excursion en option : ruines romaines face à la mer" },
              { img: penedes, alt: "Vignobles vallonnés de la région viticole du Penedès", name: "Penedès", text: "Dégustation de vins et de cava" },
              { img: sitges, alt: "La plage et l’église de Sitges par une journée ensoleillée", name: "Sitges", text: "Excursion en option : la ville balnéaire des artistes" },
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
            intro="Du pickleball au bord de la mer chaque matin du vendredi au mardi, puis Barcelone et ses trésors jusqu’au samedi."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} lang="fr" />
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
        notIncluded="vols, excursions en option à Sitges, Tarragone et Reus, pourboires, dépenses personnelles et repas autres que le petit-déjeuner quotidien et les 4 repas de groupe inclus."
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
