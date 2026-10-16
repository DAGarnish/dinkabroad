// Copy shared by every page (header, footer, the common sections and the enquiry
// form). Page-specific copy lives in each page. en-US only overrides the few
// strings that differ from British English.

export type Lang = "en-GB" | "en-US" | "es" | "fr";

// The three language versions of the site (en-GB and en-US are both "en").
export type Site = "en" | "es" | "fr";

export const languages: {
  site: Site;
  label: string;
  short: string;
  htmlLang: string;
  ogLocale: string;
  numberLocale?: string;
}[] = [
  { site: "en", label: "English", short: "EN", htmlLang: "en-GB", ogLocale: "en_GB" },
  { site: "es", label: "Español", short: "ES", htmlLang: "es-ES", ogLocale: "es_ES", numberLocale: "es-ES" },
  { site: "fr", label: "Français", short: "FR", htmlLang: "fr-FR", ogLocale: "fr_FR", numberLocale: "fr-FR" },
];

export function siteOf(lang: Lang): Site {
  return lang === "es" || lang === "fr" ? lang : "en";
}

export function language(lang: Lang) {
  return languages.find((l) => l.site === siteOf(lang))!;
}

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
  switcherAria: "Language",
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
  switcherAria: "Idioma",
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

const fr: Ui = {
  home: "/fr",
  homeLabel: "Accueil",
  nav: [
    { href: "/fr/vacances-pickleball-barcelone", label: "Local Dink" },
    { href: "/fr/voyage-pickleball-barcelone", label: "Long-Haul Lob" },
    { href: "/fr#coma-ruga", label: "Coma-ruga" },
    { href: "/fr#hotel", label: "Hôtel de luxe" },
    { href: "/fr#faq", label: "FAQ" },
  ],
  headerCta: "Infos gratuites",
  openMenu: "Ouvrir le menu",
  homeAria: "Accueil Dink Abroad",
  switcherAria: "Langue",
  footer: {
    about:
      "Séjours de pickleball en petit groupe à Coma-ruga, sur la Costa Daurada, à une heure de Barcelone par un train longeant la mer.",
    retreats: "Séjours",
    links: [
      { href: "/fr/vacances-pickleball-barcelone", label: "Local Dink : vacances pickleball (5 jours)" },
      { href: "/fr/voyage-pickleball-barcelone", label: "Long-Haul Lob : voyage pickleball (9 jours)" },
    ],
    baseCamp: "Notre camp de base",
    country: "Espagne",
    rights: "© 2026 Dink Abroad. Tous droits réservés.",
    credits: "Crédits photos",
  },
  hero: {
    completeFrom: "Forfait complet à partir de",
    cta: "Recevez toutes les infos gratuitement",
    seeIncluded: "Voir ce qui est inclus",
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "Combien ça coûte ?",
    included: "Inclus",
    notIncluded: "Non inclus :",
    cta: "Oui, envoyez-moi toutes les infos",
  },
  card: { from: "À partir de", pp: "/pers.", explore: "Découvrir le séjour →" },
  fx: { rates: "taux du", approx: "taux approximatifs", dateLocale: "fr-FR" },
  comaRuga: {
    imageAlt: "La baie de Coma-ruga, son eau turquoise et calme et la ville derrière la plage",
    gettingHere: "Comment venir",
    depart: "départ",
    alongCoast: "Le long de la côte du Garraf",
    duration: "≈ 1 h, direct",
    arrive: "arrivée",
    eyebrow: "La destination",
    titleBefore: "Coma-ruga : la côte ",
    titleEm: "paisible",
    titleAfter: " de Barcelone",
    intro:
      "Coma-ruga se trouve sur la Costa Daurada (la « Côte dorée »), avec de grandes plages de sable, des promenades bordées de palmiers et le rythme détendu de la Catalogne. Le soleil et la mer sans la foule de la ville, et Barcelone reste assez proche pour une journée d’excursion.",
    facts: [
      ["1 heure", "En train direct depuis le centre de Barcelone, le long du littoral"],
      ["Bord de mer", "Notre hôtel est à quelques pas du sable de la plage de Coma-ruga"],
      ["30 km", "Jusqu’à Tarragone la romaine, classée au patrimoine mondial de l’UNESCO"],
      ["Penedès", "Le pays du cava, juste à côté"],
    ],
  },
  hotel: {
    eyebrow: "Votre camp de base",
    titleBefore: "Estival Maramar, un hôtel ",
    titleEm: "4★",
    titleAfter: " les pieds dans l’eau",
    intro:
      "Un hôtel moderne et soigné sur le front de mer de Coma-ruga, dans le haut de gamme des 4 étoiles, noté « Superbe » par plus de 900 clients sur Booking.com. Après une matinée sur le terrain, la piscine sur le toit vous attend.",
    imageAlt: "Hôtels et palmiers sur le front de mer de la plage de Coma-ruga",
    features: [
      ["Sur la plage", "Vous sortez de l’hôtel directement sur le sable de la plage de Coma-ruga."],
      ["Piscine sur le toit", "Une piscine et un lounge réservés aux adultes, avec vue sur la Méditerranée."],
      ["Spa et bien-être", "Sauna, hammam, hydrothérapie et massages pour les jambes fatiguées."],
      ["Deux restaurants", "Un buffet méditerranéen et un restaurant à la carte pour le dîner."],
      ["Chambres avec balcon", "Lumineuses, spacieuses et climatisées, beaucoup avec vue sur la mer."],
      ["Salle de sport", "Pour s’échauffer, récupérer ou ajouter une séance."],
    ],
  },
  enquiry: {
    eyebrow: "Places limitées · 20 joueurs max.",
    bullets: ["Programme complet, dates et tarifs", "Réponse personnelle sous 24 heures", "Sans engagement, sans spam"],
  },
  form: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse e-mail",
    countryCode: "Indicatif",
    phone: "Téléphone",
    retreat: "Séjour",
    whichRetreat: "Quel séjour ?",
    notSure: "Je ne sais pas encore",
    level: "Niveau de jeu",
    yourLevel: "Votre niveau",
    levels: ["Débutant complet", "Débutant (2.0–2.5)", "Intermédiaire (3.0–3.5)", "Avancé (4.0+)"],
    people: "Nombre de personnes",
    howMany: "Combien serez-vous ?",
    groupSizes: ["Moi seul(e)", "2 personnes", "3–4 personnes", "5+ (groupe ou club)"],
    anythingElse: "Autre chose ?",
    message: "Quelque chose à nous dire ? (facultatif)",
    sending: "Envoi…",
    submit: "Envoyez-moi toutes les infos, gratuitement",
    smallPrint: "🔒 Sans engagement · sans spam · vos données restent chez nous",
    thanksFallback: "Merci, nous revenons vers vous très vite.",
    inbox: "Surveillez votre boîte de réception (et vos spams, au cas où).",
    toast: "Votre demande a bien été envoyée. Nous vous répondons très vite !",
  },
};

const dictionaries: Record<Lang, Ui> = { "en-GB": en, "en-US": enUS, es, fr };

export function ui(lang: Lang): Ui {
  return dictionaries[lang];
}

// Each page in every language, for hreflang, the sitemap and the language switcher.
export type PageSet = Record<Site, string>;

export const pageSets: PageSet[] = [
  { en: "/", es: "/es", fr: "/fr" },
  {
    en: "/pickleball-holiday-barcelona",
    es: "/es/vacaciones-pickleball-barcelona",
    fr: "/fr/vacances-pickleball-barcelone",
  },
  {
    en: "/pickleball-vacation-barcelona",
    es: "/es/viaje-pickleball-barcelona",
    fr: "/fr/voyage-pickleball-barcelone",
  },
];

export function counterpart(path: string): PageSet | undefined {
  return pageSets.find((set) => Object.values(set).includes(path));
}
