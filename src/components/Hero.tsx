import { contact, hero } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Hero() {
  return (
    <section
      id="foundation"
      className="section-pad relative min-h-[100svh] flex items-end md:items-center pt-20 md:pt-0"
    >
      {/* Atmospheric bedrock grain — structural, not decorative gradient template */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_100%,rgba(36,64,47,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_10%,rgba(201,162,75,0.08),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Bedrock strata line at the base */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest to-transparent opacity-60" />
      </div>

      <div className="container-ascent relative w-full">
        <SectionReveal>
          <p className="eyebrow mb-6">Foundation · Elevation 000m</p>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-mist sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {hero.name}
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-mist/70 md:text-lg">
            {hero.role}
          </p>

          <p className="mt-8 max-w-2xl font-display text-xl leading-snug text-mist md:text-2xl lg:text-[1.65rem] text-balance">
            {hero.line}
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-mist/55 sm:text-[13px]">
            <li>
              <a href={`tel:${contact.phone}`} className="link-quiet">
                {contact.phone}
              </a>
            </li>
            <li aria-hidden className="text-mist/25">
              ·
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="link-quiet">
                {contact.email}
              </a>
            </li>
            <li aria-hidden className="text-mist/25">
              ·
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                LinkedIn
              </a>
            </li>
            <li aria-hidden className="text-mist/25">
              ·
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                GitHub
              </a>
            </li>
            <li aria-hidden className="text-mist/25">
              ·
            </li>
            <li className="text-mist/55">{contact.location}</li>
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center bg-brass px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-bedrock transition-opacity duration-micro ease-micro hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              View Build Log
            </a>
            <a
              href="#basecamp"
              className="inline-flex items-center border border-mist/20 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-mist transition-colors duration-micro ease-micro hover:border-brass hover:text-brass"
            >
              Reach Basecamp
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
