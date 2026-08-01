import { projects } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-granite/40">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-3">Build Log</p>
          <h2 className="font-display text-3xl text-mist md:text-4xl">
            Projects
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-16">
          {projects.map((project, i) => (
            <SectionReveal key={project.name} delay={i * 0.06}>
              <article className="group border-t border-mist/10 pt-8 transition-colors duration-micro ease-micro hover:border-brass/40">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl text-mist md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-body text-mist/65">
                      {project.tagline}
                    </p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-brass/80">
                      {project.stack}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 font-mono text-xs">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-mist/15 px-3 py-1.5 text-mist/70 transition-colors duration-micro ease-micro hover:border-brass hover:text-brass"
                    >
                      GitHub ↗
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-brass/40 bg-brass/10 px-3 py-1.5 text-brass transition-colors duration-micro ease-micro hover:bg-brass hover:text-bedrock"
                      >
                        Live ↗
                      </a>
                    ) : null}
                  </div>
                </div>

                <ul className="mt-6 max-w-3xl space-y-3">
                  {project.bullets.map((bullet) => (
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
