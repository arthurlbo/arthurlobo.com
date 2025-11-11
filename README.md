# Full-stack Monorepo Template

> A modern, production-ready monorepo template to kickstart your Full-stack development with Next.js, NestJS, and shared configuration packages.

## Overview

This is a comprehensive monorepo template built with **pnpm workspaces** and **Turbo** for efficient builds and task orchestration. It provides a solid foundation for building scalable Full-stack applications with shared configuration, design systems, and utilities.

## What's inside?

### Apps

- **`web`**: Next.js 15 + React 19 app with TypeScript, Tailwind CSS v4, Jest, and Playwright
- **`api`**: NestJS 11 API with TypeScript, TypeORM, Jest, and Supertest

### Packages

- **`@repo/design-system`**: Shared UI components and utilities (Tailwind CSS + shadcn/ui)
- **`@repo/env`**: Centralized environment variable validation with Zod
- **`@repo/database-typeorm`**: TypeORM DataSource configuration and migrations
- **`@repo/eslint`**: Shared ESLint configurations (base, Next.js, NestJS)
- **`@repo/jest`**: Shared Jest configurations for testing
- **`@repo/playwright`**: Shared Playwright configuration for E2E tests
- **`@repo/typescript`**: Shared TypeScript configurations
- **`@repo/tsup`**: Shared tsup configuration for bundling packages

## Tech Stack

- **Monorepo**: pnpm workspaces + Turbo
- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: NestJS, TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: TypeORM + PostgreSQL
- **Testing**: Jest, Playwright, Supertest
- **Linting/Formatting**: ESLint 9, Prettier
- **Git hooks**: Husky + Commitlint
- **Containerization**: Docker + Docker Compose

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm 10.18.2 (or higher)
- Docker (optional, for containerized development)

### Installation

Install dependencies:

```bash
pnpm install
```

### Build

Build all apps and packages:

```bash
pnpm build
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

Or run individual apps:

```bash
# Web app (Next.js)
pnpm --filter web dev

# API (NestJS)
pnpm --filter api dev
```

Open <http://localhost:3000> for the web app and <http://localhost:3001> for the API.

## Project Structure

```text
fullstack-monorepo-template/
├─ apps/
│  ├─ web/              # Next.js 15 + React 19 app
│  └─ api/              # NestJS 11 API
├─ packages/
│  ├─ design-system/    # UI components and utilities
│  ├─ env/              # Environment validation
│  ├─ database-typeorm/ # TypeORM configuration
│  └─ config/           # Shared configurations
│     ├─ eslint/
│     ├─ jest/
│     ├─ playwright/
│     ├─ typescript/
│     └─ tsup/
├─ docker-compose.*.yaml
├─ package.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

## Available Commands

### General

```bash
pnpm dev                # Run all apps in dev mode
pnpm build              # Build all apps and packages
pnpm lint               # Lint all apps and packages
pnpm format             # Format and fix all files
pnpm typecheck          # Type-check all TypeScript files
```

### Docker

```bash
pnpm docker:dev         # Start development environment
pnpm docker:staging     # Start staging environment
pnpm docker:production  # Start production environment
```

### Database Migrations

```bash
pnpm migrate:up:dev     # Run migrations (development)
pnpm migrate:down:dev   # Revert migrations (development)
pnpm clear:db:dev       # Clear database (development)
```

### Git Commits

```bash
pnpm commit             # Interactive commit with Commitizen
```

## Environment Variables

Environment files are managed at the monorepo root and validated via `@repo/env`:

- `.env.development` - Development environment
- `.env.staging` - Staging environment
- `.env.production` - Production environment
- `.env.test` - Test environment

## Package Management

This monorepo uses **pnpm workspaces** with the `workspace:*` protocol for internal dependencies. All shared packages are automatically linked and hot-reloaded during development.

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Run `pnpm format`
4. Commit using `pnpm commit` (or follows Conventional Commits)
5. Create a Pull Request
