import Link from "next/link";
import { company, navItems } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
                芯
              </span>
              <div>
                <div className="text-lg font-bold text-white">
                  {company.name}
                </div>
                <div className="text-xs tracking-wide text-slate-400">
                  {company.nameEn}
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {company.intro}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">快速导航</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">联系我们</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>邮箱：{company.email}</li>
              <li>电话：{company.phone}</li>
              <li>地址：{company.headquarters}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {company.name} · {company.nameEn} ·
          版权所有
        </div>
      </div>
    </footer>
  );
}
