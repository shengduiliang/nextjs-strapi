import type { Metadata } from "next";
import { productLines } from "@/lib/site";

export const metadata: Metadata = { title: "产品中心" };

export default function ProductsPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-cyan-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">产品中心</h1>
          <p className="mt-3 max-w-2xl text-blue-50">
            PPG / ECG / PPG+ECG 全系列健康传感芯片，覆盖消费级到医疗级应用。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {productLines.map((p) => (
            <section
              key={p.id}
              id={p.id}
              className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-blue-600">
                    {p.nameEn}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-cyan-600">
                    {p.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
                <div className="w-full shrink-0 rounded-xl bg-slate-50 p-6 lg:w-80">
                  <h3 className="text-sm font-semibold text-slate-900">
                    核心特性
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
