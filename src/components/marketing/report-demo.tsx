"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "./reveal";
import { getMessages } from "@/i18n";

const SCORE = 62;
const R = 44;
const C = 2 * Math.PI * R;

function Gauge() {
  const reduce = useReducedMotion();
  return (
    <div className="relative size-28 shrink-0" role="img" aria-label={`Confiance ${SCORE} sur 100`}>
      <svg viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={R} fill="none" stroke="var(--border)" strokeWidth="8" />
        <motion.circle
          cx="50" cy="50" r={R} fill="none" stroke="var(--ocean)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: reduce ? C * (1 - SCORE / 100) : C }}
          whileInView={{ strokeDashoffset: C * (1 - SCORE / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-2xl font-semibold">{SCORE}</span>
    </div>
  );
}

export function ReportDemo() {
  const t = getMessages().landing.demo;
  return (
    <section id="demo" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-display text-h2">{t.title}</h2>
        <p className="mt-3 text-muted">{t.subtitle}</p>
      </div>
      <Card className="space-y-6 p-5 sm:p-8">
        <p className="font-display text-h3 italic text-muted">{t.question}</p>
        <div className="flex items-center gap-5">
          <Gauge />
          <div>
            <p className="text-sm text-muted">{t.confidence}</p>
            <p className="font-medium">{t.reco_label}</p>
            <p className="mt-1">{t.reco}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {t.models.map((m) => <Badge key={m} variant="ocean">{m}</Badge>)}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {t.errc.map(([k, v]) => (
            <div key={k} className="rounded-md border bg-surface-2 p-3">
              <p className="text-xs uppercase tracking-wide text-muted">{k}</p>
              <p className="mt-1 text-sm">{v}</p>
            </div>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="rounded-md border-l-4 border-amber bg-amber-bg p-4">
            <p className="text-sm font-semibold text-amber">{t.devil_label}</p>
            <p className="mt-1">{t.devil}</p>
          </div>
        </Reveal>
      </Card>
    </section>
  );
}
