import { achievements } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Summit() {
  return (
    <section id="summit" className="section-pad bg-mist text-bedrock">
      <div className="container-ascent">
        <SectionReveal>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-forest">
            The Summit
          </p>
          <h2 className="font-display text-3xl text-bedrock md:text-4xl">
            Achievements
          </h2>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {achievements.map((item) => (
              <li
                key={item.label}
                className="border-t border-bedrock/15 pt-5 transition-colors duration-micro ease-micro hover:border-brass"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bedrock/50">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-2xl text-bedrock md:text-3xl">
                  <span className="text-brass">{item.value}</span>
                </p>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
