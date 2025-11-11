# `@repo/eslint`

Shared ESLint configuration package for the monorepo.

## Overview

This package provides a centralized ESLint configuration for code linting in the monorepo, ensuring consistent coding standards across all apps in the workspace.

### Build

```bash
pnpm --filter @repo/eslint build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "devDependencies": {
        "@repo/eslint": "workspace:*"
    }
}
```
