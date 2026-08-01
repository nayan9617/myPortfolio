import { experience } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-3">Build Log</p>
          <h2 className="font-display text-3xl text-mist md:text-4xl">
            Experience
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-14">
          {experience.map((job, i) => (
            <SectionReveal key={job.org} delay={i * 0.08}>
              <article>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl text-mist md:text-2xl">
                        {job.org}
                      </h3>
                      {"location" in job && job.location ? (
                        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mist/40">
                          {job.location}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 font-body text-sm text-mist/65">
                      {job.role}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-brass">
                    {job.dates}
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 font-body text-sm leading-relaxed text-mist/70 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:bg-brass/60"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
