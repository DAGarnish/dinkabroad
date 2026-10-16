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
import { longHaulLobEs } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Viaje de pickleball a Barcelona: 9 días de pickleball y cultura",
  description:
    "Un viaje de pickleball de 9 días en Barcelona: 6 días de juego, la Barcelona de Gaudí, Montserrat, Tarragona, la tierra del cava y flamenco desde un hotel 4★ en primera línea. Desde 3950 €.",
  path: longHaulLobEs.href,
  siteLang: "es",
});

const days = [
  {
    label: "Día 1",
    title: "¡Bienvenidos!",
    text: "Traslado privado desde el aeropuerto de Barcelona-El Prat a nuestro hotel en primera línea de Coma-ruga. Te instalas, estiras las piernas con una tarde de pickleball y te unes al grupo para la recepción de bienvenida.",
  },
  {
    label: "Día 2",
    title: "Pickleball y la Tarragona romana",
    text: "Una mañana de entrenamiento y juego, y por la tarde visita guiada a Tarragona, ciudad Patrimonio de la Humanidad cuyo anfiteatro romano mira directamente al Mediterráneo.",
  },
  {
    label: "Día 3",
    title: "La Barcelona de Gaudí",
    text: "Un día completo en Barcelona en autocar privado. Visitas guiadas a la impresionante Sagrada Família y al colorido Park Güell, y un paseo por el Barrio Gótico, Las Ramblas y el famoso mercado de La Boqueria.",
  },
  {
    label: "Día 4",
    title: "Pickleball y Montserrat",
    text: "Pickleball por la mañana y después a las montañas de Montserrat para visitar el monasterio benedictino, hogar de la Moreneta, con vistas espectaculares sobre Cataluña.",
  },
  {
    label: "Día 5",
    title: "Juega con los locales",
    text: "El pickleball está en pleno auge en España. La sesión de hoy te pone en la pista con jugadores locales, y la tarde es libre para la playa, la piscina de la azotea o el spa del hotel.",
  },
  {
    label: "Día 6",
    title: "La tierra del cava y Sitges",
    text: "Un corto trayecto en autocar hasta el Penedès para visitar los viñedos y hacer una cata de vinos y cava en una bodega boutique. Después, Sitges, el pueblo blanco junto al mar que enamoró a los artistas.",
  },
  {
    label: "Día 7",
    title: "Pickleball y flamenco",
    text: "Una mañana en la pista, una tarde libre y una noche de flamenco con asientos reservados: guitarras, cante apasionado y el taconeo de los bailaores.",
  },
  {
    label: "Día 8",
    title: "Último partido y fiesta de despedida",
    text: "La última sesión termina con un torneo amistoso. Por la noche nos reunimos para la cena y fiesta de despedida «Hasta luego».",
  },
  {
    label: "Día 9",
    title: "Hasta luego",
    text: "Desayuno en el hotel y traslado a Barcelona-El Prat para tu vuelo de vuelta. ¡Hasta la próxima, amigos!",
  },
];

const included = [
  "8 noches en un hotel 4★ en primera línea de playa",
  "6 días de pickleball al aire libre: entrenamiento, juego organizado y partidos con jugadores locales",
  "Fruta fresca y agua fría en las pistas",
  "Transporte de ida y vuelta a las pistas",
  "Desayuno bufé todas las mañanas",
  "4 comidas en grupo cuidadosamente seleccionadas",
  "Autocar privado de lujo para las excursiones",
  "Visitas guiadas a la Sagrada Família y al Park Güell",
  "Excursión al monasterio de Montserrat",
  "Visita guiada a la Tarragona romana",
  "Cata de vinos y cava en el Penedès y visita a Sitges",
  "Guías locales profesionales en todas las excursiones",
  "Guía acompañante bilingüe durante todo el viaje",
  "Espectáculo de flamenco",
  "Recepción de bienvenida",
  "Cena y fiesta de despedida «Hasta luego»",
  "Traslados de ida y vuelta al aeropuerto de Barcelona-El Prat",
];

const faqs: FaqItem[] = [
  {
    question: "¿A qué aeropuerto debo volar?",
    answer:
      "Vuela a Barcelona-El Prat (BCN), con vuelos directos desde muchas ciudades de América. Nuestro traslado privado te recoge el día 1 y te lleva de vuelta el día 9.",
  },
  {
    question: "¿Necesito visado para viajar a España?",
    answer:
      "Depende de tu nacionalidad. Los ciudadanos de muchos países de América, como Estados Unidos, Canadá, México, Argentina o Chile, no necesitan visado para estancias turísticas cortas. Consulta siempre los requisitos de entrada actualizados antes de viajar.",
  },
  {
    question: "¿Para qué nivel es este viaje de pickleball?",
    answer:
      "Para todos los niveles, desde jugadores recreativos hasta competidores de 4.0 o más. El entrenamiento y el juego organizado se agrupan por niveles para que todos tengan buenos partidos.",
  },
  {
    question: "Viajo solo. ¿Hay algún problema?",
    answer:
      "Ninguno. Muchos de nuestros viajeros vienen solos. Elige la habitación individual para tener tu propio espacio y verás que la primera noche ya tienes nuevos amigos.",
  },
  {
    question: "¿Cómo funcionan el pago y el depósito?",
    answer:
      "Un depósito del 20 % te reserva la plaza y se descuenta del precio total del viaje. El resto se paga 60 días antes de la fecha de salida. Todos los precios están en euros.",
  },
  {
    question: "¿Por qué el viaje tiene su base en Coma-ruga y no en el centro de Barcelona?",
    answer:
      "Tienes lo mejor de los dos mundos: una base tranquila en primera línea de playa con espacio para jugar, piscina en la azotea y spa, y Barcelona a una hora en tren por la costa o en autocar privado.",
  },
];

export default function ViajePickleballPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(longHaulLobEs, {
              description:
                "Un viaje de pickleball de 9 días en la costa de Barcelona con 6 días de juego y excursiones guiadas a Barcelona, Montserrat, Tarragona, el Penedès y Sitges.",
              touristType: "Jugadores de pickleball que viajan desde América",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Inicio", path: "/es" },
              { name: "Long-Haul Lob: viaje de pickleball a Barcelona", path: longHaulLobEs.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={longHaulLobEs}
        lang="es"
        eyebrow="Long-Haul Lob · viaje de pickleball · Barcelona"
        title={
          <>
            El viaje de pickleball definitivo en <em className="font-normal">Barcelona</em>
          </>
        }
        intro="Nueve días inolvidables en la costa mediterránea junto a Barcelona. Seis días de pickleball con jugadores locales, las obras maestras de Gaudí, Montserrat, la Tarragona romana, la tierra del cava y una noche de flamenco, todo desde un hotel 4★ en primera línea."
        facts={["6 días de pickleball", "4 excursiones guiadas", "Guía bilingüe", "8 noches, 4★ en primera línea"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Adónde vamos"
            title={
              <>
                Pickleball junto al mar. Lo mejor de <em className="font-normal">Cataluña</em>.
              </>
            }
            intro="Nuestra base es Coma-ruga, en la Costa Daurada. Desde allí, nuestro autocar privado nos lleva a lo mejor de Cataluña y siempre volvemos a la playa por la tarde."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Anfiteatro romano de Tarragona junto al Mediterráneo", name: "Tarragona", text: "Ruinas romanas junto al mar" },
              { img: penedes, alt: "Viñedos ondulados en la región vinícola del Penedès", name: "Penedès", text: "Cata de vinos y cava" },
              { img: sitges, alt: "La playa y la iglesia de Sitges en un día soleado", name: "Sitges", text: "El pueblo de los artistas" },
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
            eyebrow="Itinerario"
            title="Nueve días, con el ritmo perfecto"
            intro="Hay pickleball seis días, con excursiones guiadas y mucho tiempo para relajarse entre medias."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} />
          </div>
          <p className="mt-10 text-sm text-stone">
            * El orden y los horarios de las actividades pueden ajustarse para ofrecer la mejor experiencia.
          </p>
        </Container>
      </section>

      <PricingSection
        retreat={longHaulLobEs}
        lang="es"
        included={included}
        notIncluded="vuelos, propinas, gastos personales y las comidas aparte del desayuno diario y las 4 comidas en grupo incluidas."
        terms={[
          "Depósito: el 20 % te reserva la plaza y se descuenta del precio total del viaje.",
          "Pago final: el resto se abona 60 días antes de la fecha de salida.",
          "Todos los precios están en euros (EUR). Los importes en libras y dólares son aproximados, al tipo de cambio más reciente.",
        ]}
      />

      <ComaRugaSection lang="es" />
      <HotelSection lang="es" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Conviene saber" title="Preguntas frecuentes sobre el viaje" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="es"
        title="¿Listo para el viaje de pickleball de tu vida?"
        intro="Pide el itinerario completo, las fechas y la disponibilidad sin compromiso. Te responderemos personalmente en menos de 24 horas."
        defaultRetreat="Long-Haul Lob"
        defaultPhoneCode="+52"
      />
    </>
  );
}
