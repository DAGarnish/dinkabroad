export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-display text-xl [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden="true"
              className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-base transition group-open:rotate-45 group-open:bg-ink group-open:text-cream"
            >
              +
            </span>
          </summary>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
