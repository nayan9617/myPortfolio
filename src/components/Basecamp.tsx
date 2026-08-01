import { contact } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Basecamp() {
  return (
    <footer id="basecamp" className="section-pad border-t border-mist/10">
      <div className="container-ascent">
        <SectionReveal>
          <p className="eyebrow mb-4">Basecamp</p>
          <h2 className="font-display text-3xl text-mist md:text-4xl max-w-lg text-balance">
            The climb continues. Reach out.
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-mist/60">
            Open to internships, collaborations, and conversations about
            systems that ship.
          </p>

          <ul className="mt-10 space-y-3 font-mono text-sm text-mist/70">
            <li>
              <a href={`tel:${contact.phone}`} className="link-quiet">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="link-quiet">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet underline-quiet"
              >
                {contact.linkedinLabel}
              </a>
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet underline-quiet"
              >
                {contact.githubLabel}
              </a>
            </li>
            <li className="text-mist/50">{contact.location}</li>
          </ul>

          <div className="mt-10">
            {contact.resumeHref ? (
              <a
                href={contact.resumeHref}
                download
                className="inline-flex items-center bg-brass px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-bedrock transition-opacity duration-micro ease-micro hover:opacity-90"
              >
                Download Resume
              </a>
            ) : (
              <p className="inline-flex items-center border border-dashed border-brass/50 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass/80">
                TODO: Resume PDF — add file &amp; link
              </p>
            )}
          </div>

          <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.18em] text-mist/30">
            Nayan Patidar · Foundation → Ascent · {new Date().getFullYear()}
          </p>
        </SectionReveal>
      </div>
    </footer>
  );
}
