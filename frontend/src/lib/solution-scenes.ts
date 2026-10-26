export type SolutionScene = {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  publishedAt: string;
  excerpt: string;
  featuresTitle: string;
  features: readonly { title: string; description: string }[];
};

/** 荣芯站当前各场景详情文案一致，按官网迁移 */
const sharedFeatures = [
  {
    title: "精准运动监测",
    description:
      "支持跑步、骑行、游泳、HIIT等多种运动模式，记录距离、配速、心率、步频、垂直振幅等关键数据，部分高端型号还提供跑步姿态分析与训练负荷评估，助力跑者改善跑姿、避免受伤。",
  },
  {
    title: "全天候健康守护",
    description:
      "持续监测心率、血氧饱和度、HRV（心率变异性）、睡眠质量及女性生理周期。部分产品引入身体电量（Body Battery）系统，结合压力水平与恢复状态，智能建议最佳训练时机。",
  },
  {
    title: "专业训练指导",
    description:
      "内置结构化训练课程（如Zepp教练、Garmin Coach），支持自定义训练计划、导入高手模板，甚至提供HYROX赛事全流程支持（备赛→测试→比赛）的专属功能，适合混合训练人群。",
  },
  {
    title: "长续航与强环境适应性",
    description:
      "主流运动手表智能模式续航达11天以上，GPS持续使用可达26小时以上，满足马拉松及长途徒步需求；具备5ATM及以上防水等级，耐高温、抗冲击，适应恶劣户外环境。",
  },
  {
    title: "智能互联体验",
    description:
      "支持消息提醒、NFC支付、离线音乐播放、蓝牙通话等功能，部分新品已实现独立通信能力（内置SIM卡槽+4G网络），真正摆脱手机依赖。",
  },
] as const;

const sharedExcerpt =
  "核心功能与价值 1、精准运动监测支持跑步、骑行、游泳、HIIT等多种运动模式，记录距离、配速、心率、步频等关键数据。2、全天候健康守护持续监测心率、血氧饱和度、HRV、睡眠质量及女性生理周期。";

export const solutionScenes: readonly SolutionScene[] = [
  {
    slug: "sports-watch",
    title: "运动手表应用解决方案",
    shortTitle: "运动手表",
    image: "/images/solution/watch.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
  {
    slug: "smart-ring",
    title: "戒指应用解决方案",
    shortTitle: "智能戒指",
    image: "/images/solution/ring.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
  {
    slug: "armband",
    title: "臂带应用解决方案",
    shortTitle: "臂带",
    image: "/images/solution/armband.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
  {
    slug: "fitness-band",
    title: "运动手环应用解决方案",
    shortTitle: "运动手环",
    image: "/images/solution/band.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
  {
    slug: "earbuds",
    title: "耳机应用解决方案",
    shortTitle: "耳机",
    image: "/images/solution/earbuds.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
  {
    slug: "ai-glasses",
    title: "AI眼镜应用解决方案",
    shortTitle: "AI眼镜",
    image: "/images/solution/glasses.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
  {
    slug: "chest-strap",
    title: "胸带应用解决方案",
    shortTitle: "胸带",
    image: "/images/solution/armband.jpg",
    publishedAt: "2026-03-16",
    excerpt: sharedExcerpt,
    featuresTitle: "核心功能与价值",
    features: sharedFeatures,
  },
] as const;

export function getSolutionScene(slug: string) {
  return solutionScenes.find((scene) => scene.slug === slug);
}

export function getSolutionSceneHref(slug: string) {
  return `/solution/${slug}`;
}

export function getAdjacentSolutionScenes(slug: string) {
  const index = solutionScenes.findIndex((scene) => scene.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? solutionScenes[index - 1] : null,
    next: index < solutionScenes.length - 1 ? solutionScenes[index + 1] : null,
  };
}
