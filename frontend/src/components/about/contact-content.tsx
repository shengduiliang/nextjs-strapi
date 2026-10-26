"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { contactPageContent } from "@/lib/about-pages";
import type { ContactContent as ContactContentData } from "@/lib/cms/types";

type ContactContentProps = {
  content: ContactContentData;
};

export function ContactContent({ content }: ContactContentProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <aside className="rounded-md bg-white px-6 py-8 shadow-[0_4px_16px_rgba(11,37,75,0.06)] sm:px-8">
        <h1 className="text-[26px] font-bold text-[#0b254b] sm:text-[30px]">{content.company}</h1>
        <dl className="mt-8 space-y-6 text-base leading-8 text-[#666]">
          <div>
            <dt className="font-medium text-[#333]">地址</dt>
            <dd className="mt-1">{content.address}</dd>
          </div>
          <div>
            <dt className="font-medium text-[#333]">电话</dt>
            <dd className="mt-1">{content.phone}</dd>
          </div>
          <div>
            <dt className="font-medium text-[#333]">邮箱</dt>
            <dd className="mt-1">{content.email}</dd>
          </div>
        </dl>
      </aside>

      <section className="rounded-md bg-white px-6 py-8 shadow-[0_4px_16px_rgba(11,37,75,0.06)] sm:px-8">
        <h2 className="text-[26px] font-bold text-[#0b254b] sm:text-[30px]">{content.formTitle}</h2>
        <p className="mt-3 text-base leading-8 text-[#666]">{content.formIntro}</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {contactPageContent.fields.map((field) => (
            <label key={field.name} className="block">
              <span className="mb-2 block text-sm font-medium text-[#333]">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  required
                  rows={5}
                  className="w-full rounded-[3px] border border-[#d7e0ea] bg-[#f7f9fc] px-4 py-3 text-base text-[#333] outline-none transition-colors focus:border-[#0068b7]"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  required
                  className="h-11 w-full rounded-[3px] border border-[#d7e0ea] bg-[#f7f9fc] px-4 text-base text-[#333] outline-none transition-colors focus:border-[#0068b7]"
                />
              )}
            </label>
          ))}
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-[3px] bg-[#0068b7] px-8 text-sm text-white transition-colors hover:bg-[#0056a0]"
          >
            立即提交
          </button>
          {submitted ? (
            <p className="text-sm text-[#0068b7]">感谢您的留言，我们会尽快与您联系。</p>
          ) : null}
        </form>
      </section>
    </div>
  );
}
