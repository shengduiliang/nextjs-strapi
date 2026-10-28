# Strapi 生产镜像：构建在内存充足的机器完成，服务器只 docker pull / run
FROM node:22-bookworm-slim AS deps
WORKDIR /opt/app
RUN sed -i 's/deb.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && sed -i 's/security.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && npm config set registry https://registry.npmmirror.com
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /opt/app
RUN npm config set registry https://registry.npmmirror.com
COPY --from=deps /opt/app/node_modules ./node_modules
COPY . .
# 构建 admin 面板（真正密钥运行时注入）
ENV NODE_ENV=production \
    NODE_OPTIONS=--max-old-space-size=2048 \
    APP_KEYS=buildKey1,buildKey2,buildKey3,buildKey4 \
    API_TOKEN_SALT=buildSalt \
    ADMIN_JWT_SECRET=buildAdminJwt \
    TRANSFER_TOKEN_SALT=buildTransfer \
    JWT_SECRET=buildJwt \
    ENCRYPTION_KEY=buildEncryptionKey
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /opt/app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337
COPY --from=builder /opt/app ./
RUN mkdir -p public/uploads
EXPOSE 1337
# 已预编译 admin，启动很轻，不会在访问 /admin 时再编译
CMD ["npm", "run", "start"]
