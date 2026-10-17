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
      amount: 1700,
      currency: "EUR",
      note: "per person, private room. Flights not included.",
    },
  ],
  highlights: [
    "Max 20 players",
    "3 × 90-minute coaching sessions",
    "Fun tournament with the locals",
    "Beachfront 4★ hotel",
  ],
};

export const longHaulLob: Retreat = {
  slug: "long-haul-lob",
  href: "/pickleball-vacation-barcelona",
  name: "Long-Haul Lob",
  audience: "Ideal for players traveling from the USA & Canada",
  duration: "9 days · 8 nights",
  durationIso: "P9D",
  days: 9,
  nights: 8,
  summary:
    "Our signature Barcelona pickleball vacation. Six days on court, Gaudí's Barcelona, Roman Tarragona, Montserrat, cava country and flamenco, all from a beachfront base on the Golden Coast.",
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
    "6 days of pickleball",
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
      amount: 1700,
      currency: "EUR",
      note: "por persona, habitación individual. Vuelos no incluidos.",
    },
  ],
  highlights: [
    "Máx. 20 jugadores",
    "3 sesiones de entrenamiento de 90 minutos",
    "Torneo amistoso con los locales",
    "Hotel 4★ en primera línea",
  ],
};

export const longHaulLobEs: Retreat = {
  ...longHaulLob,
  href: "/es/viaje-pickleball-barcelona",
  audience: "Ideal para jugadores que viajan desde América",
  duration: "9 días · 8 noches",
  summary:
    "Nuestro viaje de pickleball estrella en Barcelona. Seis días de pista, la Barcelona de Gaudí, la Tarragona romana, Montserrat, la tierra del cava y flamenco, todo desde una base en primera línea de la Costa Daurada.",
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
    "6 días de pickleball",
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
      amount: 1700,
      currency: "EUR",
      note: "par personne, chambre individuelle. Vols non inclus.",
    },
  ],
  highlights: [
    "20 joueurs max.",
    "3 séances de coaching de 90 min",
    "Tournoi amical avec les locaux",
    "Hôtel 4★ en bord de mer",
  ],
};

export const longHaulLobFr: Retreat = {
  ...longHaulLob,
  href: "/fr/voyage-pickleball-barcelone",
  audience: "Idéal pour les joueurs venant du Canada et d’Amérique du Nord",
  duration: "9 jours · 8 nuits",
  summary:
    "Notre voyage pickleball phare à Barcelone. Six jours sur le terrain, la Barcelone de Gaudí, Tarragone la romaine, Montserrat, le pays du cava et le flamenco, depuis un hôtel les pieds dans l’eau sur la Costa Daurada.",
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
    "6 jours de pickleball",
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
      amount: 1700,
      currency: "EUR",
      note: "pro Person im Einzelzimmer. Flüge nicht inklusive.",
    },
  ],
  highlights: [
    "Max. 20 Spieler",
    "3 × 90 Minuten Training",
    "Lockeres Turnier mit Einheimischen",
    "4★-Hotel direkt am Strand",
  ],
};

export const longHaulLobDe: Retreat = {
  ...longHaulLob,
  href: "/de/pickleball-reise-barcelona",
  audience: "Ideal für alle mit weiter Anreise oder mehr Zeit",
  duration: "9 Tage · 8 Nächte",
  summary:
    "Unsere große Barcelona-Pickleball-Reise. Sechs Tage auf dem Court, Gaudís Barcelona, das römische Tarragona, Montserrat, die Cava-Region und Flamenco, alles von einem Strandhotel an der Costa Daurada aus.",
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
    "6 Tage Pickleball",
    "4 geführte Ausflüge",
    "Zweisprachige Reiseleitung",
    "Flamenco & Abschiedsfiesta",
  ],
};

export const retreatsDe = [localDinkDe, longHaulLobDe];

const priceLocale = { EUR: "en-IE", GBP: "en-GB", USD: "en-US" } as const;

export function formatPrice(price: Pick<Price, "amount" | "currency">, locale?: string) {
  return new Intl.NumberFormat(locale ?? priceLocale[price.currency], {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}
