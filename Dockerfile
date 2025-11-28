# Build step
FROM node:22-alpine AS build

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# (Optional but better for caching)
COPY package*.json ./
# Or if you use pnpm-lock.yaml, use:
# COPY package.json pnpm-lock.yaml ./

RUN pnpm install --no-strict-peer-dependencies

COPY . .
RUN pnpm run build

# Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Replace default Nginx config with our SPA-friendly one
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
