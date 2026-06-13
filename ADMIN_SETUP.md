# Trident Admin Portal Setup

The internal portal is available at `/admin`. It is intentionally not linked from the public website.

## 1. Create the private database

1. Create a project at https://supabase.com.
2. Open **SQL Editor**.
3. Run the complete contents of `supabase/schema.sql`.
4. Keep email/password authentication enabled.
5. Disable public user sign-up in **Authentication > Providers > Email**.

## 2. Create administrator accounts

Create each authorized administrator manually from:

**Authentication > Users > Add user**

Do not share one account between employees. Remove an account immediately when access is no longer required.

## 3. Connect the website

Add these environment variables locally and in Vercel:

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
```

Use the public anonymous key. Never expose the Supabase service-role key in this React website.

## 4. Current capabilities

- Secure administrator sign-in
- Employee records and salary details
- Daily attendance marking
- Salary advance entry and history
- Monthly salary less approved advances
- Mobile-responsive dashboard

## 5. Before using payroll operationally

The current payroll page is an overview. Define and implement:

- Paid and unpaid leave rules
- Overtime
- Late arrival and half-day rules
- Bonuses and reimbursements
- PF, ESI, professional tax and TDS
- Loan or advance recovery schedules
- Payslips and salary payment records
- Approval roles and audit logs

Employee and salary data is sensitive. Enable multi-factor authentication, schedule database backups and restrict admin accounts to trusted staff.
