"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ParallaxLogo({
  src = "/Logo.PNG",
  size = 220,
  className,
}: {
  src?: string;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    let raf: number | null = null;

    function onMove(e: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const ry = (px - 0.5) * 16;
      const rx = (0.5 - py) * 16;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setTilt({ rx, ry });
      });
    }

    function onLeave() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTilt({ rx: 0, ry: 0 }));
    }

    const el = ref.current;
    if (!el) return;

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={
        "relative select-none" +
        (className ? " " + className : "")
      }
      style={{ perspective: 900, width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-teal-500/5 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-150"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(12px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            transform: "translateZ(18px)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 grid place-items-center" style={{ transform: "translateZ(24px)" }}>
          <Image src={src} alt="" width={size} height={size} className="h-[78%] w-[78%] object-contain" priority />
        </div>
      </div>
    </div>
  );
}
