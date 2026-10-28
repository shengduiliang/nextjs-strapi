# 运行镜像：只安装依赖，不在服务器上做 next build（避免小机器 OOM）
FROM node:22-bookworm-slim
WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com \
  && groupadd --system nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN chown -R nextjs:nodejs /app

USER nextjs
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
