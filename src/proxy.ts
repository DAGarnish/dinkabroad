import { type NextRequest, NextResponse } from "next/server";

// Visitors from the USA see the English homepage with prices in dollars instead of euros.
// Vercel sets the visitor's country on every request.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/home-usd") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }
  if (request.headers.get("x-vercel-ip-country") === "US") {
    return NextResponse.rewrite(new URL("/home-usd", request.url));
  }
}

export const config = {
  matcher: ["/", "/home-usd"],
};
