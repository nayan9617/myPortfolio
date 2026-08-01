"use client";

import { useReducedMotion } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { sections, type SectionId } from "@/data/content";

export function ElevationRail() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progress = reduceMotion ? scrollYProgress : smoothProgress;
  const markerTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  const [activeId, setActiveId] = useState<SectionId>(sections[0].id);
  const [arrived, setArrived] = useState<Partial<Record<SectionId, boolean>>>(
    {}
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(section.id);
            setArrived((prev) =>
              prev[section.id] ? prev : { ...prev, [section.id]: true }
            );
          }
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];
  const activeIndex = sections.findIndex((s) => s.id === activeId);

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed right-0 top-0 z-40 hidden h-screen w-24 lg:block"
    >
      <div className="relative flex h-full items-stretch justify-end pr-6 pt-24 pb-16">
        {/* Rail track */}
        <div className="relative h-full w-px bg-granite">
          <div className="absolute inset-0 bg-brass/30" />
          <motion.div
            className="absolute left-0 top-0 w-px origin-top bg-brass"
            style={{
              scaleY: progress,
              height: "100%",
            }}
          />

          {/* Section ticks */}
          {sections.map((section, i) => {
            const top = `${(i / (sections.length - 1)) * 100}%`;
            const isActive = section.id === activeId;
            const hasArrived = arrived[section.id];

            return (
              <div
                key={section.id}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top }}
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-colors duration-micro ease-micro ${
                    isActive || hasArrived ? "bg-brass" : "bg-granite"
                  } ${
                    hasArrived && isActive && !reduceMotion
                      ? "animate-rail-glow"
                      : ""
                  }`}
                />
              </div>
            );
          })}

          {/* Traveling marker */}
          <motion.div
            className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ top: markerTop }}
          >
            <span
              className={`block h-3 w-3 rounded-full border-2 border-brass bg-bedrock ${
                arrived[activeId] && !reduceMotion ? "animate-rail-glow" : ""
              }`}
            />
          </motion.div>
        </div>

        {/* Active label */}
        <div className="absolute right-10 top-1/2 w-36 -translate-y-1/2 text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
            {/* altitude is stylistic only — not a real measurement */}
            {active.altitude}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-mist/80">
            {active.label}
          </p>
          <p className="mt-3 font-mono text-[9px] tracking-wider text-mist/35">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(sections.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </aside>
  );
}

export function MobileProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
  });
  const progress = reduceMotion ? scrollYProgress : smooth;
  const [label, setLabel] = useState<string>(sections[0].label);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setLabel(section.label);
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 lg:hidden">
      <div className="flex items-center justify-between gap-3 bg-bedrock/95 px-4 py-2.5 backdrop-blur-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brass truncate">
          {label}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-mist/40 shrink-0">
          NP
        </span>
      </div>
      <div className="h-[2px] w-full bg-granite">
        <motion.div
          className="h-full origin-left bg-brass"
          style={{ scaleX: progress }}
        />
      </div>
    </div>
  );
}
