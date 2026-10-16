import { type Currency, getFxRates } from "@/lib/fx";
import { type Lang, language, ui } from "@/lib/i18n";

const currencies: { code: Currency; locale: string }[] = [
  { code: "EUR", locale: "en-IE" },
  { code: "GBP", locale: "en-GB" },
  { code: "USD", locale: "en-US" },
];

function money(amount: number, code: Currency, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
    // es-ES would otherwise print "GBP"; "US$" / "$US" are the clear Spanish / French forms for dollars.
    currencyDisplay: code === "GBP" ? "narrowSymbol" : "symbol",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

/**
 * A small line under a price with its value in the other two of EUR / GBP / USD,
 * e.g. "≈ €4,093 · £3,461 · rates Oct 16".
 */
export async function ConvertedPrices({
  amount,
  currency,
  lang,
  className = "",
}: {
  amount: number;
  currency: Currency;
  lang: Lang;
  className?: string;
}) {
  const { rates, updated } = await getFxRates(currency);
  const t = ui(lang).fx;
  const others = currencies.filter((c) => c.code !== currency);
  const date = updated
    ? new Date(updated).toLocaleDateString(t.dateLocale, { day: "numeric", month: "short", timeZone: "UTC" })
    : null;

  return (
    <span className={`block font-sans text-xs font-normal tracking-normal ${className}`}>
      ≈{" "}
      {others
        .map((c) => money(amount * rates[c.code], c.code, language(lang).numberLocale ?? c.locale))
        .join(" · ")}
      <span className="opacity-75"> · {date ? `${t.rates} ${date}` : t.approx}</span>
    </span>
  );
}
