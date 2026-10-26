import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n";

export function EmptyState({
  title,
  body,
  cta,
  href = "/new",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  const t = getMessages().empty;
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed px-6 py-14 text-center">
      <div className="grid size-14 place-items-center rounded-full bg-ocean-gradient/15 text-ocean">
        <Compass className="size-7" aria-hidden />
      </div>
      <h3 className="font-display text-h3">{title ?? t.title}</h3>
      <p className="max-w-sm text-muted">{body ?? t.body}</p>
      <Button asChild>
        <a href={href}>{cta ?? t.cta}</a>
      </Button>
    </div>
  );
}
