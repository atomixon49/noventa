"use client";

import { useEffect, useState } from "react";
import MetallicPaint, { parseLogoImage, type MetallicPaintParams } from "@/components/MetallicPaint";

export function MetallicLogo({
  src = "/logo-n.png",
  className,
  params,
}: {
  src?: string;
  className?: string;
  params?: Partial<MetallicPaintParams>;
}) {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const file = new File([blob], "logo.png", { type: blob.type || "image/png" });
        const parsed = await parseLogoImage(file);
        if (!cancelled) {
          setImageData(parsed.imageData);
        }
      } catch {
        if (!cancelled) {
          setImageData(null);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className={className}>
      {imageData ? (
        <MetallicPaint
          imageData={imageData}
          params={{
            edge: 2,
            patternBlur: 0.005,
            patternScale: 2,
            refraction: 0.015,
            speed: 0.3,
            liquid: 0.07,
            ...(params ?? {}),
          }}
        />
      ) : (
        <img src={src} alt="" className="h-full w-full object-contain opacity-70" />
      )}
    </div>
  );
}
