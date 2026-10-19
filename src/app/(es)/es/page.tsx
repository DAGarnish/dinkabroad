import Image from "next/image";
import Link from "next/link";
import sunset from "@/assets/images/coma-ruga-sunset.jpg";
import courts from "@/assets/images/pickleball-courts.jpg";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ComaRugaSection, EnquirySection, HotelSection, RetreatCard } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { retreatsEs } from "@/lib/retreats";
import { faqSchema, hotelSchema, tripSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Vacaciones de pickleball en Barcelona, España | Dink Abroad",
  description:
    "Retiros, campus y vacaciones de pickleball en la costa de Barcelona. Máx. 16 jugadores, entrenamientos, torneo y hotel 4★ en primera línea de playa.",
  path: "/es",
  absoluteTitle: true,
  siteLang: "es",
});

const pillars = [
  {
    title: "Entrenamientos que te hacen mejorar",
    text: "Sesiones de 90 minutos con entrenadores titulados, adaptadas a tu nivel, desde tu primer dink hasta estar listo para competir.",
  },
  {
    title: "Grupos pequeños, gran ambiente",
    text: "Nunca más de 16 jugadores, para que tengas atención de verdad en la pista. ¿Vienes solo? A la hora de comer ya tendrás compañeros de juego.",
  },
  {
    title: "Juega con los locales",
    text: "El pickleball está en pleno auge en España. Torneos amistosos y juego libre te ponen al otro lado de la red frente a jugadores catalanes.",
  },
  {
    title: "Sol, mar y Mediterráneo",
    text: "Mañanas en la pista y tardes junto al mar. Barcelona, Sitges y Tarragona, a un paso.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "¿Dónde se celebran los retiros de pickleball de Dink Abroad?",
    answer:
      "Todos los retiros tienen su base en Coma-ruga, en la Costa Daurada (Cataluña). Está a una hora del centro de Barcelona en tren directo por la costa, y nos alojamos en el hotel Estival Maramar, un 4 estrellas en primera línea de playa.",
  },
  {
    question: "¿Qué retiro es para mí?",
    answer:
      "Local Dink son unas vacaciones de pickleball de 5 días (de viernes a martes), pensadas para jugadores de España y Europa. Long-Haul Lob es un viaje de 9 días para quienes vienen desde América, con el mismo pickleball junto al mar de viernes a martes y después cuatro noches en Barcelona, con visitas guiadas a las obras de Gaudí, Montserrat y el Penedès, además de excursiones opcionales a Tarragona, Sitges y Vilanova i la Geltrú.",
  },
  {
    question: "¿Qué nivel necesito?",
    answer:
      "Todos los niveles son bienvenidos, desde principiantes hasta jugadores de 4.0 o más. Los entrenamientos y los partidos se organizan por niveles para que todo el mundo disfrute y se supere.",
  },
  {
    question: "¿Puedo venir solo?",
    answer:
      "Por supuesto. Muchos participantes vienen solos. Con un máximo de 16 jugadores, el grupo se une enseguida dentro y fuera de la pista.",
  },
  {
    question: "¿Están incluidos los vuelos?",
    answer:
      "No. Los vuelos no están incluidos, así que puedes viajar desde donde mejor te venga. Los traslados al aeropuerto están incluidos en el Long-Haul Lob. Para el Local Dink, a Coma-ruga se llega fácilmente en tren por la costa desde Barcelona.",
  },
];

export default function InicioPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/es#webpage"),
              url: absoluteUrl("/es"),
              name: "Retiros de pickleball en Barcelona | Dink Abroad",
              inLanguage: "es-ES",
              about: { "@id": absoluteUrl("/#organization") },
              isPartOf: { "@id": absoluteUrl("/#website") },
            },
            {
              "@type": "ItemList",
              name: "Retiros de pickleball de Dink Abroad",
              itemListElement: retreatsEs.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(r.href),
                name: r.name,
              })),
            },
            ...retreatsEs.map((r) => tripSchema(r, { description: r.summary, touristType: r.audience })),
            hotelSchema,
            faqSchema(faqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-cream">
        <Image
          src={sunset}
          alt="Puesta de sol dorada sobre las palmeras de la playa de Coma-ruga, en la Costa Daurada"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <Container className="w-full pt-36 pb-16 sm:pb-24">
          <p className="animate-rise text-xs font-semibold tracking-[0.3em] text-ball uppercase">
            Retiros de pickleball · Costa de Barcelona
          </p>
          <h1 className="mt-6 max-w-4xl animate-rise font-display text-5xl leading-[1.02] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-7xl lg:text-[5.5rem]">
            Retiros de pickleball en la costa de <em className="font-normal">Barcelona</em>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-cream/85 [animation-delay:240ms] sm:text-xl">
            Vacaciones de pickleball en grupos reducidos en la soleada Coma-ruga, a una hora de Barcelona en un
            tren con vistas al mar. Entrenadores expertos, torneos amistosos y un hotel en primera línea. Tú solo
            tienes que jugar.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="#retreats"
              className="rounded-full bg-ball px-7 py-4 font-semibold text-ink transition hover:bg-white"
            >
              Descubre los retiros
            </Link>
            <Link
              href="#enquire"
              className="rounded-full border border-cream/40 px-7 py-4 font-semibold backdrop-blur transition hover:bg-cream/10"
            >
              Recibe toda la información gratis
            </Link>
          </div>
          <ul className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/20 pt-8 text-sm sm:grid-cols-4">
            {[
              ["Máx. 16", "jugadores por retiro"],
              ["4★", "hotel en primera línea"],
              ["1 h", "en tren desde Barcelona"],
              ["Entrenadores", "titulados"],
            ].map(([k, v]) => (
              <li key={v}>
                <span className="block font-display text-2xl">{k}</span>
                <span className="text-cream/70">{v}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Por qué Dink Abroad"
              title={
                <>
                  El viaje de pickleball del que <em className="font-normal">seguirás</em> hablando la próxima
                  temporada
                </>
              }
              intro="Hemos reunido todo lo que a los jugadores les encanta de un buen fin de semana de club (buenos entrenamientos, partidos competidos y nuevos amigos) y lo hemos llevado al Mediterráneo. Nosotros nos ocupamos de las pistas, los entrenadores, el hotel y los traslados. Tú solo trae tu pala."
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={courts}
              alt="Pistas de pickleball al aire libre con superficie azul y redes bajo un cielo soleado"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -left-4 top-10 rotate-[-4deg] rounded-2xl bg-ball px-5 py-4 text-ink shadow-xl sm:-left-10">
              <p className="font-display text-3xl leading-none">Costa Daurada</p>
              <p className="mt-1 text-xs font-semibold tracking-wide uppercase">La costa dorada de Cataluña</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Retreats */}
      <section id="retreats" className="scroll-mt-10 bg-sand py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Elige tu retiro"
            title="Dos formas de jugar al pickleball en Barcelona"
            intro="Tanto si buscas una escapada de fin de semana largo como el viaje de tu vida cruzando el Atlántico, tenemos un retiro Dink Abroad para ti."
            align="center"
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {retreatsEs.map((r) => (
              <RetreatCard key={r.slug} retreat={r} lang="es" />
            ))}
          </div>
        </Container>
      </section>

      <ComaRugaSection lang="es" />
      <HotelSection lang="es" />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-10 py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Conviene saber" title="Preguntas frecuentes" />
          <Faq items={faqs} />
        </Container>
      </section>

      <EnquirySection
        lang="es"
        title="¿Listo para jugar al pickleball junto al mar?"
        intro="Cuéntanos un poco sobre ti y te enviaremos personalmente el programa completo, las fechas, los precios y la disponibilidad en menos de 24 horas."
        defaultPhoneCode="+34"
      />
    </>
  );
}
