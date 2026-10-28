# 荣芯半导体官网（Next.js + Strapi + PostgreSQL，Docker 化）

荣芯半导体（GlorySemi）官网——专注 PPG / ECG 人体健康传感器芯片（GS6933）。前端完整复刻 reference 站点，内容由 Strapi 后台管理。

## 技术栈

| 服务 | 技术 | 端口 |
|------|------|------|
| `frontend` | Next.js 16 (React 19, Tailwind 4) | http://localhost:3000 |
| `backend` | Strapi 5 (Node 22) | http://localhost:1337 |
| `db` | PostgreSQL 16 | localhost:5432 |

## 为什么云主机访问 /admin 会卡死？

本机内存大，用 `strapi develop` 时**第一次打开 /admin 会现场编译管理后台**，几 GB 内存也能扛住。

4G 云主机上若跑 develop，打开 /admin 等于当场编译，再加上 Postgres + Next，很容易把机器打挂。

正确做法：**在本机编好生产镜像**（admin 已预编译），服务器只 `pull` / `load` 后运行 `strapi start`，访问 /admin 就很快、也很省内存。

## 推荐部署（本机构建 → 服务器运行）

### 1. 本机构建镜像

```bash
# 方式 A：推到 Docker Hub
docker login
./scripts/build-and-push.sh

# 方式 B：不推仓库，打包 scp
./scripts/export-images.sh
scp nextjs-strapi-images.tar.gz ubuntu@服务器IP:~/nextjs-strapi/
```

### 2. 服务器只启动（不要 --build）

```bash
cd ~/nextjs-strapi
git pull
cp -n .env.example .env   # 配好 POSTGRES_* 与 Strapi 密钥
mkdir -p data/postgres data/uploads

# 若用方式 B：
# gunzip -c nextjs-strapi-images.tar.gz | docker load

docker compose pull        # 方式 A
docker compose up -d       # 不要加 --build
```

访问：

- 官网：http://服务器IP:3000
- Strapi：http://服务器IP:1337/admin

## 本机开发

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up
```

## 目录结构

```
nextjs-strapi/
├── docker-compose.yml       # 生产编排（用预构建镜像）
├── docker-compose.dev.yml   # 开发热重载
├── scripts/build-and-push.sh
├── scripts/export-images.sh
├── data/postgres/           # DB 数据
├── data/uploads/            # 上传媒体
├── backend/
└── frontend/
```
