import React from "react";
import SectionHeader from "./SectionHeader";
import { work, education } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-14 lg:py-16 border-b border-[rgba(70,57,36,0.14)]">
      <SectionHeader title="Experience & Education" index="01 / BACKGROUND" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        
        {}
        <div>
          <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-muted mb-4 pb-2 border-b border-[rgba(70,57,36,0.12)]">
            Work Experience
          </h3>

          <div className="space-y-4">
            {work.map((item) => (
              <article
                key={item.title}
                className="bg-white/50 hover:bg-white/80 border border-[rgba(70,57,36,0.15)] rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[11px] font-bold text-[#3954ff] uppercase tracking-wider">
                    {item.org}
                  </span>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    {item.time}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-serif font-bold text-ink mb-1.5">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3">
                  {item.text}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white border border-[rgba(70,57,36,0.15)] font-mono text-[10px] font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {}
        <div>
          <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-muted mb-4 pb-2 border-b border-[rgba(70,57,36,0.12)]">
            Education
          </h3>

          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={item.title}
                className="bg-white/50 hover:bg-white/80 border border-[rgba(70,57,36,0.15)] rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[11px] font-bold text-[#3954ff] uppercase tracking-wider">
                    {item.org}
                  </span>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    {item.time}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-serif font-bold text-ink mb-1.5">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3">
                  {item.text}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white border border-[rgba(70,57,36,0.15)] font-mono text-[10px] font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
