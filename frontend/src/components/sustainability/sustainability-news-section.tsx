"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { sustainabilityExplore, sustainabilityNews } from "@/lib/site-config";

export function SustainabilityNewsSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="news" className="scroll-mt-36 bg-[#f5f7fa] py-16 sm:scroll-mt-40 sm:py-[110px]">
      <Container>
        <h2 className="text-3xl font-bold text-[#0b254b] sm:text-[40px] sm:leading-[63px]">
          我们正不断探索
        </h2>

        <div className="mt-12 overflow-hidden rounded-sm bg-white shadow-sm lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative aspect-[16/9] w-full bg-[#0b254b] lg:aspect-auto lg:min-h-[390px]">
            {playing ? (
              <video
                className="absolute inset-0 size-full object-cover"
                src={sustainabilityExplore.videoSrc}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0"
                aria-label={`播放视频：${sustainabilityExplore.title}`}
              >
                <Image
                  src={sustainabilityExplore.cover}
                  alt={sustainabilityExplore.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <span className="absolute inset-0 bg-black/25" aria-hidden />
                <span className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/sustainability/play-icon.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="size-14 opacity-95 transition-transform group-hover:scale-105 sm:size-16"
                    aria-hidden
                  />
                </span>
              </button>
            )}
          </div>
          <div className="flex flex-col justify-center px-8 py-10 sm:px-12">
            <p className="text-2xl font-medium text-[#0b254b] sm:text-[28px]">
              {sustainabilityExplore.title}
            </p>
            <p className="mt-5 text-base leading-8 text-[#666]">
              {sustainabilityExplore.description}
            </p>
          </div>
        </div>

        <h3 className="mt-16 text-xl font-medium text-[#333]">新闻与博客</h3>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sustainabilityNews.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full border border-[#eee] bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <p className="text-base text-[#0068b7]">{item.category}</p>
                <h4 className="mt-3 text-xl font-medium leading-8 text-[#333]">
                  {item.title}
                </h4>
                <p className="mt-6 text-base text-[#999]">{item.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
