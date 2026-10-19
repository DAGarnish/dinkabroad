export const site = {
  name: "Dink Abroad",
  url: "https://dinkabroad.com",
  tagline: "Pickleball retreats on the Barcelona coast",
  description:
    "Small-group pickleball retreats in Coma-ruga, one hour by scenic train from Barcelona. Coaching, tournaments and a beachfront 4-star hotel on the Costa Daurada.",
  locale: "en_GB",
};

export const hotel = {
  name: "Estival Maramar",
  url: "https://www.estivalgroup.com/estival-maramar-comarruga.html",
  street: "Avenida Brisamar, 44-50",
  postcode: "43880",
  locality: "Coma-ruga, El Vendrell",
  region: "Tarragona, Catalonia",
  country: "ES",
  geo: { latitude: 41.1795, longitude: 1.5163 },
};

export const destination = {
  name: "Coma-ruga",
  region: "Costa Daurada, Catalonia",
  station: "Sant Vicenç de Calders",
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
