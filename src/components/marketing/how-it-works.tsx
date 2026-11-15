import { Reveal } from "./reveal";
import { getMessages } from "@/i18n";

export function HowItWorks() {
  const t = getMessages().landing.how;
  return (
    <section id="comment" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <h2 className="mb-12 text-center font-display text-h2">{t.title}</h2>
      <ol className="grid gap-6 md:grid-cols-3">
        {t.steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.06} className="h-full rounded-lg border bg-surface p-6">
              <span className="grid size-9 place-items-center rounded-full bg-ocean-gradient text-sm font-semibold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
