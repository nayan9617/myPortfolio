import { grounded } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Grounded() {
  return (
    <section id="grounded" className="section-pad relative overflow-hidden bg-bedrock">
      {/* Quiet forest wash — accent, not a solid green slab */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_50%,rgba(36,64,47,0.55),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-forest via-forest/40 to-transparent"
      />

      <div className="container-ascent relative">
        <SectionReveal>
          <div className="border-l-2 border-forest pl-6 md:pl-8">
            <p className="eyebrow mb-6">Grounded</p>
            <blockquote className="max-w-2xl">
              <p className="font-display text-2xl leading-snug text-mist md:text-3xl text-balance">
                {grounded.statement}
              </p>
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
