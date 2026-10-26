import Image from "next/image";

import { Container } from "@/components/layout/container";
import { sustainabilityQuote } from "@/lib/site-config";

export function SustainabilityQuoteSection() {
  return (
    <section id="strategy" className="scroll-mt-36 bg-white py-[70px] sm:scroll-mt-40 sm:py-[110px]">
      <Container>
        <div className="relative min-h-[476px]">
          <div className="relative z-10 w-full lg:w-[51%]">
            <p
              className="select-none text-[80px] font-bold leading-none text-[#0068b7] sm:text-[128px]"
              aria-hidden
            >
              &ldquo;
            </p>
            <div className="mt-[-28px] rounded bg-white px-8 py-12 shadow-[0_4px_24px_0_rgba(0,104,183,0.1)] backdrop-blur-[3px] sm:px-[60px] sm:py-[76px]">
              <p className="mb-[18px] text-base leading-[1.4] text-[#666] sm:text-xl sm:leading-8">
                {sustainabilityQuote.lead}
              </p>
              {sustainabilityQuote.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 20)}
                  className="text-base leading-8 text-[#666]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <figure className="relative mt-8 aspect-[826/474] w-full overflow-hidden rounded-[5px] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[59%]">
            <Image
              src="/images/sustainability/quote.jpg"
              alt="可持续发展责任实践"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 59vw"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
