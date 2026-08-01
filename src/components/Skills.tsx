import { skills } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-granite/40">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-3">Build Log</p>
          <h2 className="font-display text-3xl text-mist md:text-4xl">Skills</h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-mist/10 bg-bedrock/40 px-2.5 py-1 font-mono text-xs text-mist/75 transition-colors duration-micro ease-micro hover:border-brass/40 hover:text-mist"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
