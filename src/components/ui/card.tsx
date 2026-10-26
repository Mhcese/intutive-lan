import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "amber" | "success" | "ocean";

const tones: Record<Tone, string> = {
  default: "border-border bg-surface",
  amber: "border-amber/50 bg-amber-bg",
  success: "border-success/40 bg-success-bg",
  ocean: "border-ocean/40 bg-surface",
};

export function Card({
  className,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { tone?: Tone }) {
  return <div className={cn("rounded-lg border p-5 sm:p-6", tones[tone], className)} {...props} />;
}
