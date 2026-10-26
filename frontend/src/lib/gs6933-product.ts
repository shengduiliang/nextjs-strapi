export const gs6933Product = {
  breadcrumbs: [
    { label: "首页", href: "/" },
    { label: "PPG&ECG", href: "/products" },
    { label: "GS6933" },
  ],
  name: "GS6933",
  status: "量产中",
  tagline: "高性能4通道PPG单通道ECG健康传感器模拟前端AFE",
  sampleHref: "/about/contact",
  datasheets: [
    {
      label: "健康传感器模拟前端产品规格书 GS6933.pdf",
      lang: "CN",
      href: "/docs/GS6933-datasheet-cn.pdf",
      badge: "/images/products/badge-cn.png",
    },
    {
      label: "Health Sensor AFE Product Datasheet GS6933.pdf",
      lang: "EN",
      href: "/docs/GS6933-datasheet-cn.pdf",
      badge: "/images/products/badge-en.png",
    },
  ],
  heroImage: "/images/products/gs6933-hero.png",
  blockDiagram: "/images/products/gs6933-block.png",
  bannerImage: "/images/products/banner.jpg",
  description: [
    "GS6933 是一款高性能高集成度 PPG ECG 测量模拟前端芯片（AFE），可用于 PPG 原理的心率（HR）、脉搏血氧饱和度（SpO2）及心电图（ECG）等生命体征监测。",
    "其中集成了 4 路高边 PMOS 开关和 4 路独立的 LED 驱动器，可驱动 16 路 LED；4 路差分 PD（Photodiode），4 路可同步工作的高精度 PPG 信号链路；1 路高精度 ECG 信号链通路；数字信号处理、中断、SRAM、SPI 及 I2C 接口电路。",
    "GS6933 为一个测量周期（PRF）提供了多达 32 个可灵活配置的测量时隙（Slot）。芯片集成一/二阶数字环境光消除功能，对 DC 和 AC 环境光均具有很好的抑制能力；同时集成硬件自动调光功能，并支持光学和阻抗组合的佩戴检测。",
    "ECG 信号链路包含低噪声仪表放大器、低通滤波器以及高精度 ADC，搭配灵活的 Lead 检测功能，实现高性能心电信号测量。在高灵活度与高性能的同时，GS6933 还具有小封装与低功耗特点，适用于智能手表、智能手环等可穿戴设备。",
  ],
  documentSections: [
    {
      title: "数据手册",
      rows: [
        {
          name: "GS6933 产品规格书",
          version: "V01",
          date: "2026/3/26",
          cnHref: "/docs/GS6933-datasheet-cn.pdf",
          enHref: "/docs/GS6933-datasheet-cn.pdf",
        },
      ],
    },
    {
      title: "用户手册",
      rows: [
        {
          name: "用户手册",
          version: "—",
          date: "—",
          cnHref: null,
          enHref: null,
        },
      ],
    },
    {
      title: "勘误表",
      rows: [
        {
          name: "勘误表",
          version: "—",
          date: "—",
          cnHref: null,
          enHref: null,
        },
      ],
    },
  ],
  tools: [{ label: "评估工具包", note: "请联系销售获取开发与评估支持", href: "/about/contact" }],
  applications: [
    "心率（HR），动态心率检测",
    "血氧（SpO2），支持多通道血氧",
    "心电图测量",
  ],
} as const;
