import type { StaticImageData } from "next/image";
import palms from "@/assets/images/coma-ruga-palms.jpg";
import sagrada from "@/assets/images/sagrada-familia.jpg";

export type Price = {
  label: string;
  amount: number;
  currency: "EUR" | "GBP" | "USD";
  note: string;
};

export type Retreat = {
  slug: string;
  href: string;
  name: string;
  audience: string;
  duration: string;
  durationIso: string;
  days: number;
  nights: number;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  prices: Price[];
  highlights: string[];
};

export const localDink: Retreat = {
  slug: "local-dink",
  href: "/pickleball-holiday-barcelona",
  name: "Local Dink",
  audience: "Ideal for players from the UK & Europe",
  duration: "5 days · Friday to Tuesday",
  durationIso: "P5D",
  days: 5,
  nights: 4,
  summary:
    "A long weekend of pickleball by the Mediterranean. Fly in on Friday, play with certified coaches, take on the locals in a tournament and fly home on Tuesday.",
  image: palms,
  imageAlt: "Palm trees on the sandy beach at Coma-ruga under a clear blue sky",
  prices: [
    {
      label: "Twin room",
      amount: 1100,
      currency: "EUR",
      note: "per person, sharing a twin room. Flights not included.",
    },
    {
      label: "Single room",
      amount: 1500,
      currency: "EUR",
      note: "per person, private room. Flights not included.",
    },
  ],
  highlights: [
    "Max 16 players",
    "3 × 90-minute coaching sessions",
    "Fun tournament with the locals",
    "Beachfront 4★ hotel",
  ],
};

export const longHaulLob: Retreat = {
  slug: "long-haul-lob",
  href: "/pickleball-vacation-barcelona",
  name: "Long-Haul Lob",
  audience: "Ideal for players traveling from further afield",
  duration: "9 days · Friday to Saturday",
  durationIso: "P9D",
  days: 9,
  nights: 8,
  summary:
    "Our signature Barcelona pickleball vacation. Four nights of pickleball by the sea on the Golden Coast, then four nights in Barcelona for Gaudí, Montserrat and flamenco, with Roman Tarragona and cava country along the way.",
  image: sagrada,
  imageAlt: "The spires of Gaudí's Sagrada Família in Barcelona at golden hour",
  prices: [
    {
      label: "Double room",
      amount: 3500,
      currency: "EUR",
      note: "per person, two travelers sharing. Airfare not included.",
    },
    {
      label: "Single room",
      amount: 4100,
      currency: "EUR",
      note: "per person, private room. Airfare not included.",
    },
  ],
  highlights: [
    "3 coaching sessions + tournament",
    "4 guided day trips",
    "Bilingual tour director",
    "Flamenco & farewell fiesta",
  ],
};

export const retreats = [localDink, longHaulLob];

// Spanish site (es-ES). All prices are set in euros; other currencies are converted from them.
export const localDinkEs: Retreat = {
  ...localDink,
  href: "/es/vacaciones-pickleball-barcelona",
  audience: "Ideal para jugadores de España y Europa",
  duration: "5 días · de viernes a martes",
  summary:
    "Un fin de semana largo de pickleball junto al Mediterráneo. Llegas el viernes, entrenas con entrenadores titulados, te mides con los locales en un torneo y vuelves a casa el martes.",
  imageAlt: "Palmeras en la playa de arena de Coma-ruga bajo un cielo azul",
  prices: [
    {
      label: "Habitación twin",
      amount: 1100,
      currency: "EUR",
      note: "por persona, en habitación twin compartida. Vuelos no incluidos.",
    },
    {
      label: "Habitación individual",
      amount: 1500,
      currency: "EUR",
      note: "por persona, habitación individual. Vuelos no incluidos.",
    },
  ],
  highlights: [
    "Máx. 16 jugadores",
    "3 sesiones de entrenamiento de 90 minutos",
    "Torneo amistoso con los locales",
    "Hotel 4★ en primera línea",
  ],
};

export const longHaulLobEs: Retreat = {
  ...longHaulLob,
  href: "/es/viaje-pickleball-barcelona",
  audience: "Ideal para jugadores que vienen de más lejos",
  duration: "9 días · de viernes a sábado",
  summary:
    "Nuestro viaje de pickleball estrella en Barcelona. Cuatro noches de pickleball junto al mar en la Costa Daurada y después cuatro noches en Barcelona para Gaudí, Montserrat y flamenco, con la Tarragona romana y la tierra del cava por el camino.",
  imageAlt: "Las torres de la Sagrada Família de Gaudí en Barcelona al atardecer",
  prices: [
    {
      label: "Habitación doble",
      amount: 3500,
      currency: "EUR",
      note: "por persona, dos viajeros compartiendo. Vuelos no incluidos.",
    },
    {
      label: "Habitación individual",
      amount: 4100,
      currency: "EUR",
      note: "por persona, habitación individual. Vuelos no incluidos.",
    },
  ],
  highlights: [
    "3 entrenamientos + torneo",
    "4 excursiones guiadas",
    "Guía bilingüe",
    "Flamenco y fiesta de despedida",
  ],
};

export const retreatsEs = [localDinkEs, longHaulLobEs];

// French site (fr-FR).
export const localDinkFr: Retreat = {
  ...localDink,
  href: "/fr/vacances-pickleball-barcelone",
  audience: "Idéal pour les joueurs de France et d’Europe",
  duration: "5 jours · du vendredi au mardi",
  summary:
    "Un long week-end de pickleball au bord de la Méditerranée. Arrivée le vendredi, entraînement avec des coachs diplômés, tournoi face aux joueurs locaux et retour le mardi.",
  imageAlt: "Palmiers sur la plage de sable de Coma-ruga sous un ciel bleu",
  prices: [
    {
      label: "Chambre twin",
      amount: 1100,
      currency: "EUR",
      note: "par personne, en chambre twin partagée. Vols non inclus.",
    },
    {
      label: "Chambre individuelle",
      amount: 1500,
      currency: "EUR",
      note: "par personne, chambre individuelle. Vols non inclus.",
    },
  ],
  highlights: [
    "16 joueurs max.",
    "3 séances de coaching de 90 min",
    "Tournoi amical avec les locaux",
    "Hôtel 4★ en bord de mer",
  ],
};

export const longHaulLobFr: Retreat = {
  ...longHaulLob,
  href: "/fr/voyage-pickleball-barcelone",
  audience: "Idéal pour les joueurs venant de plus loin",
  duration: "9 jours · du vendredi au samedi",
  summary:
    "Notre voyage pickleball phare à Barcelone. Quatre nuits de pickleball au bord de la mer sur la Costa Daurada, puis quatre nuits à Barcelone pour Gaudí, Montserrat et le flamenco, avec Tarragone la romaine et le pays du cava en chemin.",
  imageAlt: "Les tours de la Sagrada Família de Gaudí à Barcelone au coucher du soleil",
  prices: [
    {
      label: "Chambre double",
      amount: 3500,
      currency: "EUR",
      note: "par personne, deux voyageurs partageant la chambre. Vols non inclus.",
    },
    {
      label: "Chambre individuelle",
      amount: 4100,
      currency: "EUR",
      note: "par personne, chambre individuelle. Vols non inclus.",
    },
  ],
  highlights: [
    "3 séances de coaching + tournoi",
    "4 excursions guidées",
    "Accompagnateur bilingue",
    "Flamenco et fête d’adieu",
  ],
};

export const retreatsFr = [localDinkFr, longHaulLobFr];

// German site (de-DE).
export const localDinkDe: Retreat = {
  ...localDink,
  href: "/de/pickleball-urlaub-barcelona",
  audience: "Ideal für Spieler aus Deutschland, Österreich, der Schweiz und Europa",
  duration: "5 Tage · Freitag bis Dienstag",
  summary:
    "Ein langes Pickleball-Wochenende am Mittelmeer. Freitag anreisen, mit zertifizierten Trainern spielen, im Turnier gegen Einheimische antreten und am Dienstag nach Hause fliegen.",
  imageAlt: "Palmen am Sandstrand von Coma-ruga unter blauem Himmel",
  prices: [
    {
      label: "Zweibettzimmer",
      amount: 1100,
      currency: "EUR",
      note: "pro Person im geteilten Zweibettzimmer. Flüge nicht inklusive.",
    },
    {
      label: "Einzelzimmer",
      amount: 1500,
      currency: "EUR",
      note: "pro Person im Einzelzimmer. Flüge nicht inklusive.",
    },
  ],
  highlights: [
    "Max. 16 Spieler",
    "3 × 90 Minuten Training",
    "Lockeres Turnier mit Einheimischen",
    "4★-Hotel direkt am Strand",
  ],
};

export const longHaulLobDe: Retreat = {
  ...longHaulLob,
  href: "/de/pickleball-reise-barcelona",
  audience: "Ideal für Spieler mit weiter Anreise",
  duration: "9 Tage · Freitag bis Samstag",
  summary:
    "Unsere große Barcelona-Pickleball-Reise. Vier Nächte Pickleball am Meer an der Costa Daurada, dann vier Nächte in Barcelona für Gaudí, Montserrat und Flamenco, mit dem römischen Tarragona und der Cava-Region unterwegs.",
  imageAlt: "Die Türme von Gaudís Sagrada Família in Barcelona im Abendlicht",
  prices: [
    {
      label: "Doppelzimmer",
      amount: 3500,
      currency: "EUR",
      note: "pro Person bei zwei Reisenden im Zimmer. Flüge nicht inklusive.",
    },
    {
      label: "Einzelzimmer",
      amount: 4100,
      currency: "EUR",
      note: "pro Person im Einzelzimmer. Flüge nicht inklusive.",
    },
  ],
  highlights: [
    "3 Trainingseinheiten + Turnier",
    "4 geführte Ausflüge",
    "Zweisprachige Reiseleitung",
    "Flamenco & Abschiedsfiesta",
  ],
};

export const retreatsDe = [localDinkDe, longHaulLobDe];

// Dutch site (nl-NL).
export const localDinkNl: Retreat = {
  ...localDink,
  href: "/nl/pickleball-vakantie-barcelona",
  audience: "Ideaal voor spelers uit Nederland, België en de rest van Europa",
  duration: "5 dagen · vrijdag tot dinsdag",
  summary:
    "Een lang pickleballweekend aan de Middellandse Zee. Vrijdag vlieg je erheen, je traint met gecertificeerde coaches, neemt het in een toernooi op tegen de locals en dinsdag vlieg je weer naar huis.",
  imageAlt: "Palmbomen op het zandstrand van Coma-ruga onder een strakblauwe lucht",
  prices: [
    {
      label: "Twinkamer",
      amount: 1100,
      currency: "EUR",
      note: "per persoon, in een gedeelde twin-kamer. Vluchten niet inbegrepen.",
    },
    {
      label: "Eenpersoonskamer",
      amount: 1500,
      currency: "EUR",
      note: "per persoon, eigen kamer. Vluchten niet inbegrepen.",
    },
  ],
  highlights: [
    "Max. 16 spelers",
    "3 × 90 minuten training",
    "Gezellig toernooi met de locals",
    "4★-hotel aan het strand",
  ],
};

export const longHaulLobNl: Retreat = {
  ...longHaulLob,
  href: "/nl/pickleball-reis-barcelona",
  audience: "Ideaal voor spelers die van verder weg komen",
  duration: "9 dagen · vrijdag tot zaterdag",
  summary:
    "Onze grote pickleballreis naar Barcelona. Vier nachten pickleball aan zee aan de Costa Daurada, daarna vier nachten in Barcelona voor Gaudí, Montserrat en flamenco, met het Romeinse Tarragona en de cavastreek onderweg.",
  imageAlt: "De torens van Gaudí’s Sagrada Família in Barcelona in het avondlicht",
  prices: [
    {
      label: "Tweepersoonskamer",
      amount: 3500,
      currency: "EUR",
      note: "per persoon, met twee reizigers op een kamer. Vluchten niet inbegrepen.",
    },
    {
      label: "Eenpersoonskamer",
      amount: 4100,
      currency: "EUR",
      note: "per persoon, eigen kamer. Vluchten niet inbegrepen.",
    },
  ],
  highlights: [
    "3 trainingen + toernooi",
    "4 begeleide excursies",
    "Tweetalige reisleiding",
    "Flamenco & afscheidsfeest",
  ],
};

export const retreatsNl = [localDinkNl, longHaulLobNl];

const priceLocale = { EUR: "en-IE", GBP: "en-GB", USD: "en-US" } as const;

export function formatPrice(price: Pick<Price, "amount" | "currency">, locale?: string) {
  return new Intl.NumberFormat(locale ?? priceLocale[price.currency], {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}
