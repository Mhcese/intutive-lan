import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "./reveal";
import { getMessages } from "@/i18n";

export function WhyNotChatGPT() {
  const t = getMessages().landing.why;
  return (
    <section id="pourquoi" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="font-display text-h2">{t.title}</h2>
        <p className="mt-3 text-muted">{t.subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.cards.map((c, i) => (
          <Reveal key={c.problem} delay={i * 0.05}>
            <Card className="h-full space-y-3">
              <p className="flex items-center gap-2 text-muted">
                <X className="size-4 shrink-0 text-danger" aria-hidden />
                <span className="line-through decoration-muted/50">{c.problem}</span>
              </p>
              <p className="flex items-start gap-2">
                <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden />
                <span>{c.answer}</span>
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
