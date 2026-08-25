import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 border-b border-[rgba(70,57,36,0.14)]">
      <SectionHeader title="Featured Projects" index="02 / BUILD" />

      <div className="divide-y divide-[rgba(70,57,36,0.12)]">
        {(showAllProjects ? projects : projects.slice(0, 3)).map((project) => (
          <article
            key={project.title}
            className="py-6 sm:py-7 first:pt-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl sm:text-2xl font-serif font-bold text-ink hover:text-[#3954ff] transition-colors"
                >
                  {project.title}
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/5 hover:bg-black/10 text-ink/80 hover:text-ink font-mono text-[11px] font-semibold tracking-wider uppercase transition-all"
                >
                  <span>GitHub ↗</span>
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3954ff]/10 hover:bg-[#3954ff] text-[#3954ff] hover:text-white font-mono text-[11px] font-bold tracking-wider uppercase transition-all"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-muted flex-shrink-0">
                {project.index}
              </span>
            </div>

            <p className="text-sm sm:text-base text-muted leading-relaxed mb-4 max-w-4xl font-sans">
              {project.text}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-white/50 border border-[rgba(70,57,36,0.18)] font-mono text-[11px] uppercase tracking-wider text-ink/80 shadow-2xs hover:bg-white transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-6 py-3 rounded-lg border border-[rgba(70,57,36,0.22)] bg-white/60 hover:bg-white font-mono text-xs font-semibold tracking-wider uppercase text-ink transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
          >
            {showAllProjects ? "SHOW LESS ↑" : `VIEW ALL ${projects.length} PROJECTS ↓`}
          </button>
        </div>
      )}
    </section>
  );
}
