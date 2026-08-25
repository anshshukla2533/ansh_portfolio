import React from "react";

export default function SectionHeader({ title, index }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 pb-4 sm:pb-6">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-ink tracking-tight">
        {title}
      </h2>
      <span className="font-mono text-[11px] sm:text-xs tracking-widest uppercase text-accent font-semibold">
        {index}
      </span>
    </div>
  );
}
