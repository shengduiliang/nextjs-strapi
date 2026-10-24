import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  company,
  productLines,
  applications,
  advantages,
  news,
  stats,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-medium tracking-widest text-blue-100 uppercase">
            专注 PPG / ECG 传感芯片
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {company.slogan}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50">
            {company.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow transition-colors hover:bg-blue-50"
            >
              了解产品
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="核心产品"
            subtitle="三大产品线，覆盖消费级到医疗级健康监测"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {productLines.map((p) => (
              <div
                key={p.id}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-sm font-semibold text-blue-600">
                  {p.nameEn}
                </div>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-cyan-600">{p.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
                <Link
                  href={`/products#${p.id}`}
                  className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="技术优势"
            subtitle="以自研核心技术，为健康监测设备注入可靠感知能力"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-slate-200 p-6 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <h3 className="text-lg font-bold text-slate-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            title="应用领域"
            subtitle="从消费级穿戴到医疗级设备，全面覆盖健康监测场景"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.name}
                className="rounded-xl border border-slate-800 bg-slate-800/50 p-6"
              >
                <h3 className="text-lg font-bold text-white">{app.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {app.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {app.products.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="关于芯脉"
                subtitle="扎根传感芯片，服务全民健康"
                dark={false}
              />
              <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600 lg:text-left">
                {company.intro}
              </p>
              <div className="mt-8 text-center lg:text-left">
                <Link
                  href="/about"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {company.founded}
                </div>
                <div className="mt-1 text-sm text-slate-500">成立于</div>
              </div>
              <div className="rounded-xl bg-cyan-50 p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600">医疗级</div>
                <div className="mt-1 text-sm text-slate-500">可靠性标准</div>
              </div>
              <div className="rounded-xl bg-cyan-50 p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600">全自研</div>
                <div className="mt-1 text-sm text-slate-500">模拟前端与算法</div>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {company.headquarters}
                </div>
                <div className="mt-1 text-sm text-slate-500">总部所在地</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="新闻动态" subtitle="了解公司最新进展与行业动态" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <Link
                key={n.id}
                href="/news"
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                    {n.category}
                  </span>
                  <span className="text-slate-400">{n.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {n.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                准备好为您的产品注入精准感知了吗？
              </h2>
              <p className="mt-2 text-blue-50">
                联系我们，获取产品规格书、参考设计与样品支持。
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-700 shadow transition-colors hover:bg-blue-50"
            >
              立即联系
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
