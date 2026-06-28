import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <Image
      src="/brand/shipit-icon.png"
      alt=""
      width={48}
      height={48}
      className={className}
      aria-hidden="true"
      priority
    />
  );
}
