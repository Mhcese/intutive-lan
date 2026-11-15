import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  // honeypot : doit rester vide
  website: z.string().max(0).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
