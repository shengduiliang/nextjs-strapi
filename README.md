# 荣芯半导体官网（Next.js + Strapi + PostgreSQL，Docker 化）

荣芯半导体（GlorySemi）官网——专注 PPG / ECG 人体健康传感器芯片（GS6933）。前端完整复刻 reference 站点，内容由 Strapi 后台管理。

> 设计原则：**除 Docker 镜像本身外，所有数据与依赖都落在项目目录内**（绑定挂载），不使用 Docker 全局命名卷。

## 技术栈

| 服务 | 技术 | 端口 |
|------|------|------|
| `frontend` | Next.js 16 (React 19, Turbopack, Tailwind 4) | http://localhost:3000 |
| `backend` | Strapi 5 (Node 22) | http://localhost:1337 |
| `db` | PostgreSQL 16 | localhost:5432 |

## 目录结构

```
nextjs-strapi/
├── docker-compose.yml    # 编排三个服务（绑定挂载到项目内）
├── .env                  # 数据库凭据（已 gitignore）
├── .env.example
├── data/postgres/        # PostgreSQL 数据（运行时生成，已 gitignore）
├── backend/              # Strapi 后端
│   └── src/
│       ├── api/          # 内容类型：产品/新闻/轮播/热门产品/产品菜单/联系方式
│       └── components/   # 复用组件（数据手册、文档分组、工具等）
└── frontend/             # Next.js 前端（完整复刻荣芯官网）
    ├── src/app/(website) # 前台页面
    └── src/lib/          # 数据层（Strapi 读取 + 静态默认回退）
```

## 快速开始

### 1. 配置环境变量

```bash
cp .env.example .env   # 已有 .env 可跳过，按需修改数据库密码
```

### 2. 安装前端依赖（首次 / 全新克隆后）

依赖安装在项目目录内，通过容器执行以避免宿主机需要 Node：

```bash
cd frontend
docker run --rm -v "$PWD":/app -w /app node:22-alpine npm ci
sudo chown -R $(id -u):$(id -g) node_modules package-lock.json
```

> 注意：本项目用 `npm ci`（配合已提交的 package-lock.json）。此环境 npm 的依赖解析阶段（拉取全量 metadata）会卡住，而 `npm ci` 直接按 lockfile 下载 tarball，可绕开。

### 3. 启动

```bash
docker compose up -d
```

首次启动需初始化数据库，稍候片刻：

```bash
docker compose ps   # 三个服务均应为 running/healthy
```

## 访问

- **官网**：http://localhost:3000
- **Strapi 后台**：http://localhost:1337/admin （`admin@example.com` / `Admin@123456`，登录后请在后台修改密码）

## 内容管理（Strapi 后台）

登录后台 → 左侧「内容管理」，共 6 个内容类型：

| 内容类型 | 说明 |
|---------|------|
| 首页轮播 | 首页 Hero 轮播图（图/标题/副标题/链接/排序） |
| 热门产品 | 首页热门产品推荐（名称/描述/图/链接） |
| 产品 | 产品目录（GS6933 等，含详情、数据手册、文档、工具、应用场景） |
| 产品菜单 | 顶部导航「产品中心」的菜单结构（传感器/MCU） |
| 新闻动态 | 公司新闻（标题/日期/摘要/富文本正文） |
| 联系方式 | 联系页面的公司信息（单类型） |

在后台增删改内容后，官网会在 60 秒内（`unstable_cache revalidate:60`）自动刷新。

## 前端如何读取内容

前端服务端组件通过 `src/lib/strapi.ts` 的 `strapiGet()` 从 Strapi 拉取（容器内走 `STRAPI_URL_INTERNAL`），Strapi 不可用时自动回退到 `src/lib/` 下的静态默认内容，保证站点不白屏。

## 常用命令

```bash
docker compose up -d             # 启动（后台）
docker compose logs -f backend   # 查看 Strapi 日志
docker compose logs -f frontend  # 查看前端日志
docker compose down              # 停止并删除容器（数据保留在项目内）
```

重置数据库：

```bash
docker compose down
sudo rm -rf data/postgres
mkdir -p data/postgres && sudo chown -R 70:70 data/postgres
docker compose up -d
```

## 数据持久化（全部在项目目录内）

| 数据 | 位置 |
|------|------|
| PostgreSQL 数据 | `data/postgres/` |
| 前端依赖 | `frontend/node_modules/` |
| 前端构建缓存 | `frontend/.next/` |
| 上传媒体 | `frontend/public/`（Strapi 上传后建议存到对象存储） |

> 仅 Docker 镜像存放在 Docker 自身的镜像存储中，这是 Docker 的机制，无法更改。

## 已知事项

- 前端 dev 模式有一条 Turbopack 非致命警告 `instrument-module-getter`，不影响渲染。
- 富文本字段（新闻正文、产品描述）在后台为结构化编辑器；部分嵌套字段（产品菜单的 columns/featured）仍为 JSON 编辑器，后续可继续组件化。
