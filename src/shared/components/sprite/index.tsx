import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/shared/lib/cn";

type Props = {
  src: string | StaticImageData | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isPixelated?: boolean;
};

function Sprite({
  src,
  alt,
  width = 64,
  height = 64,
  className,
  isPixelated = true,
}: Props) {
  const fallback = "/assets/sprites/placeholder.png";

  return (
    <Image
      src={src ?? fallback}
      alt={alt}
      width={width}
      height={height}
      className={cn(className, isPixelated ? "pixelated" : "smooth-pixels")}
      draggable={false}
      unoptimized
    />
  );
}

export default Sprite;
