import { type NextRequest, NextResponse } from "next/server";

// The English pages show prices in pounds to UK visitors and in dollars to US visitors
// (everyone else sees euros). Vercel sets the visitor's country on every request.
const currencyByCountry: Record<string, string> = { GB: "gbp", US: "usd" };

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The currency versions are internal; send direct visits to the real address.
  const internal = pathname.match(/^\/(gbp|usd)(\/.*)?$/);
  if (internal) {
    return NextResponse.redirect(new URL(internal[2] ?? "/", request.url), 308);
  }

  const currency = currencyByCountry[request.headers.get("x-vercel-ip-country") ?? ""];
  if (currency) {
    return NextResponse.rewrite(new URL(`/${currency}${pathname === "/" ? "" : pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/pickleball-holiday-barcelona",
    "/pickleball-vacation-barcelona",
    "/gbp/:path*",
    "/usd/:path*",
  ],
};
