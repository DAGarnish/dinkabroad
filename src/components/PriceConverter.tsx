"use client";

import { useEffect, useRef, useState } from "react";

export type Currency = "EUR" | "GBP" | "USD";

// Same free, keyless feed as the Garnish Music site; it updates once a day,
// so one fetch per base currency is shared by every price on the page.
const rateApi = (base: Currency) => `https://open.er-api.com/v6/latest/${base}`;

// Approximate EUR-based rates, used only if the live fetch fails (offline,
// blocked, rate-limited). Cross rates are derived from these.
const FALLBACK_PER_EUR: Record<Currency, number> = { EUR: 1, GBP: 0.86, USD: 1.16 };

const CURRENCIES: { code: Currency; flag: string; locale: string }[] = [
  { code: "EUR", flag: "🇪🇺", locale: "en-IE" },
  { code: "GBP", flag: "🇬🇧", locale: "en-GB" },
  { code: "USD", flag: "🇺🇸", locale: "en-US" },
];

type Rates = { rates: Record<string, number>; updated: Date | null };

const ratesPromises = new Map<Currency, Promise<Rates>>();

function fallbackRates(base: Currency): Rates {
  const rates = Object.fromEntries(
    CURRENCIES.map((c) => [c.code, FALLBACK_PER_EUR[c.code] / FALLBACK_PER_EUR[base]]),
  );
  return { rates, updated: null };
}

function getRates(base: Currency): Promise<Rates> {
  let promise = ratesPromises.get(base);
  if (!promise) {
    promise = fetch(rateApi(base))
      .then((res) => res.json())
      .then((data) =>
        data?.rates
          ? {
              rates: data.rates as Record<string, number>,
              updated: data.time_last_update_unix ? new Date(data.time_last_update_unix * 1000) : null,
            }
          : fallbackRates(base),
      )
      .catch(() => fallbackRates(base));
    ratesPromises.set(base, promise);
  }
  return promise;
}

function ratesTitle(updated: Date | null) {
  if (!updated) return "Approximate exchange rates";
  return `Latest FX rates ${updated.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" })}`;
}

function money(amount: number, code: string, locale: string) {
  return new Intl.NumberFormat(locale, { style: "currency", currency: code, maximumFractionDigits: 0 }).format(
    Math.round(amount),
  );
}

const fxCursor = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text x='16' y='23' font-size='26' text-anchor='middle'>💱</text></svg>",
)}") 16 16, pointer`;

/**
 * A price with a dotted underline that reveals its value in the other two of
 * EUR / GBP / USD on hover (desktop) or tap (touch; tap elsewhere to close).
 */
export function PriceConverter({
  amount,
  currency,
  children,
  placement = "bottom",
}: {
  amount: number;
  currency: Currency;
  children: React.ReactNode;
  placement?: "top" | "bottom";
}) {
  const [open, setOpen] = useState(false);
  const [rates, setRates] = useState<Rates | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const pointerType = useRef("");
  const others = CURRENCIES.filter((c) => c.code !== currency);

  useEffect(() => {
    if (open && !rates) getRates(currency).then(setRates);
  }, [open, rates, currency]);

  useEffect(() => {
    if (!open) return;
    function close(e: Event) {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("touchstart", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("touchstart", close);
      document.removeEventListener("mousedown", close);
    };
  }, [open]);

  return (
    <span
      ref={ref}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`Show price in ${others.map((c) => c.code).join(" and ")}`}
      className="relative inline-block underline decoration-current/40 decoration-dotted decoration-2 underline-offset-[0.2em]"
      style={{ cursor: fxCursor }}
      // Hover is mouse-only: touch browsers emulate mouseenter right before the
      // click, which would otherwise open and then immediately toggle closed.
      onPointerDown={(e) => (pointerType.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
      onClick={(e) => {
        // Prices can sit inside a card link: a tap should toggle, not navigate.
        e.preventDefault();
        e.stopPropagation();
        setOpen((o) => (pointerType.current === "mouse" ? true : !o));
      }}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          // Left-anchored: every price sits at the left of its container, and the
          // home cards clip overflow, so a centred popup gets cut off on phones.
          className={`absolute left-0 z-40 w-56 max-w-[calc(100vw-2rem)] rounded-2xl bg-cream p-4 font-sans text-sm font-normal tracking-normal text-ink no-underline shadow-2xl ring-1 ring-line ${
            placement === "top" ? "bottom-full mb-3" : "top-full mt-3"
          }`}
        >
          {rates ? (
            <>
              <span className="mb-2 block border-b border-line pb-2 text-[0.7rem] font-semibold tracking-[0.18em] text-terracotta uppercase">
                {ratesTitle(rates.updated)}
              </span>
              <span className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
                {others.map((c) => (
                  <span key={c.code} className="contents">
                    <span className="text-stone">
                      <span aria-hidden="true">{c.flag}</span> {c.code}
                    </span>
                    <span className="text-right font-semibold">
                      {money(amount * (rates.rates[c.code] ?? fallbackRates(currency).rates[c.code]), c.code, c.locale)}
                    </span>
                  </span>
                ))}
              </span>
            </>
          ) : (
            <span className="text-stone">Loading…</span>
          )}
        </span>
      )}
    </span>
  );
}
