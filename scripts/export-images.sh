#!/usr/bin/env bash
# 不方便推 Docker Hub 时：本机构建后打包，scp 到服务器再 load
set -euo pipefail
cd "$(dirname "$0")/.."

PREFIX="${DOCKER_IMAGE_PREFIX:-shengduiliang/nextjs-strapi}"
TAG="${IMAGE_TAG:-latest}"
OUT="${1:-nextjs-strapi-images.tar.gz}"

echo "==> build"
docker build -t "${PREFIX}-backend:${TAG}" ./backend
docker build \
  --build-arg STRAPI_URL_INTERNAL=http://backend:1337 \
  -t "${PREFIX}-frontend:${TAG}" ./frontend

echo "==> save $OUT"
docker save "${PREFIX}-backend:${TAG}" "${PREFIX}-frontend:${TAG}" | gzip > "$OUT"
ls -lh "$OUT"

cat <<EOF

传到服务器：
  scp $OUT ubuntu@你的服务器IP:~/nextjs-strapi/

服务器上：
  cd ~/nextjs-strapi
  gunzip -c $OUT | docker load
  docker compose up -d
EOF
