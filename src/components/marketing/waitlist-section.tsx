import { Card } from "@/components/ui/card";
import { WaitlistForm } from "./waitlist-form";
import { getMessages } from "@/i18n";

export function WaitlistSection() {
  const t = getMessages().landing.waitlist;
  return (
    <section id="liste-attente" className="mx-auto max-w-2xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Card tone="ocean" className="space-y-6 p-6 text-center sm:p-10">
        <h2 className="font-display text-h2">{t.title}</h2>
        <p className="text-muted">{t.subtitle}</p>
        <WaitlistForm />
      </Card>
    </section>
  );
}
