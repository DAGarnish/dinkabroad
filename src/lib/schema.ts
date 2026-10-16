import { absoluteUrl, hotel, site } from "./site";
import { type Retreat } from "./retreats";

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");
export const hotelId = absoluteUrl("/#hotel");

export const organizationSchema = {
  "@type": ["TravelAgency", "Organization"],
  "@id": organizationId,
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/icon.svg"),
  image: absoluteUrl("/og-image.jpg"),
  description: site.description,
  slogan: site.tagline,
  areaServed: ["GB", "IE", "NL", "DE", "BE", "FR", "US", "CA"],
  knowsAbout: ["Pickleball", "Pickleball holidays", "Sports travel", "Barcelona", "Costa Daurada"],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": organizationId },
};

export const hotelSchema = {
  "@type": "Hotel",
  "@id": hotelId,
  name: hotel.name,
  url: hotel.url,
  starRating: { "@type": "Rating", ratingValue: 4 },
  address: {
    "@type": "PostalAddress",
    streetAddress: hotel.street,
    postalCode: hotel.postcode,
    addressLocality: hotel.locality,
    addressRegion: hotel.region,
    addressCountry: hotel.country,
  },
  geo: { "@type": "GeoCoordinates", ...hotel.geo },
  amenityFeature: [
    "Beachfront",
    "Rooftop swimming pool",
    "Spa and wellness centre",
    "Fitness centre",
    "Restaurant",
    "Free WiFi",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function tripSchema(
  retreat: Retreat,
  options: { description: string; touristType: string; itinerary?: { name: string; description: string }[] },
) {
  const itinerary = options.itinerary?.length
    ? {
        itinerary: {
          "@type": "ItemList",
          numberOfItems: options.itinerary.length,
          itemListElement: options.itinerary.map((day, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "TouristAttraction", name: day.name, description: day.description },
          })),
        },
      }
    : {};
  return {
    "@type": "TouristTrip",
    "@id": absoluteUrl(`${retreat.href}#trip`),
    name: `${retreat.name}: ${retreat.duration}`,
    url: absoluteUrl(retreat.href),
    description: options.description,
    image: absoluteUrl(retreat.image.src),
    touristType: options.touristType,
    provider: { "@id": organizationId },
    ...itinerary,
    offers: retreat.prices.map((price) => ({
      "@type": "Offer",
      name: price.label,
      price: price.amount,
      priceCurrency: price.currency,
      availability: "https://schema.org/LimitedAvailability",
      url: absoluteUrl(`${retreat.href}#enquire`),
      seller: { "@id": organizationId },
    })),
    subjectOf: { "@id": hotelId },
  };
}
