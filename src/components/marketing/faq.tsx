import { ChevronDown } from "lucide-react";
import { getMessages } from "@/i18n";

export function Faq() {
  const t = getMessages().landing.faq;
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <h2 className="mb-10 text-center font-display text-h2">{t.title}</h2>
      <div className="divide-y rounded-lg border bg-surface">
        {t.items.map((it) => (
          <details key={it.q} className="group px-5 py-4">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {it.q}
              <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden />
            </summary>
            <p className="pb-1 pt-2 text-muted">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
