# Strapi 生产镜像：依赖与构建都在镜像内完成，compose up --build 即可
FROM node:22-alpine AS deps
WORKDIR /opt/app
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git python3
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /opt/app
RUN apk add --no-cache vips-dev
COPY --from=deps /opt/app/node_modules ./node_modules
COPY . .
# 构建 admin 面板需要占位密钥（真正密钥由运行时环境变量注入）
ENV NODE_ENV=production \
    APP_KEYS=buildKey1,buildKey2,buildKey3,buildKey4 \
    API_TOKEN_SALT=buildSalt \
    ADMIN_JWT_SECRET=buildAdminJwt \
    TRANSFER_TOKEN_SALT=buildTransfer \
    JWT_SECRET=buildJwt \
    ENCRYPTION_KEY=buildEncryptionKey
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /opt/app
RUN apk add --no-cache vips-dev su-exec \
  && addgroup -S strapi && adduser -S strapi -G strapi

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

COPY --from=builder --chown=strapi:strapi /opt/app ./
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh \
  && mkdir -p /opt/app/public/uploads \
  && chown -R strapi:strapi /opt/app/public

EXPOSE 1337
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "start"]
