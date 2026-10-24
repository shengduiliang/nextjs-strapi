import type { Metadata } from "next";
import { news } from "@/lib/site";

export const metadata: Metadata = { title: "新闻中心" };

export default function NewsPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-cyan-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">新闻中心</h1>
          <p className="mt-3 max-w-2xl text-blue-50">
            公司最新进展、产品发布与行业合作动态。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {news.map((n) => (
            <article
              key={n.id}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                  {n.category}
                </span>
                <span className="text-slate-400">{n.date}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                {n.title}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">{n.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
