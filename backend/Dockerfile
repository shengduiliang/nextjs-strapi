# Strapi 生产镜像（Debian slim，避免国内拉不通 Alpine 源）
FROM node:22-bookworm-slim AS deps
WORKDIR /opt/app
# 腾讯云等国内环境：换成 Debian / npm 国内镜像
RUN sed -i 's/deb.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && sed -i 's/security.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential \
  && rm -rf /var/lib/apt/lists/* \
  && npm config set registry https://registry.npmmirror.com
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /opt/app
RUN npm config set registry https://registry.npmmirror.com
COPY --from=deps /opt/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production \
    APP_KEYS=buildKey1,buildKey2,buildKey3,buildKey4 \
    API_TOKEN_SALT=buildSalt \
    ADMIN_JWT_SECRET=buildAdminJwt \
    TRANSFER_TOKEN_SALT=buildTransfer \
    JWT_SECRET=buildJwt \
    ENCRYPTION_KEY=buildEncryptionKey
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /opt/app
RUN sed -i 's/deb.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && sed -i 's/security.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && groupadd --system strapi \
  && useradd --system --gid strapi --create-home --home-dir /home/strapi strapi

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
