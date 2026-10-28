# 运行镜像：只安装依赖，不在服务器上做 strapi build（避免小机器 OOM）
FROM node:22-bookworm-slim
WORKDIR /opt/app

RUN sed -i 's/deb.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && sed -i 's/security.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && npm config set registry https://registry.npmmirror.com \
  && groupadd --system strapi \
  && useradd --system --gid strapi --create-home --home-dir /home/strapi strapi

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN mkdir -p /opt/app/public/uploads \
  && chown -R strapi:strapi /opt/app

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENV HOST=0.0.0.0
ENV PORT=1337
EXPOSE 1337

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "develop"]
