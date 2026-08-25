import React from "react";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 border-b border-[rgba(70,57,36,0.14)]">
      <SectionHeader title="Technical Skills" index="03 / STACK" />

      <div className="divide-y divide-[rgba(70,57,36,0.12)] border-y border-[rgba(70,57,36,0.12)]">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 items-center"
          >
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">
              {group.label}
            </span>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-lg bg-white/50 border border-[rgba(70,57,36,0.18)] font-sans text-xs text-ink shadow-2xs hover:bg-white hover:border-[rgba(70,57,36,0.3)] transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
