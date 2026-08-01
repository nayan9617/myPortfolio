import { positions } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Positions() {
  return (
    <section id="positions" className="section-pad">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-3">Build Log</p>
          <h2 className="font-display text-3xl text-mist md:text-4xl">
            Positions of Responsibility
          </h2>

          <div className="mt-10 space-y-10">
            {positions.map((pos) => (
              <article key={pos.org}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-xl text-mist md:text-2xl">
                      {pos.org}
                    </h3>
                    <p className="mt-1 font-body text-sm text-mist/65">
                      {pos.role}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-brass">
                    {pos.dates}
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {pos.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 font-body text-sm leading-relaxed text-mist/70 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:bg-brass/60"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
