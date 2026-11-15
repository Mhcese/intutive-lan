import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getMessages } from "@/i18n";

export function Pricing() {
  const t = getMessages().landing.pricing;
  const plans = [
    { ...t.free, tone: "default" as const, featured: false },
    { ...t.pro, tone: "ocean" as const, featured: true },
    { ...t.founder, tone: "default" as const, featured: false },
  ];
  return (
    <section id="tarifs" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="font-display text-h2">{t.title}</h2>
        <p className="mt-3 text-muted">{t.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} tone={p.tone} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{p.name}</h3>
              {"badge" in p && p.badge && <Badge variant="ocean">{p.badge}</Badge>}
            </div>
            <p className="font-display text-4xl">
              {p.price}<span className="font-sans text-base text-muted">{p.period}</span>
            </p>
            <ul className="flex-1 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden />{f}
                </li>
              ))}
            </ul>
            <Button asChild variant={p.featured ? "primary" : "secondary"}>
              <a href="#liste-attente">{p.cta}</a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
