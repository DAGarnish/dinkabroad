"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Trips start on a Friday in spring (March–June) or autumn (September–November).
const seasonMonths = new Set([2, 3, 4, 5, 8, 9, 10]);
const doubleTapMs = 350;

// Every season Friday from tomorrow to a year ahead, as UTC dates so server and browser agree.
function seasonFridays() {
  const now = new Date();
  const day = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  const end = new Date(day);
  end.setUTCFullYear(end.getUTCFullYear() + 1);
  day.setUTCDate(day.getUTCDate() + ((5 - day.getUTCDay() + 7) % 7));
  const fridays: Date[] = [];
  for (; day < end; day.setUTCDate(day.getUTCDate() + 7)) {
    if (seasonMonths.has(day.getUTCMonth())) fridays.push(new Date(day));
  }
  return fridays;
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

type Labels = { label: string; help: string; any: string; preferred: string; clear: string };

/**
 * Tap a Friday to mark it as possible; double-tap to add it to the ranked favourites (1, 2, 3…).
 * Tapping a marked date again clears it. The choice is sent as a readable `startDates` field.
 */
export function StartDatePicker({ locale, labels }: { locale: string; labels: Labels }) {
  // Worked out in the browser after mount: the page itself is prerendered, so dates from build time would go stale.
  const [fridays, setFridays] = useState<Date[]>([]);
  useEffect(() => setFridays(seasonFridays()), []);
  const [possible, setPossible] = useState<string[]>([]);
  const [ranked, setRanked] = useState<string[]>([]);
  const lastTap = useRef<{ date: string; at: number } | null>(null);

  const months = useMemo(() => {
    const groups = new Map<string, Date[]>();
    for (const d of fridays) {
      const key = iso(d).slice(0, 7);
      groups.set(key, [...(groups.get(key) ?? []), d]);
    }
    return [...groups.values()];
  }, [fridays]);

  function tap(date: string) {
    const now = Date.now();
    const isDouble = lastTap.current?.date === date && now - lastTap.current.at < doubleTapMs;
    lastTap.current = isDouble ? null : { date, at: now };
    if (isDouble) {
      // The first tap of the pair toggled the date; a double tap makes it the next favourite.
      setPossible((p) => p.filter((d) => d !== date));
      setRanked((r) => [...r.filter((d) => d !== date), date]);
    } else if (possible.includes(date) || ranked.includes(date)) {
      setPossible((p) => p.filter((d) => d !== date));
      setRanked((r) => r.filter((d) => d !== date));
    } else {
      setPossible((p) => [...p, date]);
    }
  }

  const long = (date: string) =>
    new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  const summary = [
    ...ranked.map((d, i) => `${i + 1}. ${long(d)}`),
    ...(possible.length ? [`Also possible: ${[...possible].sort().map(long).join("; ")}`] : []),
  ].join("\n");

  return (
    <fieldset className="sm:col-span-2">
      <legend className="text-sm font-semibold text-ink">{labels.label}</legend>
      <p className="mt-1 text-xs leading-relaxed text-stone">{labels.help}</p>
      <input type="hidden" name="startDates" value={summary} />
      <div className="mt-3 max-h-64 space-y-3 overflow-y-auto rounded-xl border border-line p-3">
        {months.map((days) => (
          <div key={iso(days[0])}>
            <p className="text-xs font-semibold tracking-wide text-stone uppercase">
              {days[0].toLocaleDateString(locale, { month: "long", year: "numeric", timeZone: "UTC" })}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {days.map((d) => {
                const date = iso(d);
                const rank = ranked.indexOf(date) + 1;
                const ok = possible.includes(date);
                return (
                  <button
                    key={date}
                    type="button"
                    onClick={() => tap(date)}
                    aria-pressed={rank > 0 || ok}
                    aria-label={`${d.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" })}${
                      rank ? ` · ${labels.preferred} ${rank}` : ok ? ` · ${labels.any}` : ""
                    }`}
                    className={`relative min-w-11 touch-manipulation rounded-lg border px-2.5 py-1.5 text-sm font-medium transition select-none ${
                      rank
                        ? "border-terracotta bg-terracotta text-white"
                        : ok
                          ? "border-sea bg-sea text-white"
                          : "border-line bg-white text-ink hover:border-sea"
                    }`}
                  >
                    {d.getUTCDate()}
                    {rank > 0 && (
                      <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-ball text-[0.65rem] font-bold text-ink">
                        {rank}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone">
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-sm bg-sea" /> {labels.any}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-sm bg-terracotta" /> {labels.preferred} 1, 2, 3…
        </span>
        {(possible.length > 0 || ranked.length > 0) && (
          <button
            type="button"
            onClick={() => {
              setPossible([]);
              setRanked([]);
            }}
            className="ml-auto underline underline-offset-2 hover:text-ink"
          >
            {labels.clear}
          </button>
        )}
      </div>
    </fieldset>
  );
}
