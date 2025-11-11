# `@repo/playwright`

Shared Playwright configuration package for the monorepo.

## Overview

This package provides a centralized Playwright configuration for end-to-end testing in the monorepo, ensuring consistent test settings across all apps in the workspace.

### Build

```bash
pnpm --filter @repo/playwright build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "devDependencies": {
        "@repo/playwright": "workspace:*"
    }
}
```
