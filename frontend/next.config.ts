import type { NextConfig } from "next";

const STRAPI_URL = process.env.STRAPI_URL_INTERNAL ?? "http://localhost:1337";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: { ignoreBuildErrors: true },
  allowedDevOrigins: ["192.168.1.15"],
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
