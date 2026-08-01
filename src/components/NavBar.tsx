"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { navFloors, type NavFloorId } from "@/data/content";
import { scrollToSection } from "@/lib/scroll";

export function NavBar() {
  const [activeId, setActiveId] = useState<NavFloorId>("foundation");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const progress = reduceMotion ? scrollYProgress : smooth;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navFloors.forEach((floor) => {
      const el = document.getElementById(floor.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(floor.id);
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Honor deep links like /#projects on first paint
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    if (!navFloors.some((f) => f.id === hash) && hash !== "education") return;
    // Small delay so layout (nav offset) is ready
    const t = window.setTimeout(() => scrollToSection(hash, 0), 50);
    return () => window.clearTimeout(t);
  }, []);

  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-bedrock">
      <nav
        aria-label="Site sections"
        className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-3 py-2.5 md:justify-center md:gap-0 md:px-6 lg:pr-28"
      >
        <a
          href="#foundation"
          className="mr-2 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-brass md:mr-4"
          onClick={(e) => onNavClick(e, "foundation")}
        >
          NP
        </a>

        <ul className="flex items-center gap-0.5 md:gap-1">
          {navFloors.map((floor, i) => {
            const isActive = activeId === floor.id;
            return (
              <li key={floor.id} className="flex items-center">
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="mx-0.5 hidden font-mono text-[9px] text-mist/25 sm:inline md:mx-1.5"
                  >
                    ·
                  </span>
                ) : null}
                <a
                  href={`#${floor.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => onNavClick(e, floor.id)}
                  className={`whitespace-nowrap px-1.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors duration-micro ease-micro sm:text-[10px] md:px-2 md:tracking-[0.16em] ${
                    isActive
                      ? "text-brass"
                      : "text-mist/55 hover:text-mist"
                  }`}
                >
                  {floor.navLabel}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="h-px w-full bg-brass/40">
        <motion.div
          className="h-px origin-left bg-brass"
          style={{ scaleX: progress }}
          aria-hidden
        />
      </div>
    </header>
  );
}
