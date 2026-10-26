export type NewsArticleBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "image"; src: string; alt: string }
  | { type: "list"; items: string[] }
  | { type: "disclaimer"; content: string };

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  blocks: NewsArticleBlock[];
  nextSlug?: string;
};

const COMPANY_INTRO_P1 =
  "深圳市荣芯半导体有限公司成立于2021年，是一家集成电路设计公司，从事高性能、高可靠性的集成电路产品的研发和销售。";

const COMPANY_INTRO_P2 =
  "荣芯半导体以研发高品质的人体健康传感器系列芯片为切入点，开发差异化产品，为大众主动健康监测赋能，正成为智能可穿戴领域有一定影响力的芯片供应商。";

export const newsArticles: NewsArticle[] = [
  {
    slug: "innovation-driven-quality-led",
    title: "创新驱动，品质引领",
    date: "2026-03-16",
    nextSlug: "high-quality-health-sensors",
    blocks: [
      { type: "paragraph", content: COMPANY_INTRO_P1 },
      { type: "paragraph", content: COMPANY_INTRO_P2 },
      {
        type: "image",
        src: "/images/home/news-1.jpg",
        alt: "创新驱动，品质引领",
      },
      {
        type: "disclaimer",
        content: "关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。",
      },
    ],
  },
  {
    slug: "high-quality-health-sensors",
    title: "研发高品质的人体健康传感器",
    date: "2026-03-16",
    nextSlug: "chip-breakthrough-reshapes-tech",
    blocks: [
      { type: "paragraph", content: COMPANY_INTRO_P1 },
      { type: "paragraph", content: COMPANY_INTRO_P2 },
      {
        type: "image",
        src: "/images/home/news-2.jpg",
        alt: "研发高品质的人体健康传感器",
      },
      {
        type: "disclaimer",
        content: "关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。",
      },
    ],
  },
  {
    slug: "chip-breakthrough-reshapes-tech",
    title: "芯片的每一次突破都在重塑全球科技",
    date: "2026-03-16",
    nextSlug: "semiconductor-supply-chain-digital",
    blocks: [
      { type: "paragraph", content: COMPANY_INTRO_P1 },
      { type: "paragraph", content: COMPANY_INTRO_P2 },
      {
        type: "image",
        src: "/images/home/news-3.jpg",
        alt: "芯片的每一次突破都在重塑全球科技",
      },
      {
        type: "disclaimer",
        content: "关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。",
      },
    ],
  },
  {
    slug: "semiconductor-supply-chain-digital",
    title: "半导体行业数字化供应链转型",
    date: "2026-03-16",
    blocks: [
      { type: "paragraph", content: COMPANY_INTRO_P1 },
      { type: "paragraph", content: COMPANY_INTRO_P2 },
      {
        type: "image",
        src: "/images/home/news-4.jpg",
        alt: "半导体行业数字化供应链转型",
      },
      {
        type: "disclaimer",
        content: "关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。",
      },
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getAllNewsSlugs() {
  return newsArticles.map((article) => article.slug);
}

export function newsDetailPath(slug: string) {
  return `/about/news-and-event/news/${slug}`;
}
