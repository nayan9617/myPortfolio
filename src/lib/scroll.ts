/** Shared scroll helper — ~550ms ease-out so nav/tower jumps feel intentional, not sluggish. */
export const SCROLL_DURATION_MS = 550;
export const NAV_OFFSET_PX = 56;

export function scrollToSection(id: string, duration = SCROLL_DURATION_MS) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetY =
    el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;

  if (prefersReduced || duration <= 0) {
    window.scrollTo(0, targetY);
    history.replaceState(null, "", `#${id}`);
    return;
  }

  const startY = window.scrollY;
  const delta = targetY - startY;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    window.scrollTo(0, startY + delta * eased);
    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
  history.replaceState(null, "", `#${id}`);
}
