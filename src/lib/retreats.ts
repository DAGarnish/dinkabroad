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
  audience: "For players from the UK & Europe",
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
      amount: 890,
      currency: "GBP",
      note: "per person, sharing a twin room. Flights not included.",
    },
    {
      label: "Single room",
      amount: 1390,
      currency: "GBP",
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
  audience: "For players traveling from the USA & Canada",
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
      amount: 4590,
      currency: "USD",
      note: "per person, two travelers sharing. Airfare not included.",
    },
    {
      label: "Single room",
      amount: 5290,
      currency: "USD",
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

// Spanish site (es-ES). Prices are in euros for the Spanish-speaking market.
export const localDinkEs: Retreat = {
  ...localDink,
  href: "/es/vacaciones-pickleball-barcelona",
  audience: "Para jugadores de España y Europa",
  duration: "5 días · de viernes a martes",
  summary:
    "Un fin de semana largo de pickleball junto al Mediterráneo. Llegas el viernes, entrenas con entrenadores titulados, te mides con los locales en un torneo y vuelves a casa el martes.",
  imageAlt: "Palmeras en la playa de arena de Coma-ruga bajo un cielo azul",
  prices: [
    {
      label: "Habitación twin",
      amount: 1050,
      currency: "EUR",
      note: "por persona, en habitación twin compartida. Vuelos no incluidos.",
    },
    {
      label: "Habitación individual",
      amount: 1650,
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
  audience: "Para jugadores que viajan desde América",
  duration: "9 días · 8 noches",
  summary:
    "Nuestro viaje de pickleball estrella en Barcelona. Seis días de pista, la Barcelona de Gaudí, la Tarragona romana, Montserrat, la tierra del cava y flamenco, todo desde una base en primera línea de la Costa Daurada.",
  imageAlt: "Las torres de la Sagrada Família de Gaudí en Barcelona al atardecer",
  prices: [
    {
      label: "Habitación doble",
      amount: 3950,
      currency: "EUR",
      note: "por persona, dos viajeros compartiendo. Vuelos no incluidos.",
    },
    {
      label: "Habitación individual",
      amount: 4950,
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

const priceLocale = { EUR: "en-IE", GBP: "en-GB", USD: "en-US" } as const;

export function formatPrice(price: Pick<Price, "amount" | "currency">, locale?: string) {
  return new Intl.NumberFormat(locale ?? priceLocale[price.currency], {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}
