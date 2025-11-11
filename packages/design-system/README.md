# `@repo/design-system`

Shared UI components and utilities package for the monorepo.

## Overview

Built with Tailwind CSS and based on shadcn/ui, this package provides reusable React components and utilities to ensure design consistency across all apps in the workspace.

### Build

```bash
pnpm --filter @repo/design-system build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "dependencies": {
        "@repo/design-system": "workspace:*"
    }
}
```
