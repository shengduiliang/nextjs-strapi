import type { Metadata } from "next";

import { BackToTop } from "@/components/home/back-to-top";
import { LegalDocument } from "@/components/legal/legal-document";
import { legalNoticePage } from "@/lib/legal-pages";

export const metadata: Metadata = {
  title: "法律声明 | 荣芯半导体",
  description: "深圳市荣芯半导体有限公司网站法律声明与版权说明。",
};

export default function LegalNoticePage() {
  return (
    <>
      <LegalDocument title={legalNoticePage.title} paragraphs={legalNoticePage.paragraphs} />
      <BackToTop />
    </>
  );
}
