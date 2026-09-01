"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}

export function ProductScreenshot({
  src,
  alt,
  caption,
  priority = false,
}: ProductScreenshotProps) {
  return (
    <Reveal>
      <figure className="mt-16 md:mt-24">
        <div className="relative w-full border border-[#222A33] bg-[#0D1217] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-auto"
            style={{ aspectRatio: "16 / 9" }}
            sizes="100vw"
          />
        </div>
        <figcaption className="mt-4 text-xs text-[#5E6772] text-left">
          {caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}
