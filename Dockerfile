# Base stage using Node.js 20 on Alpine Linux
FROM node:20-alpine AS base

# Dependencies stage for installing build dependencies and Node.js packages
FROM base AS dependencies

# Install libc6-compat for compatibility with certain libraries
RUN apk add --no-cache libc6-compat

# Set the working directory to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Enable pnpm using corepack and install dependencies with a frozen lockfile
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Builder stage to compile and build the application
FROM base AS builder

# Set the working directory to /app
WORKDIR /app

# Copy node_modules from the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy the entire application codebase to the working directory
COPY . .

# Build the application using pnpm
RUN corepack enable pnpm && pnpm run build

# Runner stage for running the application in a production environment
FROM base AS runner

# Set the working directory to /app
WORKDIR /app

# Set the environment to development
ENV NODE_ENV development

# Create a system group and user for running the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets and the built application from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create the .next directory and set ownership to the nextjs user
RUN mkdir -p .next
RUN chown nextjs:nodejs .next

# Switch to the nextjs user
USER nextjs

# Expose port 3000 for the application
EXPOSE 3000

# Set the application to listen on all network interfaces
ENV PORT 3000

# Start the application with the hostname set to 0.0.0.0
CMD HOSTNAME="0.0.0.0" node server.js
