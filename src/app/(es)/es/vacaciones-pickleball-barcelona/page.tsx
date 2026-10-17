import Image from "next/image";
import courts from "@/assets/images/pickleball-courts.jpg";
import sitges from "@/assets/images/sitges.jpg";
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
import { localDinkEs } from "@/lib/retreats";
import { breadcrumbSchema, faqSchema, hotelSchema, tripSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Vacaciones de pickleball en Barcelona: retiro de 5 días desde 1100 €",
  description:
    "Vacaciones de pickleball de 5 días en la costa de Barcelona. Entrenamientos, un torneo amistoso, hotel 4★ en primera línea, comidas y traslados. Desde 1100 € por persona.",
  path: localDinkEs.href,
  siteLang: "es",
});

const reasons = [
  {
    title: "Entrenadores titulados",
    text: "Tres sesiones de 90 minutos con entrenadores titulados, por niveles, para que cada jugador se supere con el apoyo adecuado.",
  },
  {
    title: "Un torneo amistoso",
    text: "Un torneo divertido pero competido contra tus compañeros de viaje y jugadores catalanes. Presumir después está garantizado.",
  },
  {
    title: "Hotel 4★ en primera línea",
    text: "Cuatro noches en el Estival Maramar, en plena playa de Coma-ruga, con piscina en la azotea y spa.",
  },
  {
    title: "Desayuno, comida y traslados",
    text: "Desayuno diario, cuatro comidas españolas abundantes y traslados de ida y vuelta al aeropuerto. Todo resuelto.",
  },
  {
    title: "Grupo reducido, máx. 20",
    text: "Atención personal de los entrenadores y muchos compañeros de juego nuevos. Perfecto si vienes solo.",
  },
  {
    title: "Tiempo libre para explorar",
    text: "Las tardes son tuyas: la playa, el spa o una escapada por la costa a Sitges o Barcelona.",
  },
];

const days = [
  {
    label: "Día 1 · Viernes",
    title: "Llegada y primera sesión",
    text: "Te recogemos en el aeropuerto de Barcelona y te llevamos al hotel, en la playa. Después de comer juntos, directos a la pista para tu primera sesión de entrenamiento de 90 minutos.",
  },
  {
    label: "Día 2 · Sábado",
    title: "Entrenamiento y juego libre",
    text: "Segunda sesión de 90 minutos, seguida de juego libre. Por la tarde, elige entre una excursión opcional, más tiempo en la pista o simplemente relajarte en la piscina de la azotea.",
  },
  {
    label: "Día 3 · Domingo",
    title: "A la práctica",
    text: "Tercera sesión de entrenamiento por la mañana y después muchos partidos contra rivales distintos para afianzar lo aprendido.",
  },
  {
    label: "Día 4 · Lunes",
    title: "Día de torneo",
    text: "Pon a prueba lo aprendido en un torneo divertido y competido con tus compañeros de viaje y jugadores locales. La mejor forma de cerrar tus días en la pista.",
  },
  {
    label: "Día 5 · Martes",
    title: "Hasta pronto",
    text: "Último desayuno frente al mar, despedida de tus nuevos amigos y traslado de vuelta al aeropuerto.",
  },
];

const included = [
  "4 noches en el Estival Maramar 4★, en primera línea (habitación twin o individual)",
  "Desayuno diario y 4 comidas españolas abundantes",
  "3 sesiones de entrenamiento de 90 minutos con entrenadores titulados",
  "1 torneo amistoso con compañeros de viaje y jugadores locales",
  "Juego libre en las pistas",
  "Traslados de ida y vuelta al aeropuerto de Barcelona",
  "Grupo reducido de máximo 20 jugadores",
  "Atención personal del equipo de Dink Abroad",
];

const faqs: FaqItem[] = [
  {
    question: "¿Para qué nivel son estas vacaciones de pickleball?",
    answer:
      "Para todos los niveles, desde quien acaba de coger una pala hasta jugadores de 4.0 o más. Los entrenamientos y los partidos se organizan por niveles para que cada uno tenga el reto adecuado.",
  },
  {
    question: "¿Puedo venir solo?",
    answer:
      "Sí, y mucha gente lo hace. El grupo tiene un máximo de 20 jugadores, así que harás amigos enseguida dentro y fuera de la pista. ¿Prefieres habitación propia? La habitación individual cuesta 1700 € por persona.",
  },
  {
    question: "¿Están incluidos los vuelos?",
    answer:
      "Los vuelos no están incluidos, así que puedes venir desde donde mejor te venga. Llega al aeropuerto de Barcelona-El Prat el viernes y vuelve el martes; los traslados de ida y vuelta al aeropuerto están incluidos.",
  },
  {
    question: "¿Qué incluye y qué no?",
    answer:
      "Incluye: 4 noches de alojamiento en habitación twin o individual, desayuno diario, 4 comidas, 3 sesiones de entrenamiento, un torneo, juego libre y traslados al aeropuerto. No incluye: vuelos, cenas, bebidas, seguro de viaje ni excursiones opcionales.",
  },
  {
    question: "¿Cómo y cuándo se paga?",
    answer:
      "Cuando hayas pedido la información y decidas apuntarte, un depósito te reserva la plaza y el resto se paga antes de la salida. Te enviaremos las condiciones de reserva completas junto con la información.",
  },
  {
    question: "¿Tengo que traer mi propia pala?",
    answer:
      "Trae tu pala si tienes una que te encanta. Si no, avísanos cuando nos escribas y te ayudamos a conseguir una.",
  },
];

export default function VacacionesPickleballPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            tripSchema(localDinkEs, {
              description:
                "Vacaciones de pickleball de 5 días en la costa de Barcelona con entrenamientos, un torneo, hotel 4 estrellas en primera línea, comidas y traslados al aeropuerto.",
              touristType: "Jugadores de pickleball de España y Europa",
              itinerary: days.map((d) => ({ name: `${d.label}: ${d.title}`, description: d.text })),
            }),
            hotelSchema,
            breadcrumbSchema([
              { name: "Inicio", path: "/es" },
              { name: "Local Dink: vacaciones de pickleball en Barcelona", path: localDinkEs.href },
            ]),
            faqSchema(faqs),
          ],
        }}
      />

      <PageHero
        retreat={localDinkEs}
        lang="es"
        eyebrow="Local Dink · vacaciones de pickleball · Barcelona"
        title={
          <>
            5 días de pickleball, sol y <em className="font-normal">mar</em> junto a Barcelona
          </>
        }
        intro="La escapada de pickleball definitiva para jugadores de España y Europa. De viernes a martes en la Costa Daurada: entrenadores titulados, un torneo con los locales y un hotel 4★ en primera línea. Tú solo tienes que jugar."
        facts={["Máx. 20 participantes", "Hotel 4★ en primera línea", "Entrenadores titulados", "Traslados incluidos"]}
      />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="¿Por qué este retiro de pickleball?"
            title="Todo resuelto. Tú solo juega."
            intro="Un viaje de pickleball a la costa de Barcelona que se vive como un fin de semana de club, pero con más sol. Esto es lo que hace especial a Local Dink."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-cream p-8">
                <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="El programa"
              title="De viernes a martes, en su justa medida"
              intro="Cinco días entre entrenamientos, partidos, un torneo y descanso de verdad junto al Mediterráneo."
            />
            <div className="mt-12 pl-4">
              <Itinerary days={days} />
            </div>
          </div>
          <div className="space-y-6 lg:pt-20">
            <Image
              src={courts}
              alt="Pistas de pickleball al aire libre con las redes listas para jugar"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <Image
              src={sitges}
              alt="La playa y el casco antiguo de Sitges, a poca distancia por la costa"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lg"
            />
            <p className="text-sm text-stone">Excursión opcional por la tarde: Sitges está aquí al lado, por la costa.</p>
          </div>
        </Container>
      </section>

      <PricingSection
        retreat={localDinkEs}
        lang="es"
        included={included}
        notIncluded="vuelos, cenas, bebidas, seguro de viaje y excursiones opcionales."
        terms={[
          "Todos los precios están en euros (EUR). Los importes en libras y dólares son aproximados, al tipo de cambio más reciente.",
          "Máximo 20 jugadores por retiro.",
        ]}
      />

      <ComaRugaSection lang="es" />
      <HotelSection lang="es" />

      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Conviene saber" title="Preguntas frecuentes sobre las vacaciones de pickleball" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="es"
        title="¿Listo para tus vacaciones de pickleball en Barcelona?"
        intro="Pide toda la información sin compromiso: programa, fechas, precios y disponibilidad. Te responderemos personalmente en menos de 24 horas."
        defaultRetreat="Local Dink"
        defaultPhoneCode="+34"
      />
    </>
  );
}
