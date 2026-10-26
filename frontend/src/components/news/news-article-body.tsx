import Image from "next/image";

import type { NewsArticleBlock } from "@/lib/news-articles";

type NewsArticleBodyProps = {
  blocks: NewsArticleBlock[];
};

const ALLOWED_TAGS = new Set(["strong", "b", "em", "i", "a", "br", "span"]);

/** Minimal sanitizer for paragraph HTML produced by the admin editor. */
function sanitizeInlineHtml(input: string) {
  if (!input.includes("<")) return input;

  return input
    .replace(/<\/?([a-z0-9]+)(\s[^>]*)?>/gi, (match, tagName: string) => {
      const tag = tagName.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) return "";
      if (tag === "br") return "<br />";
      if (match.startsWith("</")) return `</${tag}>`;
      if (tag === "a") {
        const href = /href\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(match);
        const raw = href?.[2] ?? href?.[3] ?? href?.[4] ?? "";
        if (!raw || raw.startsWith("javascript:")) return "<span>";
        return `<a href="${raw.replaceAll('"', "")}" target="_blank" rel="noreferrer">`;
      }
      return `<${tag}>`;
    })
    .replace(/on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
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
                className="text-[16px] leading-[25px] text-[#333] [&_a]:text-[#0068b7] [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: sanitizeInlineHtml(block.content) }}
              />
            );
          case "heading":
            return (
              <h2
                key={index}
                className="pt-4 text-[24px] font-bold leading-9 text-[#0b254b]"
              >
                {block.content}
              </h2>
            );
          case "image":
            return (
              <figure key={index} className="flex justify-center py-3">
                <div className="relative aspect-[800/450] w-full max-w-[800px]">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 912px) 100vw, 800px"
                  />
                </div>
              </figure>
            );
          case "list":
            return (
              <ul key={index} className="list-disc space-y-1 pl-4">
                {block.items.map((item) => (
                  <li key={item} className="text-[16px] leading-[25px] text-[#333]">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "disclaimer":
            return (
              <p key={index} className="pt-2 text-[14px] leading-[14px] text-[#666]">
                {block.content}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
