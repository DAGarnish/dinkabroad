"use client";

import { useActionState, useEffect, useState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { type Lang, type RetreatChoice, ui } from "@/lib/i18n";
import { StartDatePicker } from "./StartDatePicker";

type Props = {
  lang: Lang;
  defaultRetreat?: RetreatChoice | "";
  defaultPhoneCode?: string;
};

const phoneCodes = [
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+353", label: "🇮🇪 +353" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+31", label: "🇳🇱 +31" },
  { code: "+32", label: "🇧🇪 +32" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+43", label: "🇦🇹 +43" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+41", label: "🇨🇭 +41" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+46", label: "🇸🇪 +46" },
  { code: "+45", label: "🇩🇰 +45" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+52", label: "🇲🇽 +52" },
  { code: "+54", label: "🇦🇷 +54" },
  { code: "+57", label: "🇨🇴 +57" },
];

const input =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-stone/70 outline-none transition focus:border-sea focus:ring-4 focus:ring-sea/15";

const initialState: EnquiryState = { status: "idle" };

export function EnquiryForm({ lang, defaultRetreat = "", defaultPhoneCode = "+44" }: Props) {
  const t = ui(lang).form;
  const [state, action, pending] = useActionState(submitEnquiry, initialState);
  // The success state we've already moved on from, so the empty form shows again.
  const [dismissed, setDismissed] = useState<EnquiryState | null>(null);

  useEffect(() => {
    if (state.status !== "success") return;
    const timer = setTimeout(() => setDismissed(state), 5000);
    return () => clearTimeout(timer);
  }, [state]);

  if (state.status === "success" && dismissed !== state) {
    return (
      <>
        <div role="status" className="rounded-3xl bg-white p-8 text-center text-ink shadow-xl ring-1 ring-line sm:p-12">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-ball text-2xl">✓</div>
          <p className="mt-5 font-display text-2xl">{state.message ?? t.thanksFallback}</p>
          <p className="mt-2 text-sm text-stone">{t.inbox}</p>
        </div>
        <div
          role="alert"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-sm animate-rise items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-sm font-medium text-white shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ball text-ink">✓</span>
          {t.toast}
        </div>
      </>
    );
  }

  return (
    <form action={action} className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-line sm:p-8" noValidate={false}>
      <input type="hidden" name="lang" value={lang} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">{t.firstName}</span>
          <input name="firstName" required autoComplete="given-name" placeholder={t.firstName} className={input} />
        </label>
        <label className="block">
          <span className="sr-only">{t.lastName}</span>
          <input name="lastName" autoComplete="family-name" placeholder={t.lastName} className={input} />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">{t.email}</span>
          <input name="email" type="email" required autoComplete="email" placeholder={t.email} className={input} />
        </label>
        <div className="flex gap-2 sm:col-span-2">
          <label className="block w-32 shrink-0">
            <span className="sr-only">{t.countryCode}</span>
            <select name="phoneCode" defaultValue={defaultPhoneCode} className={input}>
              {phoneCodes.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block flex-1">
            <span className="sr-only">{t.phone}</span>
            <input name="phone" type="tel" autoComplete="tel-national" placeholder={t.phone} className={input} />
          </label>
        </div>
        <label className="block">
          <span className="sr-only">{t.retreat}</span>
          <select name="retreat" defaultValue={defaultRetreat} className={input}>
            <option value="">{t.whichRetreat}</option>
            <option>Local Dink</option>
            <option>Long-Haul Lob</option>
            <option>{t.notSure}</option>
          </select>
        </label>
        <label className="block">
          <span className="sr-only">{t.level}</span>
          <select name="level" defaultValue="" className={input}>
            <option value="">{t.yourLevel}</option>
            {t.levels.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">{t.people}</span>
          <select name="travellers" defaultValue="" className={input}>
            <option value="">{t.howMany}</option>
            {t.groupSizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </label>
        <StartDatePicker
          locale={ui(lang).fx.dateLocale}
          labels={{
            label: t.startDates,
            help: t.startDatesHelp,
            any: t.startDatesAny,
            preferred: t.startDatesPreferred,
            clear: t.startDatesClear,
            booked: t.startDatesBooked,
          }}
        />
        <label className="block sm:col-span-2">
          <span className="sr-only">{t.anythingElse}</span>
          <textarea name="message" rows={3} placeholder={t.message} className={input} />
        </label>
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <input name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      {state.status === "error" && (
        <p role="alert" className="mt-4 text-sm font-medium text-terracotta-dark">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-full bg-terracotta px-6 py-4 text-base font-semibold text-white shadow-lg shadow-terracotta/25 transition hover:bg-terracotta-dark disabled:opacity-60"
      >
        {pending ? t.sending : t.submit}
      </button>
      <p className="mt-3 text-center text-xs text-stone">{t.smallPrint}</p>
    </form>
  );
}
