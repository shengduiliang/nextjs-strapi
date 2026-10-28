#!/usr/bin/env bash
# 在本机（内存充足）构建并推送到 Docker Hub；服务器只 pull + up
set -euo pipefail
cd "$(dirname "$0")/.."

PREFIX="${DOCKER_IMAGE_PREFIX:-shengduiliang/nextjs-strapi}"
TAG="${IMAGE_TAG:-latest}"

echo "==> build backend"
docker build -t "${PREFIX}-backend:${TAG}" ./backend

echo "==> build frontend"
docker build \
  --build-arg STRAPI_URL_INTERNAL=http://backend:1337 \
  -t "${PREFIX}-frontend:${TAG}" ./frontend

echo "==> push (需先: docker login)"
docker push "${PREFIX}-backend:${TAG}"
docker push "${PREFIX}-frontend:${TAG}"

cat <<EOF

推送完成。在服务器上：

  cd ~/nextjs-strapi && git pull
  # .env 已配好密钥后：
  docker compose pull
  docker compose up -d

不要用: docker compose up --build
EOF
