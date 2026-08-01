import { ElevationRail, MobileProgress } from "@/components/ElevationRail";
import { Hero } from "@/components/Hero";
import { Grounded } from "@/components/Grounded";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Positions } from "@/components/Positions";
import { Summit } from "@/components/Summit";
import { Basecamp } from "@/components/Basecamp";

export default function Home() {
  return (
    <>
      <a
        href="#foundation"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-bedrock"
      >
        Skip to content
      </a>
      <MobileProgress />
      <ElevationRail />
      <main>
        <Hero />
        <Grounded />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Positions />
        <Summit />
        <Basecamp />
      </main>
    </>
  );
}
