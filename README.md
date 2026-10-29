# 荣芯半导体官网（Next.js + Strapi + PostgreSQL）

本地和服务器同一套 Docker Compose，装依赖在镜像里完成。

## 启动

```bash
cp .env.example .env
mkdir -p data/postgres data/uploads
docker compose up -d --build
```

## 访问

- 官网：http://localhost:3000
- Strapi：http://localhost:1337/admin

## 常用命令

```bash
docker compose logs -f          # 看日志
docker compose down             # 停止（数据保留在 ./data/）
docker compose up -d --build    # 改代码或依赖后重建启动
```

> 小内存云主机若首次打开 `/admin` 很卡，先加 2G swap，或等几分钟让 Strapi 编译完管理后台。
