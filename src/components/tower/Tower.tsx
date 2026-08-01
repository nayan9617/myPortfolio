"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TowerFallback } from "./TowerFallback";

const TowerScene = dynamic(() => import("./TowerScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[280px] items-center justify-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist/40">
        Loading tower…
      </p>
    </div>
  ),
});

/**
 * The Tower — 3D on desktop (≥768px), static SVG below that.
 * Lazy-loads the three.js bundle only when the desktop scene mounts.
 */
export function Tower() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // SSR / first paint: show static fallback (no three.js in initial payload)
  if (isDesktop === null || !isDesktop) {
    return (
      <div className="flex h-full min-h-[240px] items-center justify-center py-4 md:min-h-[360px]">
        <TowerFallback />
      </div>
    );
  }

  return (
    <div className="relative h-[360px] w-full lg:h-[420px]">
      <p className="pointer-events-none absolute left-0 top-0 z-10 font-mono text-[10px] uppercase tracking-[0.18em] text-brass/70">
        The Tower · click a floor
      </p>
      <TowerScene />
    </div>
  );
}
