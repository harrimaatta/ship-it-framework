import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function BrandMark({
  className,
  width = 48,
  height = 48,
}: BrandMarkProps) {
  return (
    <Image
      src="/brand/shipit-icon.png"
      alt=""
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      priority
    />
  );
}
