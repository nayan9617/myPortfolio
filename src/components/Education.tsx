import { education } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-3">Build Log</p>
          <h2 className="font-display text-3xl text-mist md:text-4xl">
            Education
          </h2>

          <div className="mt-10 border-l border-brass/40 pl-6 md:pl-8">
            <h3 className="font-display text-xl text-mist md:text-2xl">
              {education.school}
            </h3>
            <p className="mt-2 font-body text-mist/70">{education.degree}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-brass">
              <span>CGPA {education.cgpa}</span>
              <span className="text-mist/40">{education.dates}</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
