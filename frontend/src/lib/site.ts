export type NavItem = { label: string; href: string };

export const company = {
  name: "芯脉半导体",
  nameEn: "XinMai Semiconductor",
  slogan: "让每一颗心跳都被精准感知",
  description:
    "芯脉半导体是一家专注于 PPG / ECG 光学与心电传感芯片设计的无晶圆厂（Fabless）半导体公司，围绕可穿戴设备与医疗健康场景，提供高性能、低功耗的模拟前端芯片与一站式信号处理方案。",
  intro:
    "公司自成立以来，始终专注于生命体征传感芯片的自主研发，产品覆盖 PPG 光学心率传感器、ECG 心电采集芯片以及 PPG+ECG 一体化健康监测芯片，已广泛应用于智能手表、智能手环、TWS 耳机、医疗级心电监测与远程健康管理等领域。",
  founded: 2018,
  headquarters: "上海市浦东新区",
  email: "sales@xinmai.example.com",
  phone: "+86 21 6888 0000",
};

export const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "产品中心", href: "/products" },
  { label: "应用领域", href: "/applications" },
  { label: "新闻中心", href: "/news" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export type ProductLine = {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  features: string[];
};

export const productLines: ProductLine[] = [
  {
    id: "ppg",
    name: "PPG 光学心率传感器芯片",
    nameEn: "PPG Sensor",
    tagline: "高信噪比 · 多波长 · 超低功耗",
    description:
      "面向可穿戴设备的光电容积脉搏波（PPG）模拟前端芯片，集成多波长 LED 驱动、光电二极管与高精度 AFE，实现心率、血氧（SpO₂）与血压趋势的连续监测。",
    features: [
      "多波长 LED 驱动（绿 / 红 / 红外）",
      "高 SNR 模拟前端与高动态范围 ADC",
      "内置环境光抵消（Ambient Light Cancel）",
      "典型工作电流 < 50μA，超低功耗",
      "支持 SpO₂、HRV 与血压趋势检测",
    ],
  },
  {
    id: "ecg",
    name: "ECG 心电采集芯片",
    nameEn: "ECG AFE",
    tagline: "医疗级 · 低噪声 · 高输入阻抗",
    description:
      "医疗级单导 / 多导心电（ECG）模拟前端芯片，内置高精度 ADC、右腿驱动与起搏检测，适用于动态心电、心电贴、房颤筛查等医疗健康场景。",
    features: [
      "输入阻抗 > 1GΩ",
      "等效输入噪声 < 8μVpp",
      "内置右腿驱动（RLD）与导联脱落检测",
      "支持起搏信号检测",
      "通过医疗级可靠性认证",
    ],
  },
  {
    id: "ppg-ecg",
    name: "PPG + ECG 一体化健康监测芯片",
    nameEn: "PPG+ECG SoC",
    tagline: "双模态融合 · 高集成 · 算法内嵌",
    description:
      "将 PPG 与 ECG 采集链路高度集成于单颗芯片，配合内置信号处理引擎，实现血压、心率、血氧、HRV 等多参数一体化监测，显著降低系统功耗与体积。",
    features: [
      "PPG + ECG 双通道高度集成",
      "内置多参数健康算法引擎",
      "单芯片方案，精简 BOM 与 PCB 面积",
      "支持血压趋势与房颤（AFib）筛查",
      "工业级温度范围（-40℃ ~ 85℃）",
    ],
  },
];

export type Application = {
  name: string;
  description: string;
  products: string[];
};

export const applications: Application[] = [
  {
    name: "智能手表 / 手环",
    description:
      "全天候心率、血氧、睡眠与压力监测，为消费级可穿戴提供精准、低功耗的生命体征采集。",
    products: ["PPG", "PPG+ECG"],
  },
  {
    name: "TWS 入耳式耳机",
    description:
      "利用入耳结构实现耳内心率与运动状态监测，赋能健康耳机这一新品类。",
    products: ["PPG"],
  },
  {
    name: "医疗级可穿戴设备",
    description:
      "动态心电（Holter）、心电贴、房颤筛查等医疗健康设备的高精度心电采集。",
    products: ["ECG", "PPG+ECG"],
  },
  {
    name: "运动与康复监测",
    description:
      "运动过程中心率、负荷与恢复度监测，服务专业运动与康复训练场景。",
    products: ["PPG", "PPG+ECG"],
  },
  {
    name: "远程医疗 / 家庭健康",
    description:
      "面向远程诊疗与慢病管理的多参数健康数据采集终端。",
    products: ["PPG+ECG"],
  },
  {
    name: "睡眠与压力管理",
    description:
      "睡眠分期、呼吸暂停初筛与压力评估等连续健康监测应用。",
    products: ["PPG", "PPG+ECG"],
  },
];

export const advantages = [
  {
    title: "高精度采集",
    description: "自研低噪声模拟前端与高动态范围 ADC，确保微弱生理信号的精准捕获。",
  },
  {
    title: "超低功耗",
    description: "针对可穿戴场景深度优化的电源架构，显著延长设备续航。",
  },
  {
    title: "高集成度",
    description: "PPG + ECG 单芯片融合，精简 BOM 与 PCB 面积，加速产品上市。",
  },
  {
    title: "医疗级可靠性",
    description: "严格的质量体系与可靠性验证，满足医疗健康设备准入要求。",
  },
  {
    title: "算法内嵌",
    description: "内置心率、血氧、房颤、血压趋势等算法引擎，降低客户开发门槛。",
  },
  {
    title: "完善生态",
    description: "提供参考设计、SDK 与全流程技术支持，帮助客户快速量产。",
  },
];

export const stats = [
  { value: "10+", label: "授权专利" },
  { value: "5亿+", label: "累计出货芯片" },
  { value: "100+", label: "合作客户" },
  { value: "40%", label: "研发人员占比" },
];

export type NewsItem = {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
};

export const news: NewsItem[] = [
  {
    id: 1,
    date: "2026-10-12",
    category: "产品发布",
    title: "发布新一代 PPG+ECG 一体化健康监测芯片 XM3000",
    summary:
      "全新 XM3000 系列将 PPG 与 ECG 采集链路融合于单颗芯片，内置多参数算法引擎，助力客户打造更轻薄、更长续航的健康可穿戴设备。",
  },
  {
    id: 2,
    date: "2026-09-05",
    category: "公司动态",
    title: "公司完成 B 轮融资，加速医疗级芯片研发",
    summary:
      "本轮融资将用于医疗级心电芯片的研发投入与量产产线扩充，进一步巩固公司在健康传感芯片领域的技术优势。",
  },
  {
    id: 3,
    date: "2026-08-20",
    category: "行业合作",
    title: "与多家头部智能穿戴厂商达成战略合作",
    summary:
      "公司 PPG 光学心率传感器芯片进入多家头部智能手表与手环品牌的供应链，累计出货量再创新高。",
  },
];
