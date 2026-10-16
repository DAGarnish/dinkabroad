import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Credits and licences for the photography used on Dink Abroad.",
  alternates: { canonical: "/photo-credits" },
  robots: { index: false, follow: true },
};

const credits = [
  ["Sunset at Coma-ruga beach", "Víctor", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Platja_de_Coma-ruga_(el_Vendrell)_-_1.jpg"],
  ["Palms on Coma-ruga beach", "Luis Miguel Bugallo Sánchez (Lmbuga)", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Praia_de_Coma-ruga._El_Vendrell._Tarragona-28.jpg"],
  ["Coma-ruga bay", "Luis Miguel Bugallo Sánchez (Lmbuga)", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Praia_e_vila_de_Coma_Ruga._El_Vendrell._Tarragona-24.jpg"],
  ["Coma-ruga seafront", "Luis Miguel Bugallo Sánchez (Lmbuga)", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Coma_Ruga._El_Vendrell._Abril_2014_01.jpg"],
  ["Pickleball courts", "GA Kevin", "CC0", "https://commons.wikimedia.org/wiki/File:Harry_B._Anderson_Tennis_Center_-_Pickleball_Courts_1-3.jpg"],
  ["Sitges in summer", "Mike McBey", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Sitges_in_summer_-_51602633539.jpg"],
  ["Sagrada Família", "Jopparn", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Sagrada_Fam%C3%ADlia_2010.JPG"],
  ["Tarragona amphitheatre", "Ad Meskens", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tarragona_amphitheatre_01.jpg"],
  ["Penedès vineyards", "Angela Llop", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Paisatge_del_Penedes,_Primavera..jpg"],
];

export default function PhotoCredits() {
  return (
    <div className="bg-ink pt-28">
      <section className="bg-cream py-20">
        <Container className="max-w-3xl">
          <h1 className="font-display text-5xl tracking-tight">Photo credits</h1>
          <p className="mt-4 text-stone">
            Photography from Wikimedia Commons, used under the licences below. Images have been resized and cropped.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {credits.map(([title, author, licence, url]) => (
              <li key={url} className="py-4 text-sm">
                <a href={url} className="font-semibold text-sea hover:underline" rel="noopener">
                  {title}
                </a>{" "}
                by {author}, {licence}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
