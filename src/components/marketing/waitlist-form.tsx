"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getMessages } from "@/i18n";

type State = "idle" | "loading" | "success" | "already" | "error";

export function WaitlistForm() {
  const t = getMessages().landing.waitlist;
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!form.get("consent")) {
      setState("error");
      setMessage(t.consent_required);
      return;
    }
    setState("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          consent: true,
          website: form.get("website") ?? "",
        }),
      });
      const data = (await res.json()) as { status: string };
      if (data.status === "ok") setState("success");
      else if (data.status === "already") setState("already");
      else {
        setState("error");
        setMessage(data.status === "invalid" ? t.invalid : t.error);
      }
    } catch {
      setState("error");
      setMessage(t.error);
    }
  }

  if (state === "success" || state === "already") {
    return (
      <p role="status" className="rounded-md border border-success/40 bg-success-bg p-4 text-success">
        {state === "success" ? t.success : t.already}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input name="email" type="email" required autoComplete="email" placeholder={t.email} aria-label={t.email} className="flex-1" />
        <Button type="submit" disabled={state === "loading"}>
          {state === "loading" && <Loader2 className="animate-spin" />}
          {t.submit}
        </Button>
      </div>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />
      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" className="mt-1 size-4 accent-[var(--ocean-from)]" />
        {t.consent}
      </label>
      {message && <p role="alert" className="text-sm text-danger">{message}</p>}
    </form>
  );
}
