import type { Metadata } from "next";

import { BackToTop } from "@/components/home/back-to-top";
import { LegalDocument } from "@/components/legal/legal-document";
import { privacyPolicyPage } from "@/lib/legal-pages";

export const metadata: Metadata = {
  title: "隐私政策 | 荣芯半导体",
  description: "深圳市荣芯半导体有限公司网站隐私政策与个人信息保护说明。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalDocument title={privacyPolicyPage.title} paragraphs={privacyPolicyPage.paragraphs} />
      <BackToTop />
    </>
  );
}
