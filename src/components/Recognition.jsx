import React from "react";
import SectionHeader from "./SectionHeader";
import { recognition } from "../data/portfolioData";

export default function Recognition() {
  return (
    <section id="recognition" className="py-10 sm:py-14 lg:py-16 border-b border-[rgba(70,57,36,0.14)]">
      <SectionHeader title="Achievements & Leadership" index="04 / RECOGNITION" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {recognition.map((item) => (
          <article
            key={item.title}
            className="bg-white/50 hover:bg-white/80 border border-[rgba(70,57,36,0.15)] rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-accent">
                {item.kind}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#3954ff]/10 font-mono text-[10px] font-semibold text-[#3954ff]">
                {item.badge}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-serif font-bold text-ink mb-1.5">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
