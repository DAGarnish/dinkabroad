import { type NextRequest, NextResponse } from "next/server";

// The English pages come in two spellings and three currencies, all prebuilt and
// served at the same public URL:
// - Spelling: British English when the browser prefers en-GB, US English for
//   everyone else (internal folders /uk and /us). Browser language rather than
//   IP, as UK players browsing from abroad keep their language setting.
// - Currency: pounds for UK visitors and dollars for US visitors by IP, euros for
//   everyone else (internal folders /gbp and /usd, under the spelling folder).
const currencyByCountry: Record<string, string> = { GB: "gbp", US: "usd" };

// English pages, and whether they have currency versions.
const englishPages: Record<string, boolean> = {
  "/": true,
  "/pickleball-holiday-barcelona": true,
  "/pickleball-vacation-barcelona": true,
  "/photo-credits": false,
};

function spellingFor(acceptLanguage: string | null): "uk" | "us" {
  if (!acceptLanguage) return "us";
  const regionalEnglish = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [tag, ...options] = part.trim().toLowerCase().split(";");
      const q = options.map((o) => o.trim()).find((o) => o.startsWith("q="));
      return { tag: tag.trim(), q: q ? Number(q.slice(2)) || 0 : 1, index };
    })
    .filter(({ tag }) => tag.startsWith("en-"))
    .sort((a, b) => b.q - a.q || a.index - b.index)[0];
  return regionalEnglish?.tag === "en-gb" ? "uk" : "us";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The spelling and currency versions are internal; send direct visits to the real address.
  const internal = pathname.match(/^(?:\/(?:uk|us))?(?:\/(?:gbp|usd))?(\/.*)?$/);
  if (internal && internal[0] !== (internal[1] ?? "")) {
    return NextResponse.redirect(new URL(internal[1] ?? "/", request.url), 308);
  }

  if (!(pathname in englishPages)) return;

  const spelling = spellingFor(request.headers.get("accept-language"));
  const currency = englishPages[pathname]
    ? currencyByCountry[request.headers.get("x-vercel-ip-country") ?? ""]
    : undefined;
  const target = `/${spelling}${currency ? `/${currency}` : ""}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(new URL(target, request.url));
}

export const config = {
  matcher: [
    "/",
    "/pickleball-holiday-barcelona",
    "/pickleball-vacation-barcelona",
    "/photo-credits",
    "/uk/:path*",
    "/us/:path*",
    "/gbp/:path*",
    "/usd/:path*",
  ],
};
