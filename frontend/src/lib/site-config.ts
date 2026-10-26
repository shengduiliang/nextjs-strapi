export type NavItem = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
  badge?: string;
};

export type FooterColumn = {
  title: string;
  titleHref?: string;
  links: FooterLink[];
  /** Second section title in the same column (e.g. 质量与可靠性) */
  secondary?: {
    title: string;
    href: string;
  };
};

export const ROUTES = {
  home: "/",
  products: "/products",
  productSerialNorFlash: "/products",
  solution: "/solution",
  solutionAutomotive: "/solution/automotive",
  quality: "/quality-and-reliability",
  sustainability: "/sustainability",
  about: "/about",
  career: "/about/career",
  contact: "/about/contact",
  news: "/about/news-and-event/news",
  newsEvent: "/about/news-and-event/news",
  mediaCoverage: "/about/news-and-event/news",
  legal: "/legal",
  privacy: "/privacy",
} as const;

export const newsBreadcrumbs = [
  { label: "首页", href: ROUTES.home },
  { label: "关于我们", href: ROUTES.about },
  { label: "新闻与活动", href: ROUTES.news },
  { label: "新闻" },
] as const;

export type NewsFeaturedSlide = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  image: string;
};

export const newsFeaturedSlides: NewsFeaturedSlide[] = [
  {
    title: "创新驱动，品质引领",
    date: "2026-03-16",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/innovation-driven-quality-led",
    image: "/images/home/news-1.jpg",
  },
  {
    title: "研发高品质的人体健康传感器",
    date: "2026-03-16",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/high-quality-health-sensors",
    image: "/images/home/news-2.jpg",
  },
  {
    title: "芯片的每一次突破都在重塑全球科技",
    date: "2026-03-16",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/chip-breakthrough-reshapes-tech",
    image: "/images/home/news-3.jpg",
  },
  {
    title: "半导体行业数字化供应链转型",
    date: "2026-03-16",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/semiconductor-supply-chain-digital",
    image: "/images/home/news-4.jpg",
  },
];

export type NewsPageItem = {
  dayMonth: string;
  year: string;
  title: string;
  excerpt: string;
  href: string;
};

export const newsPageItems: NewsPageItem[] = [
  {
    dayMonth: "03.16",
    year: "2026",
    title: "创新驱动，品质引领",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/innovation-driven-quality-led",
  },
  {
    dayMonth: "03.16",
    year: "2026",
    title: "研发高品质的人体健康传感器",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/high-quality-health-sensors",
  },
  {
    dayMonth: "03.16",
    year: "2026",
    title: "芯片的每一次突破都在重塑全球科技",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/chip-breakthrough-reshapes-tech",
  },
  {
    dayMonth: "03.16",
    year: "2026",
    title: "半导体行业数字化供应链转型",
    excerpt: "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    href: "/about/news-and-event/news/semiconductor-supply-chain-digital",
  },
];

export const newsPageTabs = [
  { label: "新闻", href: ROUTES.news, active: true },
] as const;

export const newsYearOptions = ["2026", "2025", "2024", "2023", "2022"] as const;

export const newsPageTotalPages = 1;


export const serialNorFlashBreadcrumbs = [
  { label: "首页", href: ROUTES.home },
  { label: "产品中心", href: ROUTES.products },
  { label: "传感器", href: ROUTES.products },
  { label: "健康传感器", href: ROUTES.products },
  { label: "GS6933" },
] as const;

export const serialNorFlashIntro = {
  title: "GS6933",
  paragraphs: [
    "GS6933 是荣芯半导体推出的高性能、高集成度 PPG/ECG 测量模拟前端芯片（AFE），面向智能手表、手环、戒指等可穿戴健康监测场景。",
    "产品聚焦人体健康传感器方向，帮助客户以差异化方案实现心率、心电等关键生理信号采集与处理。",
    "荣芯半导体持续扩展健康传感器与 MCU 产品布局，为智能可穿戴与主动健康监测提供可靠芯动力。",
  ],
  image: "/images/home/product-gs6933.png",
};

export type ProductTableRow = {
  partNumber: string;
  href?: string;
  status: "MP" | "UD" | "S" | "NR";
  density: string;
  voltage: string;
  package: string;
  temperature: string;
  frequency: string;
  features: string;
};

export const serialNorFlashVoltageOptions = ["1.8V", "3V"] as const;

export const serialNorFlashDensityOptions = [
  "512Kb",
  "1Mb",
  "2Mb",
  "4Mb",
  "8Mb",
  "16Mb",
  "32Mb",
  "64Mb",
  "128Mb",
  "256Mb",
  "512Mb",
  "1Gb",
  "2Gb",
] as const;

export const serialNorFlashProducts: ProductTableRow[] = [
  {
    partNumber: "GS6933",
    status: "MP",
    density: "—",
    voltage: "—",
    package: "WLCSP",
    temperature: "-40℃~85℃",
    frequency: "—",
    features: "PPG/ECG AFE",
  },
];

export const productResourceLinks = [
  {
    label: "Flash产品交叉检索",
    href: "/products",
    icon: "/images/products/resource-cross.svg",
  },
  {
    label: "全球销售网络",
    href: "/about",
    icon: "/images/products/resource-sales.svg",
  },
  {
    label: "产品介绍",
    href: "/products",
    icon: "/images/products/resource-brochure.svg",
  },
] as const;

export const productRelatedNewsItems = [
  {
    title: "双电压供电SPI NOR Flash助力 1.2V SoC 实现高性能与超低功耗平衡",
    date: "Aug 22,2025",
    href: "/about/news-and-event/news",
  },
  {
    title: "荣芯半导体Flash存储技术赋能AI IPC产业升级",
    date: "Jul 11,2025",
    href: "/about/news-and-event/news",
  },
  {
    title: "荣芯半导体GD55LX02GE系列荣膺“汽车电子·金芯奖之卓越产品奖”",
    date: "May 21,2025",
    href: "/about/news-and-event/news",
  },
] as const;

export const aboutIntro =
  "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。";

export const aboutAchievements = [
  {
    title: ["专注人体健康", "传感器芯片研发"],
    description: "以高品质健康传感器系列芯片为切入点，服务智能可穿戴与主动健康监测",
    icon: "/images/about/achieve-1.svg",
  },
  {
    title: ["高性能、高可靠性", "集成电路设计"],
    description: "从事高性能、高可靠性集成电路产品的研发和销售",
    icon: "/images/about/achieve-2.svg",
  },
  {
    title: ["智能可穿戴领域", "有影响力的供应商"],
    description: "开发差异化产品，为大众主动健康监测赋能",
    icon: "/images/about/achieve-3.svg",
  },
] as const;

export const aboutVision = {
  headings: ["研发高品质人体健康传感器", "赋能主动健康监测"],
  description:
    "公司核心方向覆盖健康传感器、温度/温湿度传感器及电机控制/低功耗 MCU，持续打造面向智能可穿戴的差异化芯片方案。",
};

export const aboutQualityText =
  "荣芯半导体坚持高标准的质量与可靠性要求，围绕人体健康传感器与 MCU 产品持续完善研发、验证与交付体系，为客户提供稳定可靠的芯片与本地化支持。";

export const aboutStats = [
  { value: "2021", unit: "年", label: "成立" },
  { value: "PPG/ECG", unit: "", label: "健康传感" },
  { value: "可穿戴", unit: "", label: "核心场景" },
] as const;

export const aboutCoreValues = [
  [
    { title: "追求卓越", image: "/images/about/value-1.jpg", tall: false },
    { title: "使命必达", image: "/images/about/value-2.jpg", tall: true },
  ],
  [
    { title: "共同成长", image: "/images/about/value-3.jpg", tall: true },
    { title: "正直诚信", image: "/images/about/value-4.jpg", tall: false },
  ],
  [
    { title: "开放创新", image: "/images/about/value-5.jpg", tall: false },
    { title: "勇于担当", image: "/images/about/value-6.jpg", tall: true },
  ],
] as const;

export const careerHero = {
  title: "加入我们",
  subtitle: "欢迎加入荣芯半导体大家庭",
  image: "/images/career/banner.png",
} as const;

export const careerRecruitCards = [
  {
    title: "社会招聘",
    icon: "/images/career/recruit-social.svg",
    href: ROUTES.career,
  },
  {
    title: "校园招聘",
    icon: "/images/career/recruit-campus.svg",
    href: ROUTES.career,
  },
] as const;

export const careerWhyChoose = {
  title: "为什么选择我们",
  image: "/images/career/why-choose.png",
  items: [
    {
      description:
        "荣芯半导体是一家致力于人体健康传感器与 MCU 芯片研发销售的集成电路设计公司。",
      highlight:
        "我们为员工提供具有竞争力的全面的薪酬体系和完善的福利待遇，并通过激励来表彰员工做出的贡献。",
    },
    {
      description:
        "无论是经验丰富的业界资深人士，还是初出茅庐的应届毕业生，都将有机会在荣芯半导体充分发挥才能，并得到更好的发展。",
      highlight:
        "我们欢迎所有积极向上并有志于进入半导体行业的人才加入我们的一流团队，迎接新挑战。",
    },
  ],
} as const;

export const careerLife = {
  title: "员工生活",
  description:
    "我们相信，优秀的团队离不开温暖的归属感。荣芯半导体重视每一位成员的成长与幸福感。通过丰富的文化活动、贴心的福利体系和充满活力的办公环境，我们让每一天都充满能量与灵感。",
  items: [
    {
      title: "同心二十载，羽动芯精彩——公司20周年羽毛球赛圆满收官兴",
      image: "/images/career/life-cover.jpg",
      href: "/about/career",
    },
  ],
} as const;

export const sustainabilityNavItems = [
  { label: "战略", href: "#strategy" },
  { label: "环境", href: "#environment" },
  { label: "社会", href: "#social" },
  { label: "治理", href: "#governance" },
  { label: "评级", href: "#ratings" },
  { label: "政策", href: "#policy" },
  { label: "新闻", href: "#news" },
  { label: "报告", href: "#reports" },
] as const;

export const sustainabilityReportLinks = [
  {
    label: "完整版",
    href: "/sustainability",
  },
  {
    label: "报告摘要",
    href: "/sustainability",
  },
] as const;

export const sustainabilityQuote = {
  lead: "荣芯半导体始终践行企业社会责任，将可持续性发展理念融入到公司运营的各个层面。",
  paragraphs: [
    "我们坚守初心、齐心协力，将「开放创新、使命必达」的价值观融入工作中的每一刻，在产品创新、低碳环保、员工发展与社会责任等方面做积极的践行者。",
  ],
};

export const sustainabilityPillars = [
  {
    title: "稳健发展",
    subtitle: "STEADY DEVELOPMENT",
    icon: "trending",
    image: "/images/home/esg-icon-1.svg",
  },
  {
    title: "共同成长",
    subtitle: "TEAMWORK",
    icon: "users",
    image: "/images/home/esg-icon-2.svg",
  },
  {
    title: "正直诚信",
    subtitle: "INTEGRITY",
    icon: "shield",
    image: "/images/home/esg-icon-3.svg",
  },
  {
    title: "低碳运营",
    subtitle: "LOW-CARBON OPERATION",
    icon: "leaf",
    image: "/images/home/esg-icon-4.svg",
  },
  {
    title: "引领创新",
    subtitle: "LEADING INNOVATION",
    icon: "sparkles",
    image: "/images/home/esg-icon-5.svg",
  },
] as const;

export const sustainabilityEsgSections = [
  {
    id: "environment",
    title: "环境",
    description:
      "荣芯半导体始终践行企业社会责任，倡导绿色环保理念。公司将绿色发展理念融入战略和运营层面，贯彻落实节能环保工作，持续探索节能降耗与废弃物处理的绿色途径，努力使业务运营对环境的影响降至最低，助力人与自然和谐共生的现代化建设。",
    href: "/sustainability",
    image: "/images/sustainability/environment.jpg",
  },
  {
    id: "social",
    title: "社会",
    description:
      "荣芯半导体坚持「以人为本，务实创新」，关注员工健康与福祉，与员工共同成长。视创新为公司的核心竞争力，打造高品质产品与服务。秉持生态共建的理念，积极履行对社会公众的责任。",
    href: "/sustainability",
    image: "/images/sustainability/social.jpg",
  },
  {
    id: "governance",
    title: "治理",
    description:
      "荣芯半导体持续提高公司治理水平与企业抗风险能力，坚持诚信经营、合规管理，保障廉洁从业，切实维护投资者利益，稳步提升公司价值。",
    href: "/sustainability",
    image: "/images/sustainability/governance.jpg",
  },
] as const;

export const sustainabilityRatings = [
  { name: "MSCI", value: "BB" },
  { name: "S&P Global CSA Score", value: "42" },
  { name: "CDP Climate Change / CDP Water Security", value: "B / C" },
  { name: "Wind", value: "AA" },
  { name: "EcoVadis", value: "59" },
] as const;

export const sustainabilityPolicies = [
  {
    title: "商业道德准则",
    href: "/about",
  },
  {
    title: "反商业贿赂合规政策",
    href: "/about",
  },
  {
    title: "应对气候变化政策",
    href: "/sustainability",
  },
  {
    title: "冲突矿产尽责管理政策",
    href: "/quality-and-reliability",
  },
  {
    title: "举报及举报人保护制度",
    href: "/sustainability",
  },
  {
    title: "荣芯半导体多元化、公平和包容性政策（DE&I）",
    href: "/sustainability",
  },
  {
    title: "供应商行为准则",
    href: "/sustainability",
  },
  {
    title: "供应链ESG管理制度",
    href: "/sustainability",
  },
  {
    title: "荣芯半导体产品生命周期政策",
    href: "/sustainability",
  },
  {
    title: "环境、健康与安全（EHS）政策",
    href: "/sustainability",
  },
  {
    title: "人权政策",
    href: "/sustainability",
  },
  {
    title: "生物多样性声明",
    href: "/sustainability",
  },
  {
    title: "信息安全政策",
    href: "/sustainability",
  },
] as const;

export const sustainabilityExplore = {
  title: "以人为本",
  description:
    "我们一直相信，人才是企业不断前进的源动力。我们一直践行，以人为本，务实创新……",
  cover: "/images/sustainability/explore-cover.jpg",
  videoSrc:
    "/about",
} as const;

export const sustainabilityNews = [
  {
    category: "新闻",
    title: "荣芯半导体正式加入联合国全球契约组织，积极践行可持续发展理念",
    date: "2024.07.31",
    href: "/about/news-and-event/news",
  },
  {
    category: "新闻",
    title: "荣芯半导体荣膺第十三届公益节「年度责任品牌」「ESG先锋企业」双料大奖",
    date: "2024.02.26",
    href: "/about/news-and-event/news",
  },
  {
    category: "新闻",
    title: "荣芯半导体荣获「2023年度中国非金融业上市公司ESG TOP 50」奖项",
    date: "2024.01.18",
    href: "/about/news-and-event/news",
  },
] as const;

export const qualityNavItems = [
  { label: "资质证书", href: "#zzzs" },
  { label: "环保证书", href: "#hbzs" },
  { label: "质量方针", href: "#zlfz" },
  { label: "环境方针", href: "#hjfz" },
  { label: "核心方向", href: "#hxfx" },
] as const;

export const qualityCertIntro =
  "质量体系建设与持续改善，是强化品质管理、提高公司效益、增强客户信心、扩大市场份额的关键途径之一，因此我们致力于为全球客户提供高品质产品。我们鼓励员工创新并倾听客户的声音，以便不断提升我们的产品、流程和服务质量。";

export const qualityQualificationCerts = [
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
] as const;

export const qualityEnvironmentCerts = [
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
  { title: "XXX证书", href: "#" },
] as const;

export const qualityPolicySection = {
  title: "质量方针",
  slogan: "以客户为导向、创新、可靠、国际视野、持续改进、永续发展",
  points: [
    {
      label: "创新",
      text: "从事高性能、高可靠性的集成电路产品的研发和销售。",
    },
    {
      label: "可靠",
      text: "以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品",
    },
    {
      label: "国际视野",
      text: "为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    },
  ],
  image: "/images/quality/policy-quality.jpg",
  imagePosition: "right" as const,
} as const;

export const qualityEnvironmentPolicySection = {
  title: "环境方针",
  slogan: "遵守法规、节能减排、推进可持续发展",
  points: [
    {
      label: "遵守法规",
      text: "从事高性能、高可靠性的集成电路产品的研发和销售。",
    },
    {
      label: "节能减排",
      text: "以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品",
    },
    {
      label: "可持续发展",
      text: "为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。",
    },
  ],
  image: "/images/quality/policy-environment.jpg",
  imagePosition: "left" as const,
} as const;

export const qualityCoreDirectionSection = {
  title: "核心方向",
  description:
    "与战略客户联合定义、设计、量产高性能高可靠芯片；实现设计、晶圆、封装全链条自主可控；完善心率、血氧基础算法，提供一体化解决方案；联合国际顶尖算法，拓展健康与运动高阶能力。",
  points: [
    {
      label: "创新",
      text: "从事高性能、高可靠性的集成电路产品的研发和销售。",
    },
    {
      label: "可靠",
      text: "以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品",
    },
  ],
  image: "/images/quality/core-direction.jpg",
  imagePosition: "right" as const,
} as const;

export type ProductMenuLink = {
  label: string;
  href: string;
};

export type ProductMenuGroup = {
  id: string;
  title: string;
  href: string;
  children?: ProductMenuLink[];
};

export type ProductMenuCategory = {
  id: string;
  label: string;
  href: string;
  columns: ProductMenuGroup[][];
  featured?: {
    title: string;
    productName: string;
    image: string;
    href: string;
  };
};

export const productMenuCategories: ProductMenuCategory[] = [
  {
    id: "sensor",
    label: "传感器",
    href: ROUTES.products,
    columns: [
      [
        {
          id: "health-sensor",
          title: "健康传感器",
          href: ROUTES.products,
        },
        {
          id: "temp-sensor",
          title: "温度传感器",
          href: ROUTES.products,
        },
        {
          id: "humidity-sensor",
          title: "温湿度传感器",
          href: ROUTES.products,
        },
      ],
    ],
    featured: {
      title: "重点推荐产品",
      productName: "GS6933",
      image: "/images/home/product-gs6933.png",
      href: "/products/gs6933",
    },
  },
  {
    id: "mcu",
    label: "MCU",
    href: ROUTES.products,
    columns: [
      [
        {
          id: "motor-mcu",
          title: "电机控制MCU",
          href: ROUTES.products,
        },
        {
          id: "low-power-mcu",
          title: "低功耗MCU",
          href: ROUTES.products,
        },
      ],
    ],
    featured: {
      title: "重点推荐产品",
      productName: "GS6933",
      image: "/images/home/product-gs6933.png",
      href: "/products/gs6933",
    },
  },
];

export type AboutMenuChild = {
  label: string;
  href: string;
};

export type AboutMenuItem = {
  label: string;
  href: string;
  icon:
    | "building"
    | "user-plus"
    | "newspaper"
    | "list"
    | "globe"
    | "book-open"
    | "file-check"
    | "handshake"
    | "phone";
  children?: AboutMenuChild[];
};

export const aboutMenuFeatured = {
  title: "重点推荐",
  description: "创新驱动，品质引领 — 荣芯半导体聚焦人体健康传感器芯片",
  href: ROUTES.news,
  image: "/images/layout/mega-featured.jpg",
} as const;

/** 关于我们下拉：与荣芯站一致，仅保留四项，不重复 */
export const aboutMenuItems: AboutMenuItem[] = [
  {
    label: "公司概况",
    href: ROUTES.about,
    icon: "building",
  },
  {
    label: "新闻动态",
    href: ROUTES.news,
    icon: "newspaper",
  },
  {
    label: "人才招募",
    href: ROUTES.career,
    icon: "user-plus",
  },
  {
    label: "联系我们",
    href: ROUTES.contact,
    icon: "phone",
  },
];

/** @deprecated 使用 aboutMenuItems */
export const aboutMenuLeftColumn = aboutMenuItems;
export const aboutMenuRightColumn: AboutMenuItem[] = [];
export const aboutMenuBottomItem: AboutMenuItem = aboutMenuItems[3]!;


export const mainNavItems: NavItem[] = [
  { label: "产品中心", href: ROUTES.products },
  { label: "应用领域", href: ROUTES.solution },
  { label: "技术资源", href: ROUTES.products },
  { label: "质量与可靠性", href: ROUTES.quality },
  { label: "关于我们", href: ROUTES.about },
];

export type SimpleNavMenuKey = "solutions" | "tech" | "sustainability";

export const solutionMegaMenu = {
  featured: {
    title: "应用方案推荐",
    description: "运动手表应用方案",
    href: "/solution/sports-watch",
    image: "/images/home/app-watch.jpg",
  },
  items: [
    { label: "运动手表", href: "/solution/sports-watch", icon: "consumer" as const },
    { label: "智能戒指", href: "/solution/smart-ring", icon: "mobile" as const },
    { label: "臂带", href: "/solution/armband", icon: "iot" as const },
    { label: "运动手环", href: "/solution/fitness-band", icon: "consumer" as const },
    { label: "耳机", href: "/solution/earbuds", icon: "mobile" as const },
    { label: "AI眼镜", href: "/solution/ai-glasses", icon: "tech" as const },
    { label: "胸带", href: "/solution/chest-strap", icon: "iot" as const },
  ],
} as const;

export const techMegaMenu = {
  featured: {
    title: "技术资源",
    description: "选型表与样品支持",
    href: ROUTES.products,
    image: "/images/products/intro-chip.jpg",
  },
  items: [
    { label: "选型表", href: ROUTES.products, icon: "resources" as const },
    { label: "替代产品型号", href: ROUTES.products, icon: "flash" as const },
    { label: "样品采购", href: ROUTES.contact, icon: "tools" as const },
  ],
} as const;

export const sustainabilityMegaMenu = {
  featured: {
    title: "质量与可靠性",
    description: "资质证书与质量方针",
    href: ROUTES.quality,
    image: "/images/quality/banner.jpg",
  },
  items: [
    { label: "资质证书", href: `${ROUTES.quality}#zzzs`, icon: "esg" as const },
    { label: "环保证书", href: `${ROUTES.quality}#hbzs`, icon: "environment" as const },
    { label: "质量方针", href: `${ROUTES.quality}#zlfz`, icon: "governance" as const },
    { label: "环境方针", href: `${ROUTES.quality}#hjfz`, icon: "environment" as const },
    { label: "核心方向", href: `${ROUTES.quality}#hxfx`, icon: "tech" as const },
  ],
} as const;

export const footerQuickLinks: NavItem[] = [
  { label: "法律声明", href: ROUTES.legal },
  { label: "隐私政策", href: ROUTES.privacy },
  { label: "网站地图", href: ROUTES.home },
  { label: "支持", href: ROUTES.about },
];

export const footerSocialItems: {
  label: string;
  icon: string;
  href?: string;
  qr?: string;
}[] = [
  {
    label: "微信",
    icon: "/images/layout/footer-social-1.png",
  },
  {
    label: "社媒2",
    icon: "/images/layout/footer-social-2.png",
  },
  {
    label: "社媒3",
    icon: "/images/layout/footer-social-3.png",
  },
  {
    label: "社媒4",
    icon: "/images/layout/footer-social-4.png",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "产品中心",
    links: [
      { label: "传感器", href: ROUTES.products },
      { label: "健康传感器", href: ROUTES.products },
      { label: "温度传感器", href: ROUTES.products },
      { label: "温湿度传感器", href: ROUTES.products },
      { label: "MCU", href: ROUTES.products },
      { label: "电机控制MCU", href: ROUTES.products },
      { label: "低功耗MCU", href: ROUTES.products },
    ],
  },
  {
    title: "快捷链接",
    links: [
      { label: "应用领域", href: ROUTES.solution },
      { label: "技术资源", href: ROUTES.products },
      { label: "质量与可靠性", href: ROUTES.quality },
      { label: "关于我们", href: ROUTES.about },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "公司概况", href: ROUTES.about },
      { label: "新闻动态", href: ROUTES.news },
      { label: "人才招募", href: ROUTES.career },
      { label: "联系我们", href: ROUTES.contact },
    ],
  },
];

export const hotProducts = [
  {
    name: "GS6933",
    description: "高性能高集成度 PPG ECG 测量模拟前端芯片 (AFE)",
    image: "/images/home/product-gs6933.png",
    href: ROUTES.products,
  },
  {
    name: "健康传感器",
    description: "PPG&ECG / 生物电 / CGM / 脑电EEG 系列方案",
    image: "/images/home/product-gs6933.png",
    href: ROUTES.products,
  },
  {
    name: "电机控制MCU",
    description: "面向电机控制场景的高可靠 MCU 方案",
    image: "/images/home/product-gs6933.png",
    href: ROUTES.products,
  },
  {
    name: "低功耗MCU",
    description: "面向可穿戴与便携设备的低功耗 MCU 方案",
    image: "/images/home/product-gs6933.png",
    href: ROUTES.products,
  },
] as const;

export const automotiveSolutionIntro = [
  "随着汽车电子技术的飞速发展，汽车芯片已成为车辆智能化和高效性能的关键要素，在汽车行业中的地位愈发重要。荣芯半导体依托其完善的汽车芯片研发和质量管理体系，不断推动技术和产品的创新。我们紧密关注汽车芯片的市场需求，提供稳定可靠的产品和技术解决方案，保障持续稳定的供应，并将零缺陷的质量管控理念融入到产品生命周期的各个环节。我们获得了ISO 26262: 2018汽车功能安全最高等级ASIL D流程认证证书，彰显了荣芯半导体高标准的车规级芯片研发实力。",
  "在产品布局上，荣芯半导体利用其多元化的产品线优势，为客户提供丰富的产品组合和差异化的增值点。我们的车规级芯片包括存储器（Flash）和32位通用型微控制器（MCU）。我们的存储器已实现从SPI NOR Flash到SPI NAND Flash的全面车规级产品覆盖，全球累计出货量突破2亿颗。我们的GD32A系列产品为汽车电气化的主流型应用需求开辟道路，与整车的资源需求高度契合，为客户提供面向汽车市场差异化应用的整体方案。",
] as const;

export const automotiveCertifications = [
  { label: "AEC-Q100" },
  { label: "ISO 26262" },
  { label: "TISAX AL3" },
  { label: "ISO/SAE 21434" },
  { label: "支持长期供货 (PLP)" },
  { label: "高可靠性" },
  { label: "严苛环境温度" },
] as const;

export const automotiveRelatedProducts = [
  {
    title: "SPI NOR Flash 车规产品",
    href: "/products",
  },
  {
    title: "SPI NAND Flash车规产品",
    href: "/products",
  },
  {
    title: "MCU 车规产品",
    href: "/products",
  },
  {
    title: "系统基础芯片 SBC",
    href: "/products",
  },
] as const;

export const automotiveTypicalSolutions = [
  {
    title: "车内降噪方案",
    href: "/solution",
    image: "/images/solution/automotive/solution-1.jpg",
  },
  {
    title: "电池管理系统验证方案",
    href: "/solution",
    image: "/images/solution/automotive/solution-2.jpg",
  },
  {
    title: "矩阵大灯验证方案",
    href: "/solution",
    image: "/images/solution/automotive/solution-3.jpg",
  },
  {
    title: "车身域控制器验证方案",
    href: "/solution",
    image: "/images/solution/automotive/solution-4.jpg",
  },
  {
    title: "汽车空调压缩机",
    href: "/solution",
    image: "/images/solution/automotive/solution-5.jpg",
  },
  {
    title: "汽车矩阵大灯",
    href: "/solution",
    image: "/images/solution/automotive/solution-6.jpg",
  },
  {
    title: "汽车UWB解决方案",
    href: "/solution",
    image: "/images/solution/automotive/solution-7.jpg",
  },
  {
    title: "车窗纹波防夹",
    href: "/solution",
    image: "/images/solution/automotive/solution-8.jpg",
  },
  {
    title: "24V/48V 汽车电机驱动",
    href: "/solution",
    image: "/images/solution/automotive/solution-9.jpg",
  },
] as const;

export const automotiveAdvantages = [
  { title: "多元的汽车芯片产品组合" },
  { title: "完善的生态与工具链" },
  { title: "构建多元弹性供应链" },
  { title: "车规级认证" },
] as const;

export const automotiveRelatedNewsItems = [
  {
    category: "新闻",
    title: "荣芯半导体GD25/55全系列车规级SPI NOR Flash荣获ISO 26262 ASIL D功能安全认证证书",
    href: "/about/news-and-event/news",
  },
  {
    category: "博客",
    title: "坚持长期主义，驾驭未来：荣芯半导体第二代车规MCU GD32A7系列亮相AEIF",
    href: "/about/news-and-event/news",
  },
  {
    category: "新闻",
    title: "强劲升级，荣芯半导体GD32A7系列全新一代车规级MCU震撼登场",
    href: "/about/news-and-event/news",
  },
  {
    category: "新闻",
    title: "荣芯半导体与TASKING达成战略合作，进一步丰富GD32车规MCU软件开发工具链",
    href: "/about/news-and-event/news",
  },
  {
    category: "新闻",
    title: "荣芯半导体荣获“智能汽车产业链TOP100创新企业”奖",
    href: "/about/news-and-event/news",
  },
] as const;

export const applicationAreas = [
  {
    title: "运动手表",
    image: "/images/solution/watch.jpg",
    href: "/solution/sports-watch",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
  {
    title: "智能戒指",
    image: "/images/solution/ring.jpg",
    href: "/solution/smart-ring",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
  {
    title: "臂带",
    image: "/images/solution/armband.jpg",
    href: "/solution/armband",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
  {
    title: "运动手环",
    image: "/images/solution/band.jpg",
    href: "/solution/fitness-band",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
  {
    title: "耳机",
    image: "/images/solution/earbuds.jpg",
    href: "/solution/earbuds",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
  {
    title: "AI眼镜",
    image: "/images/solution/glasses.jpg",
    href: "/solution/ai-glasses",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
  {
    title: "胸带",
    image: "/images/solution/armband.jpg",
    href: "/solution/chest-strap",
    description:
      "核心功能与价值：精准运动监测、全天候健康守护、专业训练指导，赋能智能可穿戴健康监测。",
  },
] as const;

/** 首页行业方案区块 */
export const industrySolutions = applicationAreas.slice(0, 6).map((item) => ({
  title: item.title,
  image: item.image,
  href: item.href,
}));

export const newsItems = [
  {
    category: "新闻",
    title: "创新驱动，品质引领",
    date: "2026.03.16",
    href: "/about/news-and-event/news/innovation-driven-quality-led",
    image: "/images/home/news-1.jpg",
  },
  {
    category: "新闻",
    title: "研发高品质的人体健康传感器",
    date: "2026.03.16",
    href: "/about/news-and-event/news/high-quality-health-sensors",
    image: "/images/home/news-2.jpg",
  },
  {
    category: "新闻",
    title: "芯片的每一次突破都在重塑全球科技",
    date: "2026.03.16",
    href: "/about/news-and-event/news/chip-breakthrough-reshapes-tech",
    image: "/images/home/news-3.jpg",
  },
  {
    category: "新闻",
    title: "半导体行业数字化供应链转型",
    date: "2026.03.16",
    href: "/about/news-and-event/news/semiconductor-supply-chain-digital",
    image: "/images/home/news-4.jpg",
  },
] as const;

export const storyItems = [
  {
    tag: "公司新闻",
    title: "创新驱动，品质引领",
    href: "/about/news-and-event/news/innovation-driven-quality-led",
    image: "/images/home/story-1.jpg",
  },
  {
    tag: "产品方向",
    title: "研发高品质的人体健康传感器",
    href: "/about/news-and-event/news/high-quality-health-sensors",
    image: "/images/home/story-2.jpg",
  },
  {
    tag: "行业观察",
    title: "半导体行业数字化供应链转型",
    href: "/about/news-and-event/news/semiconductor-supply-chain-digital",
    image: "/images/home/story-3.jpg",
  },
] as const;
