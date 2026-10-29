FROM node:22-bookworm-slim
WORKDIR /opt/app

RUN npm config set registry https://registry.npmmirror.com

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN mkdir -p public/uploads

ENV HOST=0.0.0.0
ENV PORT=1337
EXPOSE 1337

CMD ["npm", "run", "develop"]
