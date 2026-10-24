import type { Metadata } from "next";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "联系我们" };

const channels = [
  {
    title: "商务合作",
    description: "芯片选型、样品申请、批量采购与方案合作。",
    email: company.email,
  },
  {
    title: "技术支持",
    description: "参考设计、SDK 与开发过程中遇到的技术问题。",
    email: "support@xinmai.example.com",
  },
  {
    title: "媒体与公关",
    description: "媒体采访、品牌合作与市场活动相关事务。",
    email: "pr@xinmai.example.com",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-cyan-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">联系我们</h1>
          <p className="mt-3 max-w-2xl text-blue-50">
            无论您是芯片选型、方案合作还是技术支持，我们都期待与您交流。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* 联系方式 */}
          <div className="lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-1">
              {channels.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h2 className="text-lg font-bold text-slate-900">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">{c.description}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">公司信息</h2>
              <dl className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 font-medium text-slate-500">
                    电话
                  </dt>
                  <dd>{company.phone}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 font-medium text-slate-500">
                    邮箱
                  </dt>
                  <dd>{company.email}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 font-medium text-slate-500">
                    地址
                  </dt>
                  <dd>{company.headquarters}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 留言表单 */}
          <div className="lg:col-span-2">
            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">在线留言</h2>
              <p className="mt-1 text-sm text-slate-500">
                填写信息，我们会尽快与您联系。
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    公司
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="公司名称"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    邮箱
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    留言内容
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="请简要描述您的需求…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  提交留言
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
