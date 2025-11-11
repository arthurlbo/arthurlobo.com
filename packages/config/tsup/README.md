# `@repo/tsup`

Shared Tsup configuration package for the monorepo.

## Overview

This package provides a centralized Tsup configuration for building TypeScript projects in the monorepo, ensuring consistent build settings across all apps in the workspace.

### Build

```bash
pnpm --filter @repo/tsup build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "devDependencies": {
        "@repo/tsup": "workspace:*"
    }
}
```
