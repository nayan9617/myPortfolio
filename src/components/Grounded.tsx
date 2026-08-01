import { grounded } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Grounded() {
  return (
    <section id="grounded" className="section-pad relative bg-forest">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-6 text-mist/60">Grounded</p>
          <blockquote className="max-w-2xl">
            <p className="font-display text-2xl leading-snug text-mist md:text-3xl text-balance">
              {grounded.statement}
            </p>
          </blockquote>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-mist/40">
            TODO: Nayan — write this in your own words
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
