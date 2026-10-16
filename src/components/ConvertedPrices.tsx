import { type Currency, getFxRates } from "@/lib/fx";

const currencies: { code: Currency; locale: string }[] = [
  { code: "EUR", locale: "en-IE" },
  { code: "GBP", locale: "en-GB" },
  { code: "USD", locale: "en-US" },
];

function money(amount: number, code: Currency, locale: string) {
  return new Intl.NumberFormat(locale, { style: "currency", currency: code, maximumFractionDigits: 0 }).format(
    Math.round(amount),
  );
}

/**
 * A small line under a price with its value in the other two of EUR / GBP / USD,
 * e.g. "≈ €4,093 · £3,461 · rates Oct 16".
 */
export async function ConvertedPrices({
  amount,
  currency,
  className = "",
}: {
  amount: number;
  currency: Currency;
  className?: string;
}) {
  const { rates, updated } = await getFxRates(currency);
  const others = currencies.filter((c) => c.code !== currency);
  const dateLocale = currency === "USD" ? "en-US" : "en-GB";
  const date = updated
    ? new Date(updated).toLocaleDateString(dateLocale, { day: "numeric", month: "short", timeZone: "UTC" })
    : null;

  return (
    <span className={`block font-sans text-xs font-normal tracking-normal ${className}`}>
      ≈ {others.map((c) => money(amount * rates[c.code], c.code, c.locale)).join(" · ")}
      <span className="opacity-75"> · {date ? `rates ${date}` : "approx. rates"}</span>
    </span>
  );
}
