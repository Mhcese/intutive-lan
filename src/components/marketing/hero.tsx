import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n";

export function Hero() {
  const t = getMessages().landing.hero;
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[420px] max-w-3xl rounded-full bg-ocean-gradient opacity-20 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <Badge variant="ocean" className="mb-6">{t.badge}</Badge>
        <h1 className="font-display text-h1">
          {t.title_a} <span className="text-ocean-gradient">{t.title_b}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">{t.subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#liste-attente">{t.cta} <ArrowRight /></a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <a href="#demo">{t.cta2}</a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">{t.note}</p>
      </div>
    </section>
  );
}
