export type TextNode = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

export type NewsArticleBlock =
  | { type: "paragraph"; children: TextNode[] }
  | { type: "heading"; level: number; children: TextNode[] }
  | { type: "image"; image: { url: string; alternativeText?: string } }
  | {
      type: "list";
      format: "ordered" | "unordered";
      children: { type: "list-item"; children: TextNode[] }[];
    }
  | { type: "quote"; children: TextNode[] };

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  blocks: NewsArticleBlock[];
  nextSlug?: string;
};

function paragraph(text: string): NewsArticleBlock {
  return { type: "paragraph", children: [{ type: "text", text }] };
}

function image(url: string, alt: string): NewsArticleBlock {
  return { type: "image", image: { url, alternativeText: alt } };
}

function disclaimer(text: string): NewsArticleBlock {
  return { type: "quote", children: [{ type: "text", text }] };
}

export function blockText(block: { children?: TextNode[] }): string {
  return (block.children ?? []).map((c) => c.text).join("");
}

export function firstParagraphText(blocks: NewsArticleBlock[]): string {
  const p = blocks.find((b) => b.type === "paragraph");
  return p && p.type === "paragraph" ? blockText(p) : "";
}

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
      paragraph(COMPANY_INTRO_P1),
      paragraph(COMPANY_INTRO_P2),
      image("/images/home/news-1.jpg", "创新驱动，品质引领"),
      disclaimer("关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。"),
    ],
  },
  {
    slug: "high-quality-health-sensors",
    title: "研发高品质的人体健康传感器",
    date: "2026-03-16",
    nextSlug: "chip-breakthrough-reshapes-tech",
    blocks: [
      paragraph(COMPANY_INTRO_P1),
      paragraph(COMPANY_INTRO_P2),
      image("/images/home/news-2.jpg", "研发高品质的人体健康传感器"),
      disclaimer("关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。"),
    ],
  },
  {
    slug: "chip-breakthrough-reshapes-tech",
    title: "芯片的每一次突破都在重塑全球科技",
    date: "2026-03-16",
    nextSlug: "semiconductor-supply-chain-digital",
    blocks: [
      paragraph(COMPANY_INTRO_P1),
      paragraph(COMPANY_INTRO_P2),
      image("/images/home/news-3.jpg", "芯片的每一次突破都在重塑全球科技"),
      disclaimer("关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。"),
    ],
  },
  {
    slug: "semiconductor-supply-chain-digital",
    title: "半导体行业数字化供应链转型",
    date: "2026-03-16",
    blocks: [
      paragraph(COMPANY_INTRO_P1),
      paragraph(COMPANY_INTRO_P2),
      image("/images/home/news-4.jpg", "半导体行业数字化供应链转型"),
      disclaimer("关于荣芯半导体：专注高性能、高可靠性集成电路产品的研发与销售。"),
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
