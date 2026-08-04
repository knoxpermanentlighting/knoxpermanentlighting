create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  message text,
  source_path text,
  created_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;

-- No public policies: this table is only ever written to and read from
-- the server (API route) using the service role key, which bypasses RLS.
