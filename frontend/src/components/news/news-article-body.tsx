import Image from "next/image";

import type { NewsArticleBlock, TextNode } from "@/lib/news-articles";

type NewsArticleBodyProps = {
  blocks: NewsArticleBlock[];
};

function renderInline(nodes: TextNode[]): React.ReactNode {
  return nodes.map((node, i) => {
    let el: React.ReactNode = node.text;
    if (node.code) el = <code key={i}>{el}</code>;
    if (node.bold) el = <strong key={i}>{el}</strong>;
    if (node.italic) el = <em key={i}>{el}</em>;
    if (node.underline) el = <u key={i}>{el}</u>;
    return <span key={i}>{el}</span>;
  });
}

export function NewsArticleBody({ blocks }: NewsArticleBodyProps) {
  return (
    <div className="space-y-[11.5px] text-[16px] leading-[25px] text-[#333]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-[16px] leading-[25px] text-[#333]"
              >
                {renderInline(block.children)}
              </p>
            );
          case "heading":
            return (
              <h2
                key={index}
                className="pt-4 text-[24px] font-bold leading-9 text-[#0b254b]"
              >
                {renderInline(block.children)}
              </h2>
            );
          case "image":
            return (
              <figure key={index} className="flex justify-center py-3">
                <div className="relative aspect-[800/450] w-full max-w-[800px]">
                  <Image
                    src={block.image.url}
                    alt={block.image.alternativeText ?? ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 912px) 100vw, 800px"
                  />
                </div>
              </figure>
            );
          case "list":
            return (
              <ul
                key={index}
                className={`space-y-1 pl-4 ${
                  block.format === "ordered" ? "list-decimal" : "list-disc"
                }`}
              >
                {block.children.map((item, i) => (
                  <li
                    key={i}
                    className="text-[16px] leading-[25px] text-[#333]"
                  >
                    {renderInline(item.children)}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <p key={index} className="pt-2 text-[14px] leading-[14px] text-[#666]">
                {renderInline(block.children)}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
