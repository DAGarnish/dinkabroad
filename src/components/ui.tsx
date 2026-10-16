import type { ReactNode } from "react";

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.22em] uppercase ${invert ? "text-ball" : "text-terracotta"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow invert={invert}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">{title}</h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${invert ? "text-cream/75" : "text-stone"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`size-5 shrink-0 ${className}`}>
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path d="m6 10.3 2.6 2.5L14 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
