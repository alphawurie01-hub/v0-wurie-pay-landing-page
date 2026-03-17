## WuriePay Landing Page

This repo contains the marketing and waitlist **landing page for WuriePay – “The Future of Finance in Africa.”**  
It is a single-page application built with the **Next.js App Router**, **Tailwind CSS**, **Framer Motion**, and a **shadcn/Radix-based UI kit**.

The main goal of the site is to:
- **Explain WuriePay’s value proposition** (payments, AI finance, blockchain for Africa).
- **Collect early-access signups** via a waitlist form.
- **Show social proof, security, and team info** to build trust.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, `app/` directory)
- **Language**: TypeScript + React
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn-style components under `components/ui`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: `@vercel/analytics`
- **Data / infra (planned)**: Supabase client/SSR helpers and SQL scripts for a waitlist table

Key entry points:
- `app/layout.tsx` – Root layout, global metadata, fonts, and Vercel Analytics.
- `app/page.tsx` – Main WuriePay landing page (hero, features, security, team, referral, and embedded `WaitlistForm`).
- `components/waitlist-form.tsx` – Waitlist signup component (front-end).
- `app/actions/waitlist.ts` – Server action(s) related to waitlist submissions.

---

## Getting Started (Local Development)

1. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn
```

2. **Run the dev server**

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

3. **Open the app**

Visit `http://localhost:3000` in your browser.  
The main page is rendered from `app/page.tsx`.

---

## Project Structure (High Level)

- `app/`
  - `layout.tsx` – Root layout and metadata.
  - `page.tsx` – Main landing page with all sections.
  - `actions/waitlist.ts` – Server actions for waitlist logic.
- `components/`
  - `waitlist-form.tsx` – Waitlist form UI and validation.
  - `ui/` – Shared UI components (buttons, cards, inputs, dialogs, etc.).
  - `landing/` – (If used) Additional landing-specific sections.
- `lib/`
  - `utils.ts` – Utility helpers (e.g., `cn` className helper).
  - `supabase/` – Supabase client/SSR helpers.
- `scripts/`
  - SQL files for creating and evolving the waitlist table.

---

## Environment & Configuration

If you connect the waitlist to Supabase or any backend, you will likely need environment variables such as:

- **Supabase URL / keys**
- Any other API keys or feature flags

These should be stored in a `.env.local` file (not committed to git).  
Check `lib/supabase/*` and `app/actions/waitlist.ts` for the exact variable names you use.

---

## Deployment

This project is designed to be deployed on **Vercel**:

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. Configure any required environment variables.
4. Every merge to `main` will trigger a new deployment.

You can also continue iterating visually with **v0.app**; this repo was originally bootstrapped via v0.

---

## Contributing / Next Steps

- **Copy & content**: Refine the marketing copy for specific customer segments (consumers, SMEs, remittance users, etc.).
- **Waitlist backend**: Wire up the waitlist form to a production Supabase project or another data store.
- **Analytics & tracking**: Add event tracking for signups and referral sharing.
- **Legal pages**: Implement real Privacy Policy / Terms of Service pages and link them from the footer.

For any major changes to layout or sections, focus on updating `app/page.tsx` and reusing components from `components/ui`.
