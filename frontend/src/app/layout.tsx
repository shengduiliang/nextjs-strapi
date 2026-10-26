import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "深圳市荣芯半导体有限公司",
  description:
    "荣芯半导体 — 高性能人体健康传感器与 MCU 芯片，赋能智能可穿戴与主动健康监测",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-[family-name:var(--font-noto-sans-sc)]">
        {children}
      </body>
    </html>
  );
}
