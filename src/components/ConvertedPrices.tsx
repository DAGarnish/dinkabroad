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
 * e.g. "≈ £928 · ≈ $1,237 · rates 17 Oct". When the price above is shown converted
 * into `shown`, the line lists the set euro price exactly, the remaining currency,
 * and a note that the converted price moves with the exchange rate.
 */
export async function ConvertedPrices({
  amount,
  currency,
  lang,
  shown = currency,
  className = "",
}: {
  amount: number;
  currency: Currency;
  lang: Lang;
  shown?: Currency;
  className?: string;
}) {
  const { rates, updated } = await getFxRates(currency);
  const t = ui(lang).fx;
  const others = currencies.filter((c) => c.code !== shown);
  const date = updated
    ? new Date(updated).toLocaleDateString(t.dateLocale, { day: "numeric", month: "short", timeZone: "UTC" })
    : null;

  return (
    <span className={`block font-sans text-xs font-normal tracking-normal ${className}`}>
      {others
        .map((c) => {
          const locale = language(lang).numberLocale ?? c.locale;
          // The set price is exact; only converted amounts are approximate.
          return c.code === currency
            ? money(amount, c.code, locale)
            : `≈ ${money(amount * rates[c.code], c.code, locale)}`;
        })
        .join(" · ")}
      <span className="opacity-75"> · {date ? `${t.rates} ${date}` : t.approx}</span>
      {shown !== currency && <span className="block opacity-75">{t.converted}</span>}
    </span>
  );
}
