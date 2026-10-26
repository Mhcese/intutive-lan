import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/waitlist";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

// Limitation de débit simple en mémoire (par IP) ; remplacée par un store partagé à l'étape 10.
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ status: "rate_limited" }, { status: 429 });

  const body = await req.json().catch(() => null);
  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    const consentIssue = parsed.error.issues.some((i) => i.path[0] === "consent");
    return NextResponse.json(
      { status: consentIssue ? "consent_required" : "invalid" },
      { status: 400 },
    );
  }
  // Honeypot rempli : on fait semblant que tout va bien.
  if (parsed.data.website) return NextResponse.json({ status: "ok" });

  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ status: "unavailable" }, { status: 503 });

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: parsed.data.email, source: "landing" });

  if (error?.code === "23505") return NextResponse.json({ status: "already" });
  if (error) return NextResponse.json({ status: "error" }, { status: 500 });
  return NextResponse.json({ status: "ok" });
}
