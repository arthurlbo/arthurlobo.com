# `@repo/env`

Shared environment variables management package for the monorepo.

## Overview

This package provides centralized environment variable validation and type-safe access across all apps in the monorepo. It uses Zod for runtime validation and automatically loads the correct `.env` file based on `NODE_ENV`.

### Build

```bash
pnpm --filter @repo/env build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "dependencies": {
        "@repo/env": "workspace:*"
    }
}
```
