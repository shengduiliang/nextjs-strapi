# 荣芯半导体官网（Next.js + Strapi + PostgreSQL）

## 本地开发

```bash
cp .env.example .env
mkdir -p data/postgres data/uploads
docker compose up -d --build
```

- 官网：http://localhost:3000
- Strapi：http://localhost:1337/admin

## 腾讯云 4G 机器（不要在服务器上 --build）

`docker compose up --build` 会把 4G 机器打挂。请在本机编好镜像再上传：

**本机：**

```bash
# 若还没有生产镜像，先构建（需 8G+ 内存）
docker compose build

# 打包
docker save nextjs-strapi-backend:latest nextjs-strapi-frontend:latest | gzip > nextjs-strapi-images.tar.gz
scp nextjs-strapi-images.tar.gz ubuntu@服务器IP:~/nextjs-strapi/
```

**服务器（控制台重启救活后）：**

```bash
cd ~/nextjs-strapi
git pull
cp -n .env.example .env   # 配好密钥

# 加 swap
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile

gunzip -c nextjs-strapi-images.tar.gz | docker load
docker compose down
docker compose up -d      # 不要加 --build
```

## 常用命令

```bash
docker compose logs -f
docker compose down
```
