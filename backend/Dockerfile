# Strapi 5 开发环境镜像
# 依赖（node_modules）与源码都位于项目内 backend/，通过 bind mount 挂载进容器，
# 不使用 Docker 全局卷。首次运行前需在项目目录内安装依赖：
#   docker run --rm -v "$PWD/backend":/opt/app -w /opt/app node:22-alpine npm install
FROM node:22-alpine

WORKDIR /opt/app

EXPOSE 1337

CMD ["npm", "run", "develop"]
