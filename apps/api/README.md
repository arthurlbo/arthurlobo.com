# API

This is ou Nest api template in the monorepo.

## What is inside?

- NestJS 11 + TypeScript
- TypeORM
- Jest (unit tests)
- Supertest (end-to-end tests)
- Dockerfile for containerized deployments

## Getting Started

Install dependencies at the monorepo root and run the dev server:

```bash
pnpm install
pnpm --filter api dev
```

The server runs by default on <http://localhost:3001> (configure in env if needed).

## Structure

```text
apps/api/
├─ src/
│  ├─ main.ts             # Bootstrap
│  ├─ app.module.ts       # Root module
│  ├─ app.controller.ts   # Example controller
│  ├─ app.service.ts      # Example service
│  ├─ core/               # Application, domain, infrastructure layers
│  ├─ presentation/       # Controllers, presenters
│  └─ shared/             # Shared utilities within the API
├─ test/
│  ├─ unit/               # Jest unit tests
│  └─ e2e/                # E2E tests (Supertest)
├─ eslint.config.mjs
├─ jest.config.js
├─ jest-e2e.config.js
└─ Dockerfile
```
