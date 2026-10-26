import { describe, expect, it } from "vitest";
import { waitlistSchema } from "@/lib/waitlist";

describe("waitlistSchema", () => {
  it("normalise l'e-mail", () => {
    const r = waitlistSchema.parse({ email: "  Moi@Exemple.COM ", consent: true });
    expect(r.email).toBe("moi@exemple.com");
  });
  it("refuse sans consentement", () => {
    expect(waitlistSchema.safeParse({ email: "a@b.co", consent: false }).success).toBe(false);
  });
  it("refuse un e-mail invalide", () => {
    expect(waitlistSchema.safeParse({ email: "nope", consent: true }).success).toBe(false);
  });
  it("refuse le honeypot rempli", () => {
    expect(waitlistSchema.safeParse({ email: "a@b.co", consent: true, website: "x" }).success).toBe(false);
  });
});
