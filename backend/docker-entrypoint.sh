#!/bin/sh
set -e
mkdir -p /opt/app/public/uploads
# bind mount 进来的目录常为 root 所有，启动时纠正权限后降权运行
chown -R strapi:strapi /opt/app/public/uploads 2>/dev/null || true
exec setpriv --reuid=strapi --regid=strapi --init-groups -- "$@"
