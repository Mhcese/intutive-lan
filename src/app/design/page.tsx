import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input, Textarea } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { EmptyState } from "@/components/states/empty-state";
import { ErrorState } from "@/components/states/error-state";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const swatches = [
  ["background", "bg-background"],
  ["surface", "bg-surface"],
  ["surface-2", "bg-surface-2"],
  ["border", "bg-border"],
  ["ocean", "bg-ocean"],
  ["amber", "bg-amber"],
  ["success", "bg-success"],
  ["danger", "bg-danger"],
] as const;

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-6">
      <header className="flex items-center justify-between">
        <span className="font-display text-2xl">Decidia · design system</span>
        <ThemeToggle />
      </header>

      <section className="space-y-3">
        <h1 className="font-display text-h1">
          L&apos;IA qui ose <span className="text-ocean-gradient">te dire non.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Decidia analyse tes décisions avec les modèles mentaux des meilleurs stratèges et te dit la
          vérité, même quand elle dérange.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg">Analyser ma décision gratuitement</Button>
          <Button size="lg" variant="secondary">Voir un exemple</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-h2">Couleurs</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {swatches.map(([name, cls]) => (
            <div key={name} className="space-y-2">
              <div className={`h-14 rounded-md border ${cls}`} />
              <p className="text-xs text-muted">{name}</p>
            </div>
          ))}
          <div className="space-y-2">
            <div className="h-14 rounded-md bg-ocean-gradient" />
            <p className="text-xs text-muted">dégradé océan</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-h2">Boutons & badges</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primaire</Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="ghost">Fantôme</Button>
          <Button variant="danger">Supprimer</Button>
          <Button disabled>Désactivé</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Neutre</Badge>
          <Badge variant="ocean">Inversion</Badge>
          <Badge variant="amber">Risque</Badge>
          <Badge variant="success">Confiance 82</Badge>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <h3 className="mb-1 font-medium">Carte standard</h3>
          <p className="text-sm text-muted">Surface neutre avec bordure fine.</p>
        </Card>
        <Card tone="amber">
          <h3 className="mb-1 font-medium text-amber">Avocat du diable</h3>
          <p className="text-sm">Ambre réservé aux objections et aux risques.</p>
        </Card>
        <Card tone="success">
          <h3 className="mb-1 font-medium text-success">Confiance élevée</h3>
          <p className="text-sm">Vert réservé aux scores forts.</p>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <h2 className="font-display text-h3">Champs</h2>
          <Input placeholder="Ton e-mail" aria-label="E-mail" />
          <Textarea placeholder="Décris ta décision en quelques phrases…" aria-label="Décision" />
        </div>
        <div className="space-y-3">
          <h2 className="font-display text-h3">Chargement</h2>
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-24" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-h2">Onglets</h2>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">En cours</TabsTrigger>
            <TabsTrigger value="ok">Réussies</TabsTrigger>
            <TabsTrigger value="ko">Ratées</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-3 text-muted">Décisions en cours.</TabsContent>
          <TabsContent value="ok" className="pt-3 text-muted">Décisions réussies.</TabsContent>
          <TabsContent value="ko" className="pt-3 text-muted">Décisions ratées.</TabsContent>
        </Tabs>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <EmptyState />
        <ErrorState />
      </section>
    </main>
  );
}
