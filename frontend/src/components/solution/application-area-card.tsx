import Image from "next/image";
import Link from "next/link";

type ApplicationAreaCardProps = {
  title: string;
  image: string;
  href: string;
  description?: string;
};

export function ApplicationAreaCard({
  title,
  image,
  href,
  description,
}: ApplicationAreaCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_3px_7px_1px_rgba(138,150,172,0.18)] transition-shadow hover:shadow-[0_8px_20px_2px_rgba(138,150,172,0.28)]"
    >
      <article className="relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </article>
      <div className="flex flex-1 flex-col px-5 py-5">
        <h2 className="text-xl font-bold leading-[1.4] text-[#0b254b] transition-colors group-hover:text-[#0068b7]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#666]">{description}</p>
        ) : null}
        <span className="mt-4 inline-flex items-center text-sm text-[#0068b7]">
          查看详情
          <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
