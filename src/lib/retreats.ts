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
      amount: 995,
      currency: "EUR",
      note: "per person, sharing a twin room. Flights not included.",
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
  href: "/pickleball-vacation-spain",
  name: "Long-Haul Lob",
  audience: "For players travelling from the USA & Canada",
  duration: "9 days · 8 nights",
  durationIso: "P9D",
  days: 9,
  nights: 8,
  summary:
    "Our signature pickleball vacation in Spain. Six days on court, Gaudí's Barcelona, Roman Tarragona, Montserrat, cava country and flamenco, all from a beachfront base on the Golden Coast.",
  image: sagrada,
  imageAlt: "The spires of Gaudí's Sagrada Família in Barcelona at golden hour",
  prices: [
    {
      label: "Double room",
      amount: 4890,
      currency: "USD",
      note: "per person, two travellers sharing. Airfare not included.",
    },
    {
      label: "Single room",
      amount: 5990,
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

export function formatPrice(price: Pick<Price, "amount" | "currency">) {
  return new Intl.NumberFormat(price.currency === "USD" ? "en-US" : "en-GB", {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}
