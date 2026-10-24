# Next.js + Strapi CMS（Docker 化）

一个开箱即用的 Headless CMS 全栈项目：**Next.js 16**（前端）+ **Strapi 5**（后端 CMS）+ **PostgreSQL 16**（数据库），全部通过 Docker Compose 编排。

> 设计原则：**除 Docker 镜像本身外，所有数据与依赖都落在项目目录内**（绑定挂载），不使用 Docker 全局命名卷。

## 技术栈

| 服务 | 技术 | 端口 |
|------|------|------|
| `frontend` | Next.js 16 (React 19, Turbopack) | http://localhost:3000 |
| `backend` | Strapi 5 (Node 22) | http://localhost:1337 |
| `db` | PostgreSQL 16 | localhost:5432 |

## 目录结构

```
nextjs-strapi/
├── docker-compose.yml    # 编排三个服务（全部绑定挂载到项目内）
├── .env                  # 数据库凭据（已 gitignore）
├── .env.example          # 环境变量模板
├── data/postgres/        # PostgreSQL 数据（运行时生成，已 gitignore）
├── backend/              # Strapi 后端
│   ├── Dockerfile
│   ├── node_modules/     # 依赖（安装生成，已 gitignore）
│   ├── config/           # 服务/数据库/中间件等配置
│   └── src/              # 内容类型、API 逻辑
└── frontend/             # Next.js 前端
    ├── Dockerfile
    ├── node_modules/     # 依赖（安装生成，已 gitignore）
    └── src/app/          # App Router 页面
```

## 快速开始

### 1. 配置环境变量

```bash
cp .env.example .env   # 已有 .env 可跳过，按需修改数据库密码
```

### 2. 安装依赖（首次 / 全新克隆后）

依赖安装在项目目录内（`backend/node_modules`、`frontend/node_modules`），通过容器执行以避免宿主机需要 Node：

```bash
docker run --rm -v "$PWD/backend":/opt/app -w /opt/app node:22-alpine npm install
docker run --rm -v "$PWD/frontend":/app -w /app node:22-alpine npm install
sudo chown -R $(id -u):$(id -g) backend/node_modules frontend/node_modules
```

### 3. 构建并启动

```bash
docker compose up -d --build
```

首次启动需初始化数据库，稍候片刻。检查状态：

```bash
docker compose ps
# 三个服务均应为 running/healthy
```

### 4. 访问

- **Strapi 管理后台**：http://localhost:1337/admin （首次访问会引导你创建管理员账号）
- **Strapi API**：http://localhost:1337/api
- **Next.js 前端**：http://localhost:3000

## 首次使用 Strapi（创建你的第一个内容）

1. 打开 http://localhost:1337/admin，按提示注册管理员账号。
2. **Content-Type Builder** → 新建集合类型，例如 `Article`，添加字段（如 `title` 文本、`content` 富文本、`cover` 媒体）。
3. 保存后，在 **Content Manager** 里新增一条记录。
4. 在 **Settings → Users & Permissions → Roles → Public** 中，勾选 `Article` 的 `find` / `findOne` 权限，允许公开读取。
5. 用浏览器验证：`http://localhost:1337/api/articles` 应返回 JSON。

## 前端如何调用 Strapi

前端容器内已注入两个环境变量：

| 变量 | 值 | 用途 |
|------|-----|------|
| `NEXT_PUBLIC_STRAPI_URL` | `http://localhost:1337` | 浏览器端直接请求 Strapi |
| `STRAPI_URL_INTERNAL` | `http://backend:1337` | 服务端（`getServerSideProps`/Server Component）用 Docker 内部网络请求 |

服务端组件示例（`frontend/src/app/page.tsx`）：

```tsx
export default async function Home() {
  const res = await fetch(`${process.env.STRAPI_URL_INTERNAL}/api/articles?populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <ul>
      {data.data.map((a) => (
        <li key={a.id}>{a.title}</li>
      ))}
    </ul>
  );
}
```

> 说明：`STRAPI_URL_INTERNAL` 只在服务端可用（无 `NEXT_PUBLIC_` 前缀，不会暴露给浏览器）。

## 常用命令

```bash
docker compose up -d             # 启动（后台）
docker compose logs -f backend   # 查看 Strapi 日志
docker compose logs -f frontend  # 查看前端日志
docker compose down              # 停止并删除容器
```

> 数据在项目目录内（`data/postgres` 等），`docker compose down` 不会清空数据。如需彻底重置数据库，删除 `data/postgres` 后重新 `up`：
> ```bash
> docker compose down
> sudo rm -rf data/postgres
> mkdir -p data/postgres && sudo chown -R 70:70 data/postgres
> docker compose up -d
> ```

## 热重载与依赖变更

源码已挂载到容器，修改 `backend/` 或 `frontend/` 下的代码会自动热重载。

**重要**：如果修改了 `package.json`（增删依赖），需在项目目录内重新安装：

```bash
docker run --rm -v "$PWD/backend":/opt/app -w /opt/app node:22-alpine npm install
sudo chown -R $(id -u):$(id -g) backend/node_modules
# 或对 frontend 同样执行
```

## 数据持久化（全部在项目目录内）

| 数据 | 位置 | 是否 gitignore |
|------|------|----------------|
| PostgreSQL 数据 | `data/postgres/` | ✅ |
| 后端依赖 | `backend/node_modules/` | ✅ |
| 前端依赖 | `frontend/node_modules/` | ✅ |
| Next.js 构建缓存 | `frontend/.next/` | ✅ |
| Strapi 上传媒体 | `backend/public/uploads/` | ✅ |

> 仅 Docker 镜像（`nextjs-strapi-backend` / `nextjs-strapi-frontend` / `node` / `postgres`）存放在 Docker 自身的镜像存储中，这是 Docker 的机制，无法更改。

## 生产部署提示

当前为开发模式（热重载）。生产环境建议：

1. 将 `backend` 的 `CMD` 改为 `npm run build && npm run start`，`frontend` 改为 `npm run build && npm run start`。
2. 去掉源码挂载卷，改用多阶段构建只拷贝产物。
3. 为 Strapi 配置真实的 `APP_KEYS`、`JWT_SECRET` 等密钥，并收紧数据库端口映射（去掉 `5432:5432` 暴露）。
