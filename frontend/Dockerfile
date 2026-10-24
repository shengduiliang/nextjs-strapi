# Next.js 16 开发环境镜像
# 依赖（node_modules）与源码都位于项目内 frontend/，通过 bind mount 挂载进容器，
# 不使用 Docker 全局卷。首次运行前需在项目目录内安装依赖：
#   docker run --rm -v "$PWD/frontend":/app -w /app node:22-alpine npm install
FROM node:22-alpine

WORKDIR /app

EXPOSE 3000

# -H 0.0.0.0 确保在容器内监听所有网卡，宿主机才能访问
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
