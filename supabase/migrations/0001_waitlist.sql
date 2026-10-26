create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_email_key on public.waitlist (lower(email));

-- RLS activée sans aucune policy : seul le service role (côté serveur) peut lire/écrire.
alter table public.waitlist enable row level security;
