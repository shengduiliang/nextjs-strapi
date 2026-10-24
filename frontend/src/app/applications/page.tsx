import type { Metadata } from "next";
import { applications } from "@/lib/site";

export const metadata: Metadata = { title: "应用领域" };

export default function ApplicationsPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-cyan-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">应用领域</h1>
          <p className="mt-3 max-w-2xl text-blue-50">
            从消费级穿戴到医疗级设备，芯脉芯片全面覆盖健康监测场景。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
                {app.name.slice(0, 1)}
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {app.name}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                {app.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {app.products.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
