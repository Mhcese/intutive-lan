import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getMessages } from "@/i18n";

export function Header() {
  const m = getMessages();
  const t = m.landing.nav;
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-2xl">{m.brand}</a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a className="hover:text-foreground" href="#pourquoi">{t.why}</a>
          <a className="hover:text-foreground" href="#comment">{t.how}</a>
          <a className="hover:text-foreground" href="#tarifs">{t.pricing}</a>
          <a className="hover:text-foreground" href="#faq">{t.faq}</a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm"><a href="#liste-attente">{t.cta}</a></Button>
        </div>
      </div>
    </header>
  );
}
