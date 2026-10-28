# 运行镜像：只安装依赖，直接 develop（不做 production build）
FROM node:22-bookworm-slim
WORKDIR /opt/app

RUN sed -i 's/deb.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && sed -i 's/security.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list.d/debian.sources \
  && apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && npm config set registry https://registry.npmmirror.com

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN mkdir -p public/uploads

ENV HOST=0.0.0.0
ENV PORT=1337
EXPOSE 1337

# 小机器上避免对整个 node_modules 做 chown；以 root 跑单机 CMS 即可
CMD ["npm", "run", "develop"]
