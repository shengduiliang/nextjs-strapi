import Image from "next/image";
import Link from "next/link";

type CertificateCardProps = {
  title: string;
  href: string;
};

export function CertificateCard({ title, href }: CertificateCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="flex items-center justify-between bg-[#f7f8fb] px-[37px] py-9 transition-colors hover:bg-[#eef1f7]">
        <span className="flex min-w-0 flex-1 items-center">
          <Image
            src="/images/quality/cert-icon.svg"
            alt=""
            width={27}
            height={27}
            className="size-[27px] shrink-0"
            aria-hidden
          />
          <span className="truncate pl-3 pr-2.5 text-xl font-bold leading-[1.5] text-[#0b254b]">
            {title}
          </span>
        </span>
        <Image
          src="/images/quality/download-icon.svg"
          alt=""
          width={24}
          height={24}
          className="size-6 shrink-0"
          aria-hidden
        />
      </div>
    </Link>
  );
}
