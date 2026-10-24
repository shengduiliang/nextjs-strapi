import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "关于我们" };

const values = [
  {
    title: "愿景",
    description: "成为全球领先的生命体征传感芯片供应商，让健康监测无处不在。",
  },
  {
    title: "使命",
    description: "以高性能、低功耗的传感芯片，助力每一个人更便捷地了解自身健康。",
  },
  {
    title: "价值观",
    description: "以客户为中心，以技术为驱动，务实创新，长期主义。",
  },
];

const milestones = [
  { year: "2018", text: "公司成立，聚焦 PPG 光学传感芯片研发" },
  { year: "2020", text: "首款 PPG 心率传感器芯片量产，进入消费级穿戴市场" },
  { year: "2022", text: "推出医疗级 ECG 心电采集芯片，拓展医疗健康领域" },
  { year: "2024", text: "发布 PPG+ECG 一体化健康监测芯片，累计出货突破 3 亿颗" },
  { year: "2026", text: "完成 B 轮融资，深化多参数健康监测算法与芯片布局" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-700 to-cyan-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">关于我们</h1>
          <p className="mt-3 max-w-2xl text-blue-50">
            {company.slogan}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="公司简介" />
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            {company.intro}
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-slate-200 p-6 text-center"
              >
                <h3 className="text-lg font-bold text-blue-600">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="发展历程" />
          <div className="mx-auto mt-12 max-w-3xl">
            <ol className="relative space-y-8 border-l border-slate-300 pl-8">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[41px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-600 bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  </span>
                  <div className="text-sm font-bold text-blue-600">
                    {m.year}
                  </div>
                  <p className="mt-1 text-slate-600">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
