# Next.js 生产镜像：构建在内存充足的机器完成，服务器只 docker pull / run
FROM node:22-bookworm-slim AS deps
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG STRAPI_URL_INTERNAL=http://backend:1337
ENV STRAPI_URL_INTERNAL=$STRAPI_URL_INTERNAL
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS=--max-old-space-size=2048
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
