# `@repo/jest`

Shared Jest configuration package for the monorepo.

## Overview

This package provides a centralized Jest configuration for unit testing and end-to-end in the monorepo, ensuring consistent test settings across all apps in the workspace.

### Build

```bash
pnpm --filter @repo/jest build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "devDependencies": {
        "@repo/jest": "workspace:*"
    }
}
```
