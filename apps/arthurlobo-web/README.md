# arthurlobo-web

My personal website to showcase my projects, skills, and document my journey as a Software Engineer.

## What is inside?

- Next.js 16
- React 19 + TypeScript
- Tailwind CSS v4
- Motion for animations
- Recharts for data visualization
- React Hook Form + Zod for form handling and validation
- Resend + React Email for email sending
- GithubAPI for fetching my repositories
- Jest + Testing Library (unit tests)
- Playwright (end-to-end tests)
- Dockerfile for containerized deployments

## Getting Started

Install dependencies at the monorepo root and run the dev server:

```bash
pnpm install
pnpm --filter arthurlobo-web dev
```

Open <http://localhost:3000> in your browser.

## Structure

```text
apps/web/
├─ public/
├─ src/
│  ├─ app/                 # App Router (layout, pages, providers)
│  ├─ assets/              # Static assets
│  ├─ features/            # Feature modules (by domain)
│  └─ shared/              # Shared utilities/components within the app
├─ tests/
│  ├─ e2e/                 # Playwright tests
│  ├─ mocks/
├─ eslint.config.mjs
├─ jest.config.ts
├─ jest.setup.ts
├─ playwright.config.ts
└─ next.config.ts
└─ Dockerfile
```

## Roadmap

- [ ] Custom pipeline to run tests and other checks before deployment on Vercel.
- [ ] Add more animations to improve user experience.
- [ ] Implement the Dashboard page.
- [ ] Implement the Guestbook page (Needs to wait for the API to be ready).
- [ ] Implement a blog page to share articles (Also needs the API).
