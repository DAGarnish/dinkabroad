export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 shrink-0">
        <circle cx="16" cy="16" r="15" fill="#dcef5b" />
        <g fill="#0e2a2f">
          <circle cx="12" cy="11" r="1.6" />
          <circle cx="20" cy="11" r="1.6" />
          <circle cx="16" cy="16" r="1.6" />
          <circle cx="10.5" cy="19" r="1.6" />
          <circle cx="21.5" cy="19" r="1.6" />
          <circle cx="16" cy="23" r="1.6" />
        </g>
      </svg>
      <span className="font-display text-[1.35rem] leading-none font-medium tracking-tight">
        Dink <span className="italic font-normal">Abroad</span>
      </span>
    </span>
  );
}
