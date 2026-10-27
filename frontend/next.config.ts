import type { NextConfig } from "next";

const STRAPI_URL = process.env.STRAPI_URL_INTERNAL ?? "http://localhost:1337";

const nextConfig: NextConfig = {
  // 允许局域网内其他设备访问开发服务器（解决 HMR 等开发资源的跨域拦截）
  allowedDevOrigins: ["192.168.1.15"],
  // 把 Strapi 媒体库的 /uploads/* 代理到后端，让前端同源即可访问上传的图片
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${STRAPI_URL}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
