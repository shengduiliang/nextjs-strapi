# 荣芯半导体官网（Next.js + Strapi + PostgreSQL，Docker 化）

荣芯半导体（GlorySemi）官网——专注 PPG / ECG 人体健康传感器芯片（GS6933）。前端完整复刻 reference 站点，内容由 Strapi 后台管理。

## 技术栈

| 服务 | 技术 | 端口 |
|------|------|------|
| `frontend` | Next.js 16 (React 19, Turbopack, Tailwind 4) | http://localhost:3000 |
| `backend` | Strapi 5 (Node 22) | http://localhost:1337 |
| `db` | PostgreSQL 16 | localhost:5432 |

## 快速开始（服务器 / 生产）

依赖与构建都在 Docker 镜像内完成，**克隆后直接**：

```bash
cp .env.example .env
# 编辑 .env：改数据库密码，并用 openssl rand -base64 16 生成各 Strapi 密钥

mkdir -p data/postgres data/uploads
docker compose up -d --build
```

查看状态：

```bash
docker compose ps
docker compose logs -f frontend
docker compose logs -f backend
```

访问：

- **官网**：http://服务器IP:3000
- **Strapi 后台**：http://服务器IP:1337/admin（首次打开按提示创建管理员）

停止：

```bash
docker compose down   # 数据保留在 ./data/
```

## 本地热重载开发（可选）

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up
```

开发编排会在容器启动时执行 `npm ci`，首次会稍慢；源码通过绑定挂载，改代码即可热更新。

## 目录结构

```
nextjs-strapi/
├── docker-compose.yml      # 生产编排（镜像内构建，无需宿主机装 Node）
├── docker-compose.dev.yml  # 开发编排（热重载）
├── .env / .env.example
├── data/postgres/          # PostgreSQL 数据（gitignore）
├── data/uploads/           # Strapi 上传媒体（gitignore）
├── backend/                # Strapi
└── frontend/               # Next.js
```

## 内容管理（Strapi 后台）

| 内容类型 | 说明 |
|---------|------|
| 首页轮播 | 首页 Hero 轮播图 |
| 热门产品 | 首页热门产品推荐 |
| 产品 | 产品目录（含详情、手册、文档、工具等） |
| 产品分类 / 产品分组 | 顶部「产品中心」菜单结构 |
| 新闻动态 | 公司新闻 |
| 联系方式 | 联系页公司信息（单类型） |

后台改完后，官网约 60 秒内刷新（`revalidate: 60`）；Strapi 不可用时前端回退静态默认内容。

## 常用命令

```bash
docker compose up -d --build   # 构建并后台启动
docker compose logs -f         # 全部日志
docker compose restart frontend
docker compose down
```

重置数据库：

```bash
docker compose down
sudo rm -rf data/postgres
mkdir -p data/postgres data/uploads
docker compose up -d --build
```

## 数据持久化

| 数据 | 位置 |
|------|------|
| PostgreSQL | `data/postgres/` |
| 上传媒体 | `data/uploads/` |
| 应用代码与依赖 | Docker 镜像内（构建时打包） |
