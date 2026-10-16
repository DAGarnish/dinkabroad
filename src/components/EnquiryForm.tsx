"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";

type Props = {
  defaultRetreat?: "Local Dink" | "Long-Haul Lob" | "";
  defaultPhoneCode?: string;
};

const phoneCodes = [
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+353", label: "🇮🇪 +353" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+31", label: "🇳🇱 +31" },
  { code: "+32", label: "🇧🇪 +32" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+46", label: "🇸🇪 +46" },
  { code: "+45", label: "🇩🇰 +45" },
  { code: "+61", label: "🇦🇺 +61" },
];

const input =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-stone/70 outline-none transition focus:border-sea focus:ring-4 focus:ring-sea/15";

const initialState: EnquiryState = { status: "idle" };

export function EnquiryForm({ defaultRetreat = "", defaultPhoneCode = "+44" }: Props) {
  const [state, action, pending] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-line sm:p-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-ball text-2xl">✓</div>
        <p className="mt-5 font-display text-2xl">{state.message ?? "Thanks, we'll be in touch."}</p>
        <p className="mt-2 text-sm text-stone">Keep an eye on your inbox (and your spam folder, just in case).</p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-line sm:p-8" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">First name</span>
          <input name="firstName" required autoComplete="given-name" placeholder="First name" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Last name</span>
          <input name="lastName" autoComplete="family-name" placeholder="Last name" className={input} />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Email address</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email address" className={input} />
        </label>
        <div className="flex gap-2 sm:col-span-2">
          <label className="block w-32 shrink-0">
            <span className="sr-only">Country code</span>
            <select name="phoneCode" defaultValue={defaultPhoneCode} className={input}>
              {phoneCodes.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block flex-1">
            <span className="sr-only">Phone number</span>
            <input name="phone" type="tel" autoComplete="tel-national" placeholder="Phone number" className={input} />
          </label>
        </div>
        <label className="block">
          <span className="sr-only">Retreat</span>
          <select name="retreat" defaultValue={defaultRetreat} className={input}>
            <option value="">Which retreat?</option>
            <option>Local Dink</option>
            <option>Long-Haul Lob</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Playing level</span>
          <select name="level" defaultValue="" className={input}>
            <option value="">Your level</option>
            <option>New to pickleball</option>
            <option>Beginner (2.0–2.5)</option>
            <option>Intermediate (3.0–3.5)</option>
            <option>Advanced (4.0+)</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Number of travellers</span>
          <select name="travellers" defaultValue="" className={input}>
            <option value="">How many of you?</option>
            <option>Just me</option>
            <option>2 of us</option>
            <option>3–4 of us</option>
            <option>5+ (group or club)</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Anything else?</span>
          <textarea name="message" rows={3} placeholder="Anything we should know? (optional)" className={input} />
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
        {pending ? "Sending…" : "Send me all the info, free"}
      </button>
      <p className="mt-3 text-center text-xs text-stone">🔒 No commitment · no spam · your details stay with us</p>
    </form>
  );
}
