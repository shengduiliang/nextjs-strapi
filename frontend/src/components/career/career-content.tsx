"use client";

import { useRef, useState } from "react";

import { careerPageContent } from "@/lib/about-pages";

export function CareerContent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  return (
    <div className="space-y-12">
      <div className="rounded-md bg-white px-6 py-8 shadow-[0_4px_16px_rgba(11,37,75,0.06)] sm:px-10 sm:py-10">
        <h1 className="text-[28px] font-bold text-[#0b254b] sm:text-[32px]">
          {careerPageContent.title}
        </h1>
        <p className="mt-3 text-base leading-8 text-[#666]">{careerPageContent.subtitle}</p>

        <div className="mt-8 rounded-md border border-dashed border-[#c9d5e4] bg-[#f7f9fc] px-5 py-6">
          <p className="text-base font-medium text-[#333]">简历模版下载 / 立即上传</p>
          <p className="mt-2 text-sm leading-6 text-[#999]">{careerPageContent.resumeTip}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png,.gif,.doc,.ppt,.pptx,.docx,.xls,.xlsx,.zip,.rar,.7z,.gz"
              onChange={(event) => {
                const file = event.target.files?.[0];
                setFileName(file ? file.name : "");
              }}
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex h-11 items-center justify-center rounded-[3px] bg-[#0068b7] px-6 text-sm text-white transition-colors hover:bg-[#0056a0]"
            >
              立即上传
            </button>
            <span className="truncate text-sm text-[#666]">
              {fileName || "未选择文件"}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#0b254b]">
          • {careerPageContent.moreJobsLabel}
        </h2>
        <ul className="mt-6 space-y-6">
          {careerPageContent.jobs.map((job) => (
            <li
              key={job.title}
              className="rounded-md bg-white px-6 py-7 shadow-[0_4px_16px_rgba(11,37,75,0.06)] sm:px-8"
            >
              <h3 className="text-xl font-bold text-[#0b254b]">{job.title}</h3>
              <div className="mt-5 space-y-4 text-base leading-8 text-[#666]">
                <div>
                  <p className="font-medium text-[#333]">岗位职责：</p>
                  <ol className="mt-2 space-y-1">
                    {job.responsibilities.map((item, index) => (
                      <li key={item}>
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="font-medium text-[#333]">任职要求：</p>
                  <ol className="mt-2 space-y-1">
                    {job.requirements.map((item, index) => (
                      <li key={item}>
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="space-y-1 pt-2 text-[#333]">
                  <p>邮箱：{job.email}</p>
                  <p>电话：{job.phone}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
