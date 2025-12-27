# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace files
COPY .prettierrc.json pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json tsconfig.json ./
COPY packages ./packages
COPY apps/api ./apps/api

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build shared packages first
RUN pnpm --filter "@repo/*" --filter "!@repo/tsconfig" build

# Build the API
RUN pnpm --filter api build

# Production stage
FROM node:20-alpine AS runner

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Set environment
ENV NODE_ENV=production

# Copy everything from builder
COPY --from=builder /app ./

# Install production dependencies only
RUN pnpm --filter api install --frozen-lockfile

# Expose port
EXPOSE 3001

# Start the application
CMD ["pnpm", "--filter", "api", "start:prod"]
