import * as React from "react";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-md border bg-surface px-4 text-base text-foreground placeholder:text-muted/80 transition-colors duration-150 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-50";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(field, "h-11", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(field, "min-h-32 py-3 leading-relaxed", className)} {...props} />;
}
