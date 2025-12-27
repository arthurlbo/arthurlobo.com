# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace root files
COPY .prettierrc.json pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json tsconfig.json ./
COPY packages ./packages
COPY apps/web ./apps/web

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build shared packages first
RUN pnpm --filter "@repo/*" --filter "!@repo/tsconfig" build

# Build the web
RUN pnpm --filter web build

# Production stage
FROM node:20-alpine AS runner

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Set the environment
ENV NODE_ENV=production

# Copy everything from builder
COPY --from=builder /app ./

# Install production dependencies only
RUN pnpm --filter web install --frozen-lockfile

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the application
CMD ["pnpm", "--filter", "web", "start:prod"]
