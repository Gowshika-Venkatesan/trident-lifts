create extension if not exists "pgcrypto";

create table if not exists public.employees (
  id uuid primary key default gen_random_uuid(),
  employee_code text not null unique,
  full_name text not null,
  phone text,
  email text,
  designation text,
  department text,
  date_of_joining date,
  monthly_salary numeric(12, 2) not null default 0 check (monthly_salary >= 0),
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(),
  employee_id uuid not null references public.employees(id) on delete cascade,
  attendance_date date not null,
  status text not null check (status in ('present', 'absent', 'leave')),
  check_in time,
  check_out time,
  notes text,
  created_at timestamptz not null default now(),
  unique (employee_id, attendance_date)
);

create table if not exists public.salary_advances (
  id uuid primary key default gen_random_uuid(),
  employee_id uuid not null references public.employees(id) on delete cascade,
  amount numeric(12, 2) not null check (amount > 0),
  advance_date date not null default current_date,
  reason text,
  status text not null default 'approved' check (status in ('pending', 'approved', 'rejected', 'recovered')),
  created_at timestamptz not null default now()
);

alter table public.employees enable row level security;
alter table public.attendance enable row level security;
alter table public.salary_advances enable row level security;

create policy "Authenticated admins manage employees"
on public.employees for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins manage attendance"
on public.attendance for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins manage salary advances"
on public.salary_advances for all
to authenticated
using (true)
with check (true);

create index if not exists attendance_employee_date_idx
on public.attendance (employee_id, attendance_date);

create index if not exists salary_advances_employee_date_idx
on public.salary_advances (employee_id, advance_date);
