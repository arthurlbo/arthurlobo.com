# `@repo/database-typeorm`

Shared TypeORM DataSource configuration package for the monorepo.

## Overview

This package provides a centralized TypeORM `DataSource` configuration for connecting to the PostgreSQL database. It manages entities, migrations, and connection settings to ensure consistency across all apps in the workspace.

### Build

```bash
pnpm --filter @repo/database-typeorm build
```

### Installation

This package is already part of the workspace. To use it in your app:

```json
{
    "dependencies": {
        "@repo/database-typeorm": "workspace:*"
    }
}
```
