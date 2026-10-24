import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 允许局域网内其他设备访问开发服务器（解决 HMR 等开发资源的跨域拦截）
  allowedDevOrigins: ["192.168.1.15"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
