import { cacheLife } from "next/cache";

export type Currency = "EUR" | "GBP" | "USD";

// Approximate EUR-based rates, used only if the live feed is unreachable.
const FALLBACK_PER_EUR: Record<Currency, number> = { EUR: 1, GBP: 0.86, USD: 1.16 };

export type FxRates = { rates: Record<Currency, number>; updated: string | null };

// Same free, keyless feed as the Garnish Music site. It updates once a day, so
// the result is cached and refreshed in the background about once an hour; the
// converted prices stay part of the prerendered page.
export async function getFxRates(base: Currency): Promise<FxRates> {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    const data = await res.json();
    if (data?.rates) {
      return {
        rates: data.rates,
        updated: data.time_last_update_unix ? new Date(data.time_last_update_unix * 1000).toISOString() : null,
      };
    }
  } catch {
    // fall through to the approximate rates
  }
  const rates = Object.fromEntries(
    Object.entries(FALLBACK_PER_EUR).map(([code, perEur]) => [code, perEur / FALLBACK_PER_EUR[base]]),
  ) as Record<Currency, number>;
  return { rates, updated: null };
}
