import {
  Award,
  CalendarClock,
  CheckCircle,
  Lock,
  Shield,
  ShieldCheck,
  Thermometer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import {
  automotiveCertifications,
  automotiveSolutionIntro,
} from "@/lib/site-config";

const certificationIcons: LucideIcon[] = [
  Award,
  ShieldCheck,
  Lock,
  Shield,
  CalendarClock,
  CheckCircle,
  Thermometer,
];

export function AutomotiveIntroSection() {
  return (
    <section className="bg-white pb-16 pt-6 sm:pb-[100px] sm:pt-2">
      <Container>
        <div className="mx-auto max-w-[1100px] space-y-6 sm:space-y-8">
          {automotiveSolutionIntro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 12)}
              className="text-justify text-[15px] leading-8 text-[#666] sm:text-base sm:leading-[32px]"
            >
              {paragraph}
            </p>
          ))}

          <p className="text-sm leading-8 text-[#666] sm:text-[15px]">
            <span className="text-[#e60012]">*</span>
            <a
              href="/about"
              className="text-[#0e68ae] hover:underline"
            >
              点击此处
            </a>
            填写表单或者联系荣芯半导体团队了解详细信息
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
          {automotiveCertifications.map((cert, index) => {
            const Icon = certificationIcons[index] ?? Award;
            return (
              <li key={cert.label} className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-[#8eb8d9] sm:size-20">
                  <Icon className="size-8 text-[#0e68ae] sm:size-10" strokeWidth={1.25} />
                </div>
                <p className="mt-5 text-xs leading-6 text-[#0e68ae] sm:mt-6 sm:text-sm">
                  {cert.label}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
