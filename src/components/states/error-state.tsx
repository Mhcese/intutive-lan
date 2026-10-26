"use client";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n";

export function ErrorState({
  title,
  body,
  onRetry,
}: {
  title?: string;
  body?: string;
  onRetry?: () => void;
}) {
  const t = getMessages().error;
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-lg border border-danger/40 px-6 py-12 text-center"
    >
      <AlertTriangle className="size-8 text-danger" aria-hidden />
      <h3 className="font-display text-h3">{title ?? t.title}</h3>
      <p className="max-w-sm text-muted">{body ?? t.body}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          {t.retry}
        </Button>
      )}
    </div>
  );
}
