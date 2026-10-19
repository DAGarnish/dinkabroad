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
    "Un viaje de pickleball de 9 días en Barcelona: pickleball junto al mar y después la Barcelona de Gaudí, Montserrat, la tierra del cava y flamenco, con excursiones opcionales a Tarragona y Sitges. Desde 3500 €.",
  path: longHaulLobEs.href,
  siteLang: "es",
});

const days = [
  {
    label: "Día 1 · Viernes",
    title: "¡Bienvenidos!",
    text: "Traslado privado desde el aeropuerto de Barcelona-El Prat a nuestro hotel en primera línea de Coma-ruga. Te instalas, te refrescas en la piscina infinita y te unes al grupo para la recepción de bienvenida.",
  },
  {
    label: "Día 2 · Sábado",
    title: "Entrenamiento y juego libre",
    text: "Tu primera sesión de entrenamiento de 90 minutos, seguida de juego libre. El pickleball es siempre por la mañana, así que la tarde es tuya: la playa, la piscina o nuestra excursión opcional a Sitges.",
  },
  {
    label: "Día 3 · Domingo",
    title: "Entrenamiento y excursión opcional a Tarragona",
    text: "Segunda sesión de entrenamiento y partidos contra rivales distintos. Por la tarde, apúntate a nuestra excursión guiada opcional a Tarragona, ciudad Patrimonio de la Humanidad cuyo anfiteatro romano mira directamente al Mediterráneo.",
  },
  {
    label: "Día 4 · Lunes",
    title: "Última sesión y torneo",
    text: "Tu tercera sesión de entrenamiento y después un torneo divertido y competido con tus compañeros de viaje y jugadores locales. Por la tarde, relájate en la playa o apúntate a nuestra excursión opcional a Vilanova i la Geltrú.",
  },
  {
    label: "Día 5 · Martes",
    title: "Costa arriba hasta Barcelona",
    text: "Nuestro autocar privado pone rumbo a Barcelona con parada en el Penedès para visitar los viñedos y hacer una cata de vinos y cava en una bodega boutique. Después, te instalas en nuestro hotel 4★ de Barcelona, tu base para el resto del viaje.",
  },
  {
    label: "Día 6 · Miércoles",
    title: "La Barcelona de Gaudí",
    text: "Un día completo descubriendo Barcelona. Visitas guiadas a la impresionante Sagrada Família y al colorido Park Güell, y un paseo por el Barrio Gótico, Las Ramblas y el famoso mercado de La Boqueria.",
  },
  {
    label: "Día 7 · Jueves",
    title: "Montserrat y flamenco",
    text: "Excursión a las montañas de Montserrat para visitar el monasterio benedictino, hogar de la Moreneta, con vistas espectaculares sobre Cataluña. De vuelta en Barcelona, una noche de flamenco con asientos reservados.",
  },
  {
    label: "Día 8 · Viernes",
    title: "Día libre y fiesta de despedida",
    text: "Un día libre para descubrir Barcelona a tu ritmo. Por la noche nos reunimos para la cena y fiesta de despedida «Hasta luego».",
  },
  {
    label: "Día 9 · Sábado",
    title: "Hasta luego",
    text: "Desayuno en el hotel y un corto traslado a Barcelona-El Prat para tu vuelo de vuelta. ¡Hasta la próxima, amigos!",
  },
];

const included = [
  "4 noches en un hotel 4★ en primera línea de playa en Coma-ruga",
  "4 noches en un hotel 4★ equivalente en Barcelona",
  "3 sesiones de entrenamiento de 90 minutos con entrenadores titulados",
  "Juego libre y un torneo amistoso con jugadores locales",
  "Fruta fresca y agua fría en las pistas",
  "Desayuno bufé todas las mañanas",
  "4 comidas en grupo cuidadosamente seleccionadas",
  "Autocar privado de lujo para las excursiones y el traslado a Barcelona",
  "Cata de vinos y cava en el Penedès",
  "Visitas guiadas a la Sagrada Família y al Park Güell",
  "Excursión al monasterio de Montserrat",
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
    question: "¿Dónde nos alojamos?",
    answer:
      "En dos hoteles. Las cuatro primeras noches, en el Estival Maramar, un hotel 4★ en primera línea de playa en Coma-ruga, donde jugamos. El día 5 nuestro autocar privado te lleva con tu equipaje costa arriba hasta un hotel 4★ equivalente en Barcelona para las cuatro últimas noches de visitas.",
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
                "Un viaje de pickleball de 9 días en Cataluña: entrenamientos y un torneo en la costa de Barcelona y después cuatro noches en Barcelona, con visitas guiadas a la Sagrada Família, el Park Güell, Montserrat y el Penedès.",
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
        intro="Nueve días inolvidables en Cataluña. Empieza con pickleball junto al mar en la Costa Daurada y sube después por la costa hasta Barcelona para ver las obras maestras de Gaudí, Montserrat y una noche de flamenco, con una cata de cava por el camino."
        facts={["3 entrenamientos + torneo", "3 excursiones guiadas", "Guía bilingüe", "4 noches en la playa + 4 en Barcelona"]}
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
            intro="Empezamos en Coma-ruga, en la Costa Daurada, con cuatro noches de pickleball junto al mar. El martes subimos por la costa hasta un hotel 4★ en Barcelona para descubrir la ciudad."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: tarragona, alt: "Anfiteatro romano de Tarragona junto al Mediterráneo", name: "Tarragona", text: "Excursión opcional: ruinas romanas junto al mar" },
              { img: penedes, alt: "Viñedos ondulados en la región vinícola del Penedès", name: "Penedès", text: "Cata de vinos y cava" },
              { img: sitges, alt: "La playa y la iglesia de Sitges en un día soleado", name: "Sitges", text: "Excursión opcional: el pueblo de los artistas" },
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
            intro="Pickleball junto al mar todas las mañanas de viernes a martes, y después Barcelona y sus rincones hasta el sábado."
          />
          <div className="mt-12 max-w-3xl pl-4">
            <Itinerary days={days} lang="es" />
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
        notIncluded="vuelos, excursiones opcionales a Sitges, Tarragona y Vilanova i la Geltrú, propinas, gastos personales y las comidas aparte del desayuno diario y las 4 comidas en grupo incluidas."
        terms={[
          "Depósito: el 20 % te reserva la plaza y se descuenta del precio total del viaje.",
          "Pago final: el resto se abona 60 días antes de la fecha de salida.",
          "Todos los precios están en euros (EUR). Los importes en libras y dólares son aproximados, al tipo de cambio más reciente.",
          "Máximo 16 viajeros por viaje.",
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
