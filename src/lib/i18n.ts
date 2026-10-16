// Copy shared by every page (header, footer, the common sections and the enquiry
// form). Page-specific copy lives in each page. en-US only overrides the few
// strings that differ from British English.

export type Lang = "en-GB" | "en-US" | "es";

export type RetreatChoice = "Local Dink" | "Long-Haul Lob";

const en = {
  home: "/",
  homeLabel: "Home",
  nav: [
    { href: "/pickleball-holiday-barcelona", label: "Local Dink" },
    { href: "/pickleball-vacation-barcelona", label: "Long-Haul Lob" },
    { href: "/#coma-ruga", label: "Coma-ruga" },
    { href: "/#hotel", label: "Luxury hotel" },
    { href: "/#faq", label: "FAQ" },
  ],
  headerCta: "Get the info",
  openMenu: "Open menu",
  homeAria: "Dink Abroad home",
  footer: {
    about:
      "Small-group pickleball retreats in Coma-ruga on the Costa Daurada, one hour by scenic train from Barcelona.",
    retreats: "Retreats",
    links: [
      { href: "/pickleball-holiday-barcelona", label: "Local Dink: pickleball holiday (UK & Europe)" },
      { href: "/pickleball-vacation-barcelona", label: "Long-Haul Lob: pickleball vacation (USA & Canada)" },
    ],
    baseCamp: "Base camp",
    country: "Spain",
    rights: "© 2026 Dink Abroad. All rights reserved.",
    credits: "Photo credits",
  },
  switcher: { label: "Español", hreflang: "es", aria: "Ver esta página en español" },
  hero: {
    completeFrom: "Complete package from",
    cta: "Get all the info free",
    seeIncluded: "See what’s included",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "What does it cost?",
    included: "Included",
    notIncluded: "Not included:",
    cta: "Yes, send me all the info",
  },
  card: { from: "From", pp: "p.p.", explore: "Explore the trip →" },
  fx: { rates: "rates", approx: "approx. rates", dateLocale: "en-GB" },
  comaRuga: {
    imageAlt: "The bay at Coma-ruga with calm turquoise water and the town behind the beach",
    gettingHere: "Getting here",
    depart: "depart",
    alongCoast: "Along the Garraf coast",
    duration: "≈ 1 hr, direct",
    arrive: "arrive",
    eyebrow: "The destination",
    titleBefore: "Coma-ruga: Barcelona’s ",
    titleEm: "quieter",
    titleAfter: " coast",
    intro:
      "Coma-ruga sits on the Costa Daurada (the Golden Coast), with wide sandy beaches, palm-lined promenades and a relaxed Catalan pace. You get the sun and sea without the city crowds, and Barcelona is still close enough for a day out.",
    facts: [
      ["1 hour", "Direct, scenic train from central Barcelona, hugging the coastline"],
      ["Beachfront", "Our hotel is steps from the sand on Coma-ruga beach"],
      ["30 km", "To Roman Tarragona, a UNESCO World Heritage city"],
      ["Penedès", "Catalonia's cava country is right on the doorstep"],
    ],
  },
  hotel: {
    eyebrow: "Your base",
    titleBefore: "Estival Maramar, a beachfront ",
    titleEm: "4★",
    titleAfter: " hotel",
    intro:
      "A modern, beautifully kept hotel on the seafront at Coma-ruga, on the luxury end of 4-star, rated “Superb” by more than 900 guests on Booking.com. After a morning on court, the rooftop pool is calling.",
    imageAlt: "Hotels and palm trees along the seafront at Coma-ruga beach",
    features: [
      ["Right on the beach", "Step straight from the hotel onto the sand of Coma-ruga beach."],
      ["Rooftop pool", "An adults-only rooftop pool and lounge with views over the Mediterranean."],
      ["Spa & wellness", "Sauna, steam room, hydrotherapy and massages for tired pickleball legs."],
      ["Two restaurants", "A Mediterranean buffet and an à la carte restaurant for dinner."],
      ["Balcony rooms", "Bright, spacious, air-conditioned rooms, many with sea views."],
      ["Fitness centre", "Warm up, cool down or squeeze in an extra session."],
    ],
  },
  enquiry: {
    eyebrow: "Limited spots · max 20 players",
    bullets: ["Full programme, dates and pricing", "Personal reply within 24 hours", "No commitment, no spam"],
  },
  form: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email address",
    countryCode: "Country code",
    phone: "Phone number",
    retreat: "Retreat",
    whichRetreat: "Which retreat?",
    notSure: "Not sure yet",
    level: "Playing level",
    yourLevel: "Your level",
    levels: ["New to pickleball", "Beginner (2.0–2.5)", "Intermediate (3.0–3.5)", "Advanced (4.0+)"],
    people: "Number of people",
    howMany: "How many of you?",
    groupSizes: ["Just me", "2 of us", "3–4 of us", "5+ (group or club)"],
    anythingElse: "Anything else?",
    message: "Anything we should know? (optional)",
    sending: "Sending…",
    submit: "Send me all the info, free",
    smallPrint: "🔒 No commitment · no spam · your details stay with us",
    thanksFallback: "Thanks, we'll be in touch.",
    inbox: "Keep an eye on your inbox (and your spam folder, just in case).",
    toast: "Your enquiry has been sent. We'll reply soon!",
  },
};

export type Ui = typeof en;

const enUS: Ui = {
  ...en,
  hotel: {
    ...en.hotel,
    features: en.hotel.features.map(([t, d]) => [t.replace("centre", "center"), d]),
  },
  enquiry: { ...en.enquiry, bullets: ["Full program, dates and pricing", ...en.enquiry.bullets.slice(1)] },
  fx: { ...en.fx, dateLocale: "en-US" },
};

const es: Ui = {
  home: "/es",
  homeLabel: "Inicio",
  nav: [
    { href: "/es/vacaciones-pickleball-barcelona", label: "Local Dink" },
    { href: "/es/viaje-pickleball-barcelona", label: "Long-Haul Lob" },
    { href: "/es#coma-ruga", label: "Coma-ruga" },
    { href: "/es#hotel", label: "Hotel de lujo" },
    { href: "/es#faq", label: "Preguntas" },
  ],
  headerCta: "Pide información",
  openMenu: "Abrir menú",
  homeAria: "Inicio de Dink Abroad",
  footer: {
    about:
      "Retiros de pickleball en grupos reducidos en Coma-ruga, en la Costa Daurada, a una hora de Barcelona en un tren con vistas al mar.",
    retreats: "Retiros",
    links: [
      { href: "/es/vacaciones-pickleball-barcelona", label: "Local Dink: vacaciones de pickleball (5 días)" },
      { href: "/es/viaje-pickleball-barcelona", label: "Long-Haul Lob: viaje de pickleball (9 días)" },
    ],
    baseCamp: "Nuestra base",
    country: "España",
    rights: "© 2026 Dink Abroad. Todos los derechos reservados.",
    credits: "Créditos de las fotos",
  },
  switcher: { label: "English", hreflang: "en", aria: "View this page in English" },
  hero: {
    completeFrom: "Paquete completo desde",
    cta: "Recibe toda la información gratis",
    seeIncluded: "Ver qué incluye",
  },
  pricing: {
    eyebrow: "Precio",
    title: "¿Cuánto cuesta?",
    included: "Incluye",
    notIncluded: "No incluye:",
    cta: "Sí, quiero toda la información",
  },
  card: { from: "Desde", pp: "p.p.", explore: "Ver el viaje →" },
  fx: { rates: "cambio del", approx: "cambio aproximado", dateLocale: "es-ES" },
  comaRuga: {
    imageAlt: "La bahía de Coma-ruga con el agua turquesa en calma y el pueblo detrás de la playa",
    gettingHere: "Cómo llegar",
    depart: "salida",
    alongCoast: "Por la costa del Garraf",
    duration: "≈ 1 h, directo",
    arrive: "llegada",
    eyebrow: "El destino",
    titleBefore: "Coma-ruga: la costa ",
    titleEm: "tranquila",
    titleAfter: " de Barcelona",
    intro:
      "Coma-ruga está en la Costa Daurada, con amplias playas de arena, paseos con palmeras y el ritmo relajado de Cataluña. Tienes sol y mar sin las aglomeraciones de la ciudad, y Barcelona sigue estando lo bastante cerca para pasar el día.",
    facts: [
      ["1 hora", "En tren directo desde el centro de Barcelona, bordeando la costa"],
      ["Primera línea", "Nuestro hotel está a pocos pasos de la arena de la playa de Coma-ruga"],
      ["30 km", "Hasta la Tarragona romana, Patrimonio de la Humanidad de la UNESCO"],
      ["Penedès", "La tierra del cava, a un paso"],
    ],
  },
  hotel: {
    eyebrow: "Tu base",
    titleBefore: "Estival Maramar, un hotel ",
    titleEm: "4★",
    titleAfter: " en primera línea de playa",
    intro:
      "Un hotel moderno y muy cuidado en el paseo marítimo de Coma-ruga, de la gama más alta de los 4 estrellas, valorado como «Fantástico» por más de 900 huéspedes en Booking.com. Después de una mañana en la pista, la piscina de la azotea te espera.",
    imageAlt: "Hoteles y palmeras en el paseo marítimo de la playa de Coma-ruga",
    features: [
      ["En la misma playa", "Sales del hotel directamente a la arena de la playa de Coma-ruga."],
      ["Piscina en la azotea", "Piscina y zona chill-out solo para adultos con vistas al Mediterráneo."],
      ["Spa y bienestar", "Sauna, baño de vapor, hidroterapia y masajes para las piernas cansadas."],
      ["Dos restaurantes", "Un bufé mediterráneo y un restaurante a la carta para la cena."],
      ["Habitaciones con balcón", "Luminosas, amplias y con aire acondicionado; muchas con vistas al mar."],
      ["Gimnasio", "Para calentar, estirar o meter una sesión extra."],
    ],
  },
  enquiry: {
    eyebrow: "Plazas limitadas · máx. 20 jugadores",
    bullets: ["Programa completo, fechas y precios", "Respuesta personal en 24 horas", "Sin compromiso y sin spam"],
  },
  form: {
    firstName: "Nombre",
    lastName: "Apellidos",
    email: "Correo electrónico",
    countryCode: "Prefijo",
    phone: "Teléfono",
    retreat: "Retiro",
    whichRetreat: "¿Qué retiro?",
    notSure: "Aún no lo sé",
    level: "Nivel de juego",
    yourLevel: "Tu nivel",
    levels: ["Nuevo en el pickleball", "Principiante (2.0–2.5)", "Intermedio (3.0–3.5)", "Avanzado (4.0+)"],
    people: "Número de personas",
    howMany: "¿Cuántos sois?",
    groupSizes: ["Solo yo", "2 personas", "3–4 personas", "5+ (grupo o club)"],
    anythingElse: "¿Algo más?",
    message: "¿Algo que debamos saber? (opcional)",
    sending: "Enviando…",
    submit: "Envíame toda la información gratis",
    smallPrint: "🔒 Sin compromiso · sin spam · tus datos no salen de aquí",
    thanksFallback: "Gracias, nos pondremos en contacto.",
    inbox: "Revisa tu bandeja de entrada (y la carpeta de spam, por si acaso).",
    toast: "Hemos recibido tu solicitud. ¡Te responderemos pronto!",
  },
};

const dictionaries: Record<Lang, Ui> = { "en-GB": en, "en-US": enUS, es };

export function ui(lang: Lang): Ui {
  return dictionaries[lang];
}

// Each English page and its Spanish counterpart, for hreflang and the language switcher.
export const pagePairs: { en: string; es: string }[] = [
  { en: "/", es: "/es" },
  { en: "/pickleball-holiday-barcelona", es: "/es/vacaciones-pickleball-barcelona" },
  { en: "/pickleball-vacation-barcelona", es: "/es/viaje-pickleball-barcelona" },
];

export function counterpart(path: string): { en: string; es: string } | undefined {
  return pagePairs.find((p) => p.en === path || p.es === path);
}
