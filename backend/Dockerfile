# 生产镜像：在本机（内存充足）构建，服务器只 docker load 运行
FROM node:22-bookworm-slim AS deps
WORKDIR /opt/app
RUN npm config set registry https://registry.npmmirror.com
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /opt/app
RUN npm config set registry https://registry.npmmirror.com
COPY --from=deps /opt/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production \
    NODE_OPTIONS=--max-old-space-size=4096 \
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
CMD ["npm", "run", "start"]
