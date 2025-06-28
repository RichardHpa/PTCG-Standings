# Stage 1: Install dependencies & build the app
FROM node:20-alpine AS builder

ENV TZ=Pacific/Auckland

WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies (cacheable if package.json doesn't change)
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app (e.g., frontend static files, etc.)
RUN npm run heroku-postbuild

# Stage 2: Production image
FROM node:20-alpine

ENV TZ=Pacific/Auckland

WORKDIR /app

# Copy only the built output + necessary files from builder
COPY --from=builder /app .

# Optional: Remove dev dependencies (if you're using `--production`)
# RUN npm prune --production

EXPOSE 5001

CMD ["npm", "run", "start"]
